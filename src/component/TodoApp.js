import React from 'react';
import { connect } from 'react-redux';
import { addTodo, getList } from '../reducers/TodoListSlice';
import TodoList from './TodoList';
import PostModel from '../api/PostModel';

class TodoApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.text.length === 0) {
            return;
        }

        const newItem = new PostModel(Date.now(), this.state.text)
        this.setState(state => ({
            // items: state.items.concat(newItem),
            text: ''
        }));
        this.props.addTodo(newItem);
    }

    handleChange = (e) => {
        this.setState(state => ({
            text: e.target.value
        }));
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.props.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">What needs to be done?</label>
                    <input 
                    id="new-todo"
                    value={this.state.text}
                    onChange={this.handleChange}
                    />
                    <button>
                        Add #{this.props.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items : state.todoList.items
});

const mapDispatchToProps = { addTodo, getList };

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);