import React from 'react'
import Board from './Components/Board/Board'
import KanbanRouter from './Router/Router'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      dataMock: [
        {
          title:'Backlog',
          issues:[
            {
              id: 'goal_1',
              name: 'name_1'
            },
            {
              id: 'goal_2',
              name: 'name_2'
            },
            {
              id: 'goal_3',
              name: 'name_3'
            },
            {
              id: 'goal_4',
              name: 'name_4'
            },
            {
              id: 'goal_5',
              name: 'name_5'
            },
          ]
        },
        {
          title:'Ready',
          issues:[]
        },
        {
          title:'In Process',
          issues:[]
        },
        {
          title:'Finished',
          issues:[]
        }
      ],
    }
  }

  goalsToBacklog = () => {
    const {dataMock} = this.state;
    const listOfBacklogGoals = document.querySelector('#list-1');
    const columnOfBacklog = document.querySelector('#column-1');
    const addButton = document.querySelector('#button-1');
    const input = document.createElement('input');
    const submitButton = document.createElement('button');

    addButton.style.display = 'none';
    input.classList.add('input');
    listOfBacklogGoals.appendChild(input);
    submitButton.classList.add('submit__button');
    submitButton.innerText = 'Подтвердить';
    columnOfBacklog.appendChild(submitButton);

    submitButton.addEventListener('click',() => {
      if (input.value !== ''){
        dataMock[0].issues.push({id: 'dvscfds', name: input.value})
        this.setState({ dataMock: dataMock})
        addButton.style.display = 'flex'
        input.style.display = 'none'
        submitButton.style.display = 'none'
      } else {
        alert('Введите название задания')
      }
    })
  }

  goalsToOthers = (id) => {
    const {dataMock} = this.state;
    console.log(id)
    const goalsOfTheseColumn = dataMock[parseInt(id.slice(-1))-2].issues;
    const thisList = document.querySelector(`#list-${parseInt(id.slice(-1))}`);
    const thisColumn = document.querySelector(`#column-${id.slice(-1)}`);
    const addButton = document.querySelector(`#button-${id.slice(-1)}`);
    const dropdown = document.createElement('select');
    const submitButton = document.createElement('button'); 

    addButton.style.display = 'none';
    dropdown.classList.add('dropdown');
    thisList.appendChild(dropdown);
    submitButton.classList.add('submit__button');
    submitButton.innerText = 'Подтвердить';
    thisColumn.appendChild(submitButton);
    goalsOfTheseColumn.forEach((item) =>{
      const itemName = document.createElement('option');
      itemName.appendChild(document.createTextNode(`${item.name}`));
      dropdown.appendChild(itemName);
    })

    submitButton.addEventListener('click', () => {
      const selectedItem = dropdown.options[dropdown.selectedIndex].innerHTML;
      dataMock[`${id.slice(-1) - 1}`].issues.push({id:'dvscfds', name: selectedItem});

      for (let i = 0; i < dataMock[`${id.slice(-1) - 2}`].issues.length; i++) {
        if (dataMock[`${id.slice(-1) - 2}`].issues[i].name === selectedItem) {
          dataMock[`${id.slice(-1) - 2}`].issues.splice(i, 1);
          break;
        }
      }

      this.setState({dataMock: dataMock});
      addButton.style.display = 'flex';
      dropdown.style.display = 'none';
      submitButton.style.display = 'none';
    })
  }

  ButtonHandler = (title,id) => {
    if (title === 'Backlog'){
      this.goalsToBacklog();
    }
    else {
      this.goalsToOthers(id);
    }
  }

  render(){
    return(
      <>
        {/* <KanbanRouter/> */}
        <Board dataMock={this.state.dataMock} ButtonHandler={this.ButtonHandler}/>
      </>
    )
  }

}

export default App;