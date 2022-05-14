import './App.scss';
import { CounterCartContextProvider } from './hooks/useItems';
import AppRoutes from './routes';

function App() {
  return (
    <CounterCartContextProvider>
      <AppRoutes />
    </CounterCartContextProvider>
  );
}

export default App;
