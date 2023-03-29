import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import { Footer } from './Components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from './Home';
import { About } from './About';
import Mytest from './Page/Mytest';


function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={About} />
            {/* <Route path="/news/:id" component={PageBlog} /> */}
            <Route path="/work" component={Mytest} />
          </div>
        </Switch>
      </Router>
      <Footer />
    </>
  );

}

export default App;
