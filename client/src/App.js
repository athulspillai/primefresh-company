
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Sales from './components/Sales';
import Hr from './components/Hr';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/Sales' element={<Sales/>}/>
        <Route path='/hr' element={<Hr/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
