import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Research from './components/Research';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Router>
         
         <Routes>
            <Route path='/header' element={<Header/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/' element={<Body/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/research' element={<Research/>}/>
            <Route path='/projects' element={<Projects/>}/>

         </Routes>

      </Router>
     
    </div>
  );
}

export default App;
