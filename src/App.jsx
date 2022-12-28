import './App.css';
import './Scrollbar.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Scroll from './components/Scroll/Scroll';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <Main />
      <Scroll />
    </div>
  );
}

export default App;
