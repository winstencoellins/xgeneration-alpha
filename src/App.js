import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SkipToMain from './components/SkipToMain';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Learn from './pages/Learn';
import Contact from './pages/Contact';
import About from './pages/About';
import ReactGA from 'react-ga';

ReactGA.initialize("UA-199520581-1");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <SkipToMain />
      <Navbar />
      <Switch>
        <ScrollToTop path="/">
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </ScrollToTop>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
