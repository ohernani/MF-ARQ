import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const container = document.getElementById('root');
const root = createRoot(container!);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
