import React from 'react';
import SearchBar from './SearchBar';
import ToDoList from './ToDoList';

class App extends React.Component{
    state = {
        todo: []
    };

    addToDo = todo => {
        let temp = this.state.todo;
        temp[temp.length] = todo;
        this.setState({todo: temp});
    }

    deleteToDo = todo => {
        let temp=[];
        for(let i=0; i<this.state.todo.length; i++){
            if (this.state.todo[i]!==todo)
                temp[temp.length] = this.state.todo[i];
        }
        this.setState({todo: temp});
    }

    render(){
        return (
            <div>
                <SearchBar addToDo={this.addToDo}/>
                <div className="todo-container">
                    <div className="todo-list ui segment">
                        <ToDoList todo={this.state.todo} delete={this.deleteToDo}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;