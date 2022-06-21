import logo from './logo.svg';
import './App.css';
import { Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img className="pilt" src="https://geenius.ee/app/uploads/sites/4/2018/06/3150df1ed3a118814f15a956c54c1eab.jpeg" alt=""
      <button className="nupu-css">Nupp</button>
     
      <Routes>
        <Route path='' element={ <Avaleht />} />
        <Route path
          <div>
            <div>AVALEHT</div>

            <Link to="/ostukorv">
        <button>OSTUKORVI</button>
      </Link>
          </div>}
        

        <Route path= 'ostukorv' element={
        </Link>
        <div>OSTUKORV</div>
        </div>
        }
      </Routes>
    </div>
  );
}

export default App;