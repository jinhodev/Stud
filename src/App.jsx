import './App.css';
import { Header } from './components/Header';
import { Arrow } from './components/Arrow';
import { Album } from './components/Album';


function App() {
  return (
    <div className="App">
        <Header/>
      <div className='container'>
        <Arrow/>
        <Album/>
      </div>

    </div>
  );
}

export default App;
