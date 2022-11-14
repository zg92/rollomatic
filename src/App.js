import { useContext, useRef } from 'react';
import './App.css';
import ShotMenuHeader from './components/header/shot-menu-header/shot-menu-header';
import DropdownList from './components/shot-menu/dropdown-list/dropdown-list';

import ShotMenuWrapper from './components/shot-menu/shot-menu-wrapper/shot-menu-wrapper';
import { ShotMenuContext } from './context/shot-menu.context';

function App() {

const {openShotSettingMenu, shotSettingMenu} = useContext(ShotMenuContext)

  return (
    <div className="App">
   <div className='app-wrapper'>
    <ShotMenuHeader />
    <ShotMenuWrapper />
    {openShotSettingMenu['position'] !== null  ?
        <DropdownList position={openShotSettingMenu['position']} />
        : null}
   </div>

  

    </div>
  );
}

export default App;
