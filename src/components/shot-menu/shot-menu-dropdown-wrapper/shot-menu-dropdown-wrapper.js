import ShotMenuDropdown from '../shot-menu-dropdown/shot-menu-dropdown'
import './shot-menu-dropdown-wrapper.css'

const ShotMenuDropdownWrapper = ({ lineData }) => {

    return (
        <div className='dropdown-wrapper'>
            <div className='dropdown-shot-number-wrapper'>
            {lineData['position']}
            </div>
            <div className='dropdown-settings-wrapper'>
            <ShotMenuDropdown dropdownType={'aperture'} data={lineData['aperture']} position={lineData['position']} />
            <ShotMenuDropdown dropdownType={'shutterspeed'} data={lineData['shutterspeed']} position={lineData['position']} />
            </div>
        </div>
    )
}

export default ShotMenuDropdownWrapper