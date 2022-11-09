
import { useContext, useEffect } from 'react'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { ShotMenuContext } from '../../../context/shot-menu.context'
import './dropdown-add.css'


const DropdownAdd = () => {

  const { photoLineItemArray, setPhotoLineItemArray, menuArray, openMenu, setOpenMenu } = useContext(ShotMenuContext)

  const addRow = () => {
    const arrayCopy = [...photoLineItemArray]
    arrayCopy.map(lineItem => lineItem['lock'] = true)
    setPhotoLineItemArray([...arrayCopy, menuArray])
    setOpenMenu({...openMenu, 'position':null}) 
  }

  return (
    <div className='dropdown-add-wrapper'>
    <div className='dropdown-add-icon' onClick={addRow}><HiOutlinePlusSm/></div>
    </div>
  )
}

export default DropdownAdd