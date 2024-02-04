import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
       <Routes>
       <Route path='/reduxpractice' exact Component={ProductListing} />
       <Route path='/product/:productId' exact Component={ProductDetail} />
       <Route>404 Not Found!</Route>
       </Routes>
      </Router>

    </div>
  );
}

export default App;
