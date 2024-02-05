import Feed from "./Feed";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {
  const { searchResults, fetchError } = useContext(DataContext);
  return (
    <main className="Home">
      {fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
      {!fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMsg">No posts to display.</p>)}
    </main>
  )
}

export default Home