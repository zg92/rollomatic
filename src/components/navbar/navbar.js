import './navbar.css'
import Logo from '../../../src/logo.png'
import { useContext } from 'react'
import { ShotMenuContext } from '../../context/shot-menu.context'
import { PopUpContext } from '../../context/popup-context'


const Navbar = () => {

    const {setShotsList} = useContext(ShotMenuContext)
    const {openPopUp, setOpenPopUp} = useContext(PopUpContext)

    const resetScreen = async () => {
        setShotsList([{
            'position': 0,
            'aperture': null, 
            'shutterspeed': null,
            'lock': false,
          }])
    }

    const activatePopup = (popUpType) => {
        if (openPopUp === '') {setOpenPopUp(popUpType)}
        if (openPopUp !== '') {setOpenPopUp(popUpType)}
        if (openPopUp === popUpType) {setOpenPopUp('')}
    }

    return (
        <nav className='menu-bar'>
            <div className='navbar-logo-wrapper'>
                <img src={Logo} className='logo' />
            </div>
            <div className='navbar-links'>
                <a className='navbar-link' onClick={() => {resetScreen()}}>New</a>
                <a className='navbar-link' onClick={()=> activatePopup('save') }>Save</a>
                <a className='navbar-link' onClick={()=> activatePopup('login') }>Login</a>
            </div>
        </nav>

    )
}

export default Navbar