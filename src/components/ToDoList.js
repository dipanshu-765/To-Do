import React from 'react';

class ToDoList extends React.Component{
    
    render(){
        const renderedList = this.props.todo.map(
            (item)=>{
                let dlt = () => {
                    this.props.delete(item);
                }
                return <div className="todo-item item" key={this.props.todo.indexOf(item)}>
                    {item}
                    <button style={{'float': 'right'}} className="btn" onClick={dlt}>
                        <i className="trash alternate icon"></i>
                    </button>
                </div>;
            }
        );
        return <div className="ui relaxed divided list" style={{'padding-left': '1vw'}}>
                    <h4 className="display-5">
                        {renderedList}
                    </h4>
                </div>;
    }
}

export default ToDoList