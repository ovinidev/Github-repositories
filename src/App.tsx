import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { RepositoryList } from "./Pages/RepoList";
import { MainRoutes } from "./Pages/Routes";
import { globalStyles } from "./styles/global"

export const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {globalStyles()}
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
