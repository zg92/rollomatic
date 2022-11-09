import { useContext } from "react"
import { ShotMenuContext } from "../../../context/shot-menu.context"
import Dropdown from "../../dropdown-list/dropdown-list"
import './shot-menu-dropdown.css'

const ShotMenuDropdown = ({ dropdownType, data, position }) => {

  const { openMenu, setOpenMenu, photoLineItemArray } = useContext(ShotMenuContext)

  const menuStateSetter = () => {
    if (photoLineItemArray[position]['lock'] !== true) { 
      if (openMenu['position'] !== null) {
        setOpenMenu({ ...openMenu, 'position': null })}
      if (openMenu['position'] === null)  {
        setOpenMenu({ ...openMenu, 'position': position  })}
      if (openMenu['position'] !== null) {
        setOpenMenu({ ...openMenu, 'position': position })}
    }
  }
    
  return (
    <div className='dropdown-wrapper-' onClick={() => menuStateSetter()}>
      <div className="dropdown-group">
        {dropdownType}
        <div className="dropdown-result">{data}</div>
      </div>
      {openMenu['position'] === position ?
        <Dropdown dropdownType={dropdownType} position={position} />
        : null}
    </div>
  )
}

export default ShotMenuDropdown