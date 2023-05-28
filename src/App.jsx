import './index.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Academy from './components/experience/Academic_achievements';
function App() {
return (
<>
<Header/>
<Navbar/>
<About/>
<Academy/>
<Contact/>
<Footer/>
</>
);
}
export default App;