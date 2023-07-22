import MainForm from "./Components/MainForm";
import React from 'react';
import { CardProvider } from "./Components/CardContext";
import { AddonsProvider } from "./Components/AddonsContext";

function App() {

  return (
    <div>
      <div className="main-container">
      <CardProvider>
        <AddonsProvider>
        <MainForm/>
        </AddonsProvider>
        </CardProvider>

      </div>
    </div>
  );
}

export default App;

