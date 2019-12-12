import React, { useState, useEffect, useCallback } from "react";
import { useToast } from '@chakra-ui/core';

import { useStoreState, useStoreActions } from "src/store";
import { isEmpty } from "src/common";
import { NewsCard } from "./NewsCard";
import { SearchField } from "./SearchField";
import { Container, Layout, GridLayout, LoadingIndicator } from "../shared";

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
        toast({
          title: "Failed to get news",
          status: "error"
        });
      } finally {
        setIsLoading(false);
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
      <SearchField onSubmit={getItems}/>
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
