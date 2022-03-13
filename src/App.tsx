import React from "react";
import Content from "./components/Content";
import classes from "./App.styles.ts";

export function App(): JSX.Element {
  return (
    <div>
      <div data-testid="greetings-container" className={classes.title}>
        Let's plan your <strong>saving goal</strong>
      </div>
      <div className={classes.contant}>
        <Content />
      </div>
    </div>
  );
}
