import ShotMenuDropdown from '../shot-menu-dropdown/shot-menu-dropdown'

const ShotMenuDropdownWrapper = ({ lineData }) => {

    return (
        <div className='dropdown-wrapper'>
            Shot # {lineData['position']}
            <ShotMenuDropdown dropdownType={'aperture'} data={lineData['aperture']} position={lineData['position']} />
            <ShotMenuDropdown dropdownType={'shutterspeed'} data={lineData['shutterspeed']} position={lineData['position']} />
            
        </div>
    )
}

export default ShotMenuDropdownWrapper