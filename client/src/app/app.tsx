import React from "react";
import "./app.scss";
import Header from "./header/header";
import Content from "./content/content";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
};

export default App;
