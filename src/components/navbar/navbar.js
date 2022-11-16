import './navbar.css'
import Logo from '../../../src/logo.png'
import { useContext } from 'react'
import { ShotMenuContext } from '../../context/shot-menu.context'
import { PopUpContext } from '../../context/popup-context'


const Navbar = () => {

    const {setShotsList} = useContext(ShotMenuContext)
    const {setOpenSavePopUp, openSavePopUp} = useContext(PopUpContext)

    const resetScreen = async () => {
        setShotsList([{
            'position': 0,
            'aperture': null,
            'shutterspeed': null,
            'lock': false,
          }])
    }

    const activateSavePopup = () => {
        openSavePopUp ? setOpenSavePopUp(false) : setOpenSavePopUp(true);
        console.log(openSavePopUp)
    }

    

    return (
        <nav className='menu-bar'>
            <div className='navbar-logo-wrapper'>
                <img src={Logo} className='logo' />
            </div>
            <div className='navbar-links'>
                <a className='navbar-link' onClick={() => {resetScreen()}}>New</a>
                <a className='navbar-link' onClick={()=> activateSavePopup() }>Save</a>
                <a className='navbar-link'>Login</a>
            </div>
        </nav>

    )
}

export default Navbar