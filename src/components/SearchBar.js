import React from 'react';

class SearchBar extends React.Component{
    state = {
        term: ''
    }
    onInputchange = event => {
        this.setState({term: event.target.value})
    }
    onFormSubmit = event => {
        this.setState({term: ''});
        event.preventDefault();
        this.props.addToDo(this.state.term);
    }
    render(){
        return <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <label forname="todo"></label>
                <input
                 type="text"
                 name="todo"
                 placeholder="TO-DO"
                 id="field"
                 value={this.state.term}
                 onChange={this.onInputchange}>
                </input>
                <button type="submit" className="btn btn-custom" id="add-todo">Add</button>
            </form>
        </div>
    }
}

export default SearchBar