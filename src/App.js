import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import './scss/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Arranging from './pages/Arranging';
import Map from './pages/Map';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <DndProvider options={HTML5toTouch}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/razeni">
              <Arranging />
            </Route>
            <Route path="/presouvani">
              <Map />
            </Route>
          </Switch>
        </main>
        <Footer />
      </DndProvider>
    </>
  );
}

export default App;
