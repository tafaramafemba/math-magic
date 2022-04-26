import react from 'react';
import Nav from './components/Nav';
import Calculator from './components/calculator';
import Home from './components/Home';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Quote from './components/Quote';

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
          <Route path="/quote" element={<Quote />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/calculator" element={<Calculator />}/>
          </Routes>
        </div>
      </BrowserRouter>

    );
  }
}
export default App;
