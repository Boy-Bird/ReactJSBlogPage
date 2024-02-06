import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({fetchError}) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">
      {fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
      {!fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMsg">No posts to display.</p>)}
    </main>
  )
}

export default Home