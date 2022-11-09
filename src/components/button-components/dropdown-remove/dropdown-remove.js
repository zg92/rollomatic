import { useContext, useEffect } from 'react'
import {HiMinusSm} from 'react-icons/hi'
import { ShotMenuContext } from '../../../context/shot-menu.context'
import './dropdown-remove.css'


const DropdownRemove = () => {

  const { photoLineItemArray, setPhotoLineItemArray } = useContext(ShotMenuContext)

  const removeRow = async () => {
    const arrayCopy = [...photoLineItemArray]
    arrayCopy[arrayCopy.length - 2] = {...arrayCopy[arrayCopy.length-2], 'lock':false}
    setPhotoLineItemArray(arrayCopy.filter(item => item.position !== photoLineItemArray.length - 1))
  }


  return (
    <div className='dropdown-remove-wrapper'>
      <div className='dropdown-remove-icon' onClick={removeRow}><HiMinusSm /></div>
    </div>
  )
}

export default DropdownRemove