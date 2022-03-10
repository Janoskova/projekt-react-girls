import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/index';
import Arranging from './pages/Arranging';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/razeni">
            <Arranging />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
