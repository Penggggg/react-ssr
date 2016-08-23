import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import TodoStore from '../store/todoStore.js';

@observer
export default class AComponent extends PureComponent {
    todoStore
    constructor() {
        super();
    }

    componentWillMount() {
        // important
        this.todoStore = __isClient__ ? TodoStore.init() : this.context.router.todoStore;
        if( __isClient__ ) {
            this.todoStore.todos = window.initTodos;
        }
    }

    componentDidMount() {
        if( __isClient__ ){
            console.log(`did`);
        }
    }

    handleAdd() {
        let _input = this.refs._todo;
        if( _input.value ){
            this.todoStore.addTodo( _input.value ) ;
            _input.value = null ;
        }
    }

    render() {
        return (
            <div>
                 TODO  <br/>
                <input type="text" ref="_todo"/>
                <button onClick={()=>{ this.handleAdd() }}>+</button><br/>
                {  `total Count: ${this.todoStore.todoCount}` }<br/>
                { `active Count: ${ this.todoStore.activeCount }` } <br/>
                { `needTodo Count: ${ this.todoStore.needTodoCount }` } <br/>
                {
                    this.todoStore.todos.map((todo, index) => {
                        return <TodoItem todo={ todo } key={ index } />
                    })
                }<br/>
            </div>
        )
    }
}

AComponent.contextTypes = {
    router: React.PropTypes.object
}

@observer
class TodoItem extends PureComponent {
    constructor() {
        super();
    }

    handleClick() {
        let { todo } = this.props ;
        todo.completed = !todo.completed ;
    }

    render() {
        let { todo } = this.props ;
        return (
            <li onClick={()=>{ this.handleClick() }}>{`${todo.name}   completed:${todo.completed}`}</li>
        )
    }
}
