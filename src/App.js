import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/checkout"
          element={
            <div className="app">
              {/* //BEM naming convention */}
              <Header />
              <h1>I am a checkout</h1>
            </div>
          }
        ></Route>
        <Route
          path="/"
          element={
            <div className="app">
              <Header />
              <Home />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
