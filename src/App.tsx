import { QueryClient, QueryClientProvider } from 'react-query';
import { Landing } from './Landing/Landing';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Landing />
    </QueryClientProvider>
  );
};

export { App };
