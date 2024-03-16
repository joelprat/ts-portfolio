import "./App.css";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <div className="app-cover">
        <video
          className="video-bg"
          playsInline
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src="/video-c.mp4" type="video/mp4"></source>
        </video>
        <Landing />
      </div>
    </div>
  );
}

export default App;
