import { StoreProvider } from "./store";
import AppRouter from "./AppRouter";

const App = () => (
  <StoreProvider>
    <AppRouter />
  </StoreProvider>
);

export default App;
