import React, { useContext, useEffect, useRef } from 'react'
import { ShotMenuContext } from '../../../context/shot-menu.context'
import './dropdown-lock.css'
import {HiOutlineLockClosed, HiOutlineLockOpen} from 'react-icons/hi'

const DropdownLock = ({ position }) => {

    const { photoLineItemArray, setPhotoLineItemArray, openMenu, setOpenMenu } = useContext(ShotMenuContext)
    const lockButton = useRef(document.querySelector('.dropdown-lock-icon'))

    const lockToggle = async () => {
        const arrayCopy = [...photoLineItemArray]
        arrayCopy[position] = { ...arrayCopy[position], 'lock': arrayCopy[position]['lock'] === false ? true : false }
        await setPhotoLineItemArray(arrayCopy)
        if(photoLineItemArray[position]['lock'] !== true) 
        {
            setOpenMenu({...openMenu, 'position':null}) 
        }
    }

    useEffect(() => {
        photoLineItemArray[position]['lock'] === true ?
            lockButton.current.style.background = 'grey' :
            lockButton.current.style.background = 'green'
    }, [photoLineItemArray[position]['lock']])


    return (
        <div className='dropdown-lock-wrapper'>
            <div className='dropdown-lock-icon' ref={lockButton} onClick={lockToggle}>{photoLineItemArray[position]['lock'] === true ? 
            <HiOutlineLockClosed /> : <HiOutlineLockOpen />  }
            </div>
        </div>
    )
}

export default DropdownLock