import React, { Component } from "react";

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit} className="flex">
                    <label className="text-small">Add new todo:</label> <br/>
                    <input type="text" className="bottom-border" onChange={this.handleChange} value={this.state.content}/>
            </form>
        </div>
        )
    }
}

export default AddTodo