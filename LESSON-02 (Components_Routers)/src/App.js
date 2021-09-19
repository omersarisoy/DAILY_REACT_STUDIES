import React from 'react';
import Header from './component/Header';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Post from './pages/Post';


const App = () => {
  return (

    // <Router forceRefresh basename="/clarusway"> 

    <Router>

    <div className="App">
      <Header />
    </div>

    <Switch>
    <Route path="/about" component={About} />
    <Route path="/profile" component={Profile} /> {/* path case sensitive değil */}
    <Route exact path="/" component={Home} />
    <Route path="/post/:id" component={Post} />
    <Route component={NotFound} />
    </Switch>

    {/* {Switch yukarıdan aşağı okur ve ilk karşına çıkanı alır. Home için bu durumdan kurtulmak için ya exact yazacağız , ya da sıraya koyup Home u en alta alacağız } */}
    
    </Router>
  )
}

export default App;































