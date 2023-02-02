
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Pagina1 from './components/pagess/page1';
import Pagina2 from './components/pagess/page2';
import Pagina3 from './components/pagess/page3';
import {
  Routes,
  Route,
} from "react-router-dom";

//npm install react-router-dom
function App() {

  
  return (
    <div className="App"> 
    <Header/>
        <Routes>
          <Route path='/Pagina1' element={<Pagina1/>}/>
          <Route path='/Pagina2' element={<Pagina2/>}/>
          <Route path='/Pagina3' element={<Pagina3/>}/>
        </Routes>  
        <Footer/> 
    </div>
  ); 
}


export default App;
