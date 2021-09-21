import React from 'react'
import ListOfGoals from '../ListOfGoals/ListOfGoals'
import AddGoalButton from '../AddGoalButton/AddGoalButton'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import './Goal.css'

class Goal extends React.Component {

    close = () => {

    }

    render(){
        const {title, goalsList, ButtonHandler, number, dataMock} = this.props;
        const WindowPopup = () => (
            <div className='window__popup'>
                <div class='window__popup__header'>
                    <h3 className="window__popup__header__title">
                        {title}
                    </h3>
                    <Route>
                        <NavLink to='/' className='window__popup__header__button'>Закрыть</NavLink>
                    </Route>
                </div>
                <div className='window__popup__header__desc'>
                    Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
                    охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
                    русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся.
                    Он появился в Раквере, где советский капитан наградил его медалью.
                    Медаль была украшена четырьмя непонятными словами, фигурой и
                    восклицательным знаком.
                </div>
            </div>
        );

        return (
            <Router>
                <div className='goal'>
                    <NavLink to={`/${title.toLowerCase()}`} className='goal__title'>
                        {title}
                    </NavLink>

                    <Switch>
                        <Route path={`/${title.toLowerCase()}`} component={WindowPopup}/>
                    </Switch>

                    <div className='scroll' id={`column-${number}`}>
                        <ListOfGoals className='list__of__goals' goals={goalsList} id={`list-${number}`}/>
                        <AddGoalButton ButtonHandler={ButtonHandler} title={title} id={`button-${number}`} dataMock={dataMock}/>
                    </div>
                </div>
            </Router>
            )
    }
}

export default Goal;