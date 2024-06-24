import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from "./View/Main.tsx"
import Main from './View/Main';
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main title='TS' decorator=' Trial'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
