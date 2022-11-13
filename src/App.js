import './App.css';
import ShotMenuHeader from './components/shot-menu/shot-menu-header/shot-menu-header';
import ShotMenuWrapper from './components/shot-menu/shot-menu-wrapper/shot-menu-wrapper';

function App() {
  return (
    <div className="App">
   <div className='app-wrapper'>
    <ShotMenuHeader />
    <ShotMenuWrapper />
   </div>
    </div>
  );
}

export default App;
