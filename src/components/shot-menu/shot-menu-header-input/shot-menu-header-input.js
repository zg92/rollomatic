import { useContext, useState } from 'react'
import { ShotMenuContext } from '../../../context/shot-menu.context'
import HeaderEdit from '../../button-components/header-edit/header-edit'
import './shot-menu-header-input.css'

const ShotMenuHeaderInput = ({ category }) => {

    const { rollSettings, setRollSettings } = useContext(ShotMenuContext)

    const submitItem = (e) => {
        setRollSettings({ ...rollSettings, 
            [`completed-${category}`]:true,
            [category]: rollSettings['rollSettingsInput'][category], 
             })
    }

    const handleChanges = (e) => {
        setRollSettings({...rollSettings, 'rollSettingsInput': {...rollSettings['rollSettingsInput'], [category]: e.target.value}})
    }

    return (
        <div className='input-wrapper'>
            <div className='input-category-current'> {category}:</div>
            {rollSettings[`completed-${category}`] === false ?
                <div className='input-category-input'>
                    <input type='text' value={rollSettings['rollSettingsInput'][category]} onChange={(e) => handleChanges(e)} />
                    <button className='submit-input' onClick={(e) => submitItem(e)}>Submit</button>
                </div>
                :  
                <>
                <div>{rollSettings[category]}</div>
                <HeaderEdit category={category}/>
                </>
            }
        </div>
    )
}

export default ShotMenuHeaderInput