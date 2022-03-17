import { Route, Switch } from 'react-router-dom';
import './scss/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Arranging from './pages/Arranging';
import Moving from './pages/Moving';
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
          <Route path="/presouvani">
            <Moving />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
