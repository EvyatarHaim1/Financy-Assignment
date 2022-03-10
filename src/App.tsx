import Content from "./components/Content";
import { styles } from "./App.styles";

export function App(): JSX.Element {
  return (
    <div>
      <div data-testid="greetings-container" style={styles.title}>
        Let's plan your <strong>saving goal</strong>
      </div>
      <div style={styles.contant}>
        <Content />
      </div>
    </div>
  );
}
