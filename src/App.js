import "./App.css"
import Profile from "./Profil/Profile"
import Stats from "./Profil/Stats"
import user from "./Profil/user.json"

function App() {
  /* Ex.1 Start */
  const { username, tag, location, avatar } = user
  const { followers, views, likes } = user.stats
  /* Ex.1 End */

  return (
    <div className="App">
      <header className="App-header">
        {/* Ex.1 Start */}
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <Stats followers={followers} views={views} likes={likes} />
        {/* Ex.1 End */}
      </header>
    </div>
  )
}

export default App
