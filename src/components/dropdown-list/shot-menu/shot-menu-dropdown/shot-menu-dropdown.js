import { useContext } from "react"
import { ShotMenuContext } from "../../../context/shot-menu.context"
import Dropdown from "../../dropdown-list/dropdown-list"
import './shot-menu-dropdown.css'

const ShotMenuDropdown = ({ dropdownType, data, position }) => {

  const { openShotSettingMenu, setOpenShotSettingMenu, shotsList } = useContext(ShotMenuContext)

  const menuStateSetter = () => {
    if (shotsList[position]['lock'] !== true) { 
      if (openShotSettingMenu['position'] !== null) {
        setOpenShotSettingMenu({ ...openShotSettingMenu, 'position': null })}
      if (openShotSettingMenu['position'] === null)  {
        setOpenShotSettingMenu({ ...openShotSettingMenu, 'position': position  })}
      if (openShotSettingMenu['position'] !== null) {
        setOpenShotSettingMenu({ ...openShotSettingMenu, 'position': position })}
    }
  }
    
  return (
    <div className='dropdown-wrapper-' onClick={() => menuStateSetter()}>
      <div className="dropdown-group">
        {dropdownType}
        <div className="dropdown-result">{data}</div>
      </div>
      {openShotSettingMenu['position'] === position ?
        <Dropdown dropdownType={dropdownType} position={position} />
        : null}
    </div>
  )
}

export default ShotMenuDropdown