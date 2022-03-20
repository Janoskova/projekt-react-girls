import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './scss/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Arranging from './pages/Arranging';
import Map from './pages/Map';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
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
