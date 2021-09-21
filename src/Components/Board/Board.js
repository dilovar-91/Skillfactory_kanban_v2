import React from 'react' 
import Goal from '../Goal/Goal'
import './Board.css'

const Board = ({ButtonHandler, dataMock}) => {
    let number = 1;

    return(
        <div className='board'>
            {dataMock.map((i) => (
                <Goal 
                title={i.title}
                goalsList={i.issues}
                ButtonHandler={ButtonHandler}
                number={number++}
                dataMock={dataMock}/>
            ))}
        </div>
    )
}

export default Board;