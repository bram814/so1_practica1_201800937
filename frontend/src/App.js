
import React from 'react';
import { Route, Routes} from 'react-router-dom';
/* import env */
import { ENV_HOME, ENV_REGISTRY, ENV_READ, ENV_UPDATE, ENV_DELETE } from './Config/env';
/* import page */
import Home from './Pages/Home';
/* import Component */
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
/* Component car */
import Registry from './Component/Car/Registry';
import Read from './Component/Car/Read';
import Update from './Component/Car/Update';
import Delete from './Component/Car/Delete';

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
            <Route path={ENV_UPDATE}      element={<Update />} />
            <Route path={ENV_DELETE}      element={<Delete />} />
          </Routes>
        </div>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
