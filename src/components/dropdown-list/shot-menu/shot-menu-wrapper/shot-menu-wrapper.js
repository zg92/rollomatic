import React, { useContext } from 'react'
import { ShotMenuContext } from '../../../../context/shot-menu.context'
import DropdownAdd from '../../../button-components/dropdown-add/dropdown-add'
import DropdownLock from '../../../button-components/dropdown-lock/dropdown-lock'
import DropdownRemove from '../../../button-components/dropdown-remove/dropdown-remove'
import ShotMenuDropdownWrapper from '../shot-menu-dropdown-wrapper/shot-menu-dropdown-wrapper'
import './shot-menu-wrapper.css'

const ShotMenuWrapper = () => {

  const { shotsList } = useContext(ShotMenuContext)
  
  return (
    <div className='menu-line-wrapper'>
      {
        shotsList.map(lineData =>
          <div className='line-data-wrapper' key={lineData['position']}>
            <div className='shot-menu-wrapper' >
              <ShotMenuDropdownWrapper lineData={lineData}/>
            </div>
            {
              lineData['position'] === shotsList.length - 1 ?
                <div className='add-remove-menu'>
                  <DropdownAdd />
                  {lineData['position'] !== 0 ?
                    <DropdownRemove />
                    : null
                  }
                </div>
                :
                <DropdownLock position={lineData['position']}/>
            }
          </div>
        )
      }
    </div>
  )
}

export default ShotMenuWrapper