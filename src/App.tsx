import { RepositoryList } from "./components/RepositoryList";
import { globalStyles } from "./styles/global"

function App() {

  return (
    <>
      {globalStyles()}
      <RepositoryList />
    </>
  )
}

export default App
