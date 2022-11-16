import { useContext, useState } from 'react'
import {HiX} from 'react-icons/hi'
import { PopUpContext } from '../../../context/popup-context'
import './save-popup.css'
import { saveRoll } from '../../../utilities/firestore-save'
import { ShotMenuContext } from '../../../context/shot-menu.context'

const SavePopup = () => {

const [rollName, setRollName] = useState('')
const {setOpenSavePopUp} = useContext(PopUpContext)
const { shotsList, rollSettings } = useContext(ShotMenuContext)
 
const changeHandler = (e) => {
    setRollName(e.target.value)
}

const closePopup = () => {
    setOpenSavePopUp(false)
}

const submitRoll = async () => {
    shotsList.map(shot => {saveRoll(rollName, rollSettings, shot)})
}

  return (
    <div className='popup-wrapper'>
        <div className='exit-out'><HiX className='x' onClick={()=>closePopup()}/></div>
        <div className='popup-title'><h2>Save Your Roll</h2></div>
        <div className='popup-text'> Enter a name and save your roll!</div>
        <input className='roll-name-input' value = {rollName} onChange={(e) => changeHandler(e)}/>
        <button className='save-roll' onClick={() => submitRoll()}>Save</button>
    </div>
  )
}

export default SavePopup