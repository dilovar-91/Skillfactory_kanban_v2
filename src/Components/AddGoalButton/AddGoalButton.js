import React from 'react' 
import './AddGoalButton.css'

const AddGoalButton = ({ButtonHandler, title, id, dataMock}) => {
    const columnsNumber = id.slice(4) > 1 ? dataMock[`${id.slice(4) - 2}`].issues.length : '' ;
    return(
        <>
            <button
            className={`add__goal__button ${columnsNumber === 0 ? 'add__goal__button__unable' : ''}`}
            onClick={() => ButtonHandler(title, id)}
            id={id}>
                <p className='add__goal__button__text'>Добавить задание</p>
            </button>
        </>
    )
}

export default AddGoalButton;