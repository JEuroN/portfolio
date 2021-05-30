import './App.css';
import Menu from './components/menu'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Menu />
      <div class='div-home' id='Home'>
        <h1 class="greet">¡Hi! I'm Euro Nava and i welcome you to my page</h1>
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
