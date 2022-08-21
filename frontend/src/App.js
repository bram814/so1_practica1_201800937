
import React from 'react';
import { Route, Routes} from 'react-router-dom';
/* import env */
import { ENV_HOME, ENV_REGISTRY, ENV_READ } from './Config/env';
/* import page */
import Home from './Pages/Home';
/* import Component */
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
/* Component car */
import Registry from './Component/Car/Registry';
import Read from './Component/Car/Read';

function App() {
  return (
    <div className="App">



      <Navbar />
      <main>
         <div className="container">
          <Routes>
            <Route path={ENV_HOME}        element={<Home />} />
            <Route path={ENV_REGISTRY}    element={<Registry />} />
            <Route path={ENV_READ}        element={<Read />} />
          </Routes>
        </div>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
