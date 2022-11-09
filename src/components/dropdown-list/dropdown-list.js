import React, { useContext, useEffect } from 'react'
import { ShotMenuContext } from '../../context/shot-menu.context'
import './dropdown-list.css'

const DropdownList = ({ dropdownType, position }) => {

  const { photoLineItemArray, setPhotoLineItemArray, setOpenMenu } = useContext(ShotMenuContext)

  const listData = {
    'aperture': ['f/2.8', 'f/4', 'f/5.6', 'f/8', 'f/11', 'f/16', 'f/22'],
    'shutterspeed': ['1000', '500', '250', '125', '60', '30', '15', '8', '4', '2', '1', '1sec', '2sec'],
  }

  const closeMenu = (arrayCopy) => { 
    if (arrayCopy[position]['aperture'] !== null
    && arrayCopy[position]['shutterspeed'] !== null) 
    {
    setOpenMenu({'position':null})
  }
  }

  const setData = async (listItem) => {
    const arrayCopy = [...photoLineItemArray]
    arrayCopy[position] = { ...photoLineItemArray[position], [dropdownType]: listItem }
    await setPhotoLineItemArray(arrayCopy)
    closeMenu(arrayCopy)
  }

  return (
    <div className='dropdown-list-wrapper'>
      <ul className='dropdown-list'>
        {
          listData[dropdownType].map(listItem =>
            <li className='dropdown-list-item' key={listItem}
              onClick={() => setData(listItem)}>{listItem}</li>
          )
        }
      </ul>
    </div>
  )
}

export default DropdownList