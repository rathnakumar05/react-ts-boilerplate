import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router';
import { reactQueryConfig } from './config/reactQueryConfig';

const queryClient = new QueryClient(reactQueryConfig);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
