
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddProduct from './components/fucnComponent';
import AddProductClass from './components/classComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header p-5">
       <AddProductClass />
      </header>
    </div>
  );
}

export default App;
