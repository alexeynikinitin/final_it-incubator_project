import React from 'react';
import {Project} from "./project/Project";
import {HashRouter} from "react-router-dom";

function App() {
   return (
      <div className="App">
         <HashRouter>
            <Project/>
         </HashRouter>
      </div>
   );
}

export default App;
