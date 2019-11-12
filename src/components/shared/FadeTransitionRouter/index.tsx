import React from "react";
import { Router, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface Props {
  children: React.ReactNode;
}

export function FadeTransitionRouter(props: Props) {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            {/* the only difference between a router animation and
                any other animation is that you have to pass the
                location to the router so the old screen renders
                the "old location" */}
            <Router location={location} className="router">
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
}
