import React from "react";
import Content from "./components/Content";
import styles from "./App.module.css";

export function App(): JSX.Element {
  return (
    <div>
      <h3 data-testid="greetings-container" className={styles.main_title}>
        Let's plan your <strong> saving goal </strong>
      </h3>
      <Content />
    </div>
  );
}
