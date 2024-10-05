import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Stud</h1>
        </div>
        <div className='toggle'>
          <div className='toggle_back'>
            <div className='toggle_btn'>
              Me
            </div>
          </div>
        </div>
        <div className='profile'></div>
      </header>

      <div className='container'>

        <div className='arrow'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16.2846L19.1925 8.57116" stroke="black" stroke-linecap="round"/>
            <path d="M10 16.2846L19.1925 23.9981" stroke="black" stroke-linecap="round"/>
          </svg>
          <p>athor</p>
        </div>
     

        <div className='album'>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
        </div>
      </div>

    </div>
  );
}

export default App;
