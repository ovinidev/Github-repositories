import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RepositoryList } from "./components/RepositoryList";
import { globalStyles } from "./styles/global"

export const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {globalStyles()}
      <RepositoryList />
    </QueryClientProvider>
  )
}

export default App
