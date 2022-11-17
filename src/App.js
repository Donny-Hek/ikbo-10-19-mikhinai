import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/header">Header</Link>
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
// return(
//   <Header qoute='Omae Wa Mou Shindeiru' author='Kenshiro'/>
// );
// return (<Header />);
// return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
// );

export default App;
