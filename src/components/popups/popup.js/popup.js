import './popup.css'
import { HiX } from 'react-icons/hi'
import { useContext } from 'react'
import { PopUpContext } from '../../../context/popup-context'

const PopUp = ({type}) => {

    const {setOpenPopUp} = useContext(PopUpContext)

    const closePopup = (e, closeType) => {
        if (closeType === 'xOut') {
        setOpenPopUp('')
        }
        if (closeType === 'offMenu' && document.querySelector('.popup-wrapper') !== e.target) {
            setOpenPopUp('')
        }
    }

    const changeHandler = (e, setter) => {
        setter(e.target.value)
    }

  return (
 <div className='popup-background-blur'  onClick={(e) => closePopup(e, 'offMenu')}>
    <div className='popup-wrapper'>
    <div className='exit-out'><HiX className='x' onClick={(e) => closePopup(e, 'xOut')} /></div>
    {type}
    </div>
    </div>
  )
}

export default PopUp