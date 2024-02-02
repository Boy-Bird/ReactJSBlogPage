import Feed from "./Feed"
const Home = ({ posts, fetchError }) => {
  return (
    <main className="Home">
      {fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
      {!fetchError && (posts.length ? <Feed posts={posts} /> : <p className="statusMsg">No posts to display.</p>)}
    </main>
  )
}

export default Home