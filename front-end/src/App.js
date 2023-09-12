import "./styles.css";

import Body from "./components/Body";

export default function App() {
  return (
    <div className="App">
      <div className="text-center logo-container">
        <img src="/images/url_short.png" alt="Url-shortener-logo" />
      </div>
      <div className="card text-center mb-3 custom-card">
        <h1>URL Shortener</h1>
        <Body />
        <h2>
          {" "}
          Made with 🖤 by{" "}
          <a href="https://github.com/thenameisajay">
            Ajay Pradeep Mahadeven
          </a>{" "}
        </h2>
      </div>
    </div>
  );
}
