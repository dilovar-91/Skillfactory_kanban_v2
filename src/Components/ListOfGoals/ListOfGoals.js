import React from 'react'
import './ListOfGoals.css'

const ListOfGoals = ({goals, id}) => {
    return(
        <div className='list__of__goals' id={id}>
            {goals.map((item) => <div className='goal'>{item.name}</div>)}
        </div>
    )
}

export default ListOfGoals;