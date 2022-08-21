
import React from 'react';
import { Route, Routes} from 'react-router-dom';
/* import env */
import { ENV_HOME, ENV_REGISTRY } from './Config/env';
/* import page */
import Home from './Pages/Home';
/* import Component */
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Registry from './Component/Carr/Registry';

function App() {
  return (
    <div className="App">



      <Navbar />
      <main>
         <div className="container">
          <Routes>
            <Route path={ENV_HOME}        element={<Home />} />
            <Route path={ENV_REGISTRY}    element={<Registry />} />
          </Routes>
        </div>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
