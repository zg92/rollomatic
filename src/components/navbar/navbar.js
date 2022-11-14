import './navbar.css'
import Logo from '../../../src/logo.png'
import { useContext } from 'react'
import { ShotMenuContext } from '../../context/shot-menu.context'


const Navbar = () => {

    const {setShotsList} = useContext(ShotMenuContext)

    const resetScreen = async () => {
        setShotsList([{
            'position': 0,
            'aperture': null,
            'shutterspeed': null,
            'lock': false,
          }])
    }

    return (
        <nav className='menu-bar'>
            <div className='navbar-logo-wrapper'>
                <img src={Logo} className='logo' />
            </div>
            <div className='navbar-links'>
                <a className='navbar-link' onClick={() => {resetScreen()}}>New</a>
                <a className='navbar-link'>Save</a>
                <a className='navbar-link'>Login</a>
            </div>
        </nav>

    )
}

export default Navbar