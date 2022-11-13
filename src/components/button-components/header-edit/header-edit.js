import { useContext } from 'react'
import { HiPencil } from 'react-icons/hi'
import { ShotMenuContext } from '../../../context/shot-menu.context'
import './header-edit.css'


const HeaderEdit = ({category}) => {

    const { rollSettings, setRollSettings } = useContext(ShotMenuContext)

    const editHeader = () => {
        setRollSettings({...rollSettings, [`completed-${category}`]: false})
    }

  return (
    <div className='header-edit-wrapper'>
    <div className='header-edit-icon' onClick = {() => editHeader()}><HiPencil/></div>
  </div>
  )
}

export default HeaderEdit