import React, { useState, useEffect, useCallback } from "react";
import { useStoreState, useStoreActions } from "src/store";
import { useToast } from "@chakra-ui/core";
import { NewsCard } from "./NewsCard";
import { Container, Layout, GridLayout, LoadingIndicator } from "../shared";
import { isEmpty } from "src/common";
import { SearchField } from "./SearchField";

export function News() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const items = useStoreState(state => state.news.items);
  const fetchItems = useStoreActions(actions => actions.news.fetchItems);

  const getItems = useCallback(
    async (search?: string) => {
      try {
        setIsLoading(true);
        await fetchItems({ page: items.current_page, search: search });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Failed to get news",
          status: "error"
        });
      }
    },
    [fetchItems, toast, items.current_page]
  );

  useEffect(() => {
    if (isEmpty(items.data) && !isLoading) {
      getItems();
    }
  }, [items.data, isLoading, getItems]);

  return (
    <Container>
      <Layout>
        <SearchField onSubmit={getItems} />
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <GridLayout>
            {items.data.map(item => (
              <NewsCard
                key={item.id + item.title}
                id={item.id}
                title={item.title}
                image={item.images}
              />
            ))}
          </GridLayout>
        )}
      </Layout>
    </Container>
  );
}
