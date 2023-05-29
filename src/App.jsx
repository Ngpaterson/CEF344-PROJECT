import './index.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Academy from './components/academic_achievements/Academic_achievements';
import Skills from './components/skills/Skills'
function App() {
return (
<>
<Header/>
<Navbar/>
<About/>
<Academy/>
<Skills/>
<Contact/>
<Footer/>
</>
);
}
export default App;