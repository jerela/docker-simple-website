import "./App.css";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>This text is defined in App.js</h1>
        <p>This is a minimal example of a website with React, mostly adapted from welcome-to-docker.</p>
      </header>
    </div>
  );
};

export default App;
