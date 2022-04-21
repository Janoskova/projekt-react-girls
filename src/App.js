import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import './scss/main.scss';
import ScrollToTop from './utils/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import Ordering from './pages/Ordering';
import Map from './pages/Map';
import Statement from './pages/Statement';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <DndProvider options={HTML5toTouch}>
        <ScrollToTop />
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/razeni">
              <Ordering />
            </Route>
            <Route path="/presouvani">
              <Map />
            </Route>
            <Route path="/dobyvani">
              <Statement />
            </Route>
          </Switch>
        </main>
        <Footer />
      </DndProvider>
    </>
  );
}

export default App;
