import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          Created by A.A Ioannides, open-sourced on{" "}
          <a
            href="https://github.com/AIoannides/react-app-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://lucid-neumann-63ac51.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
