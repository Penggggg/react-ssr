import { observable, computed, autorun, action } from 'mobx';

export default class TodoStore {
    @observable todos = [];

    @computed get todoCount() {
        return this.todos.length;
    }

    @computed get activeCount() {
        return this.todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
		)
    }

    @computed get needTodoCount() {
        return this.todos.reduce(
			(sum, todo) => sum + (todo.completed ? 1 : 0),
			0
		)
    }

    subscribeTodoStore() {
        autorun(() => {
            let todo = this.todos;
            console.log(`store change: ${this.todos.length}`);
        })
    }

    @action addTodo(name) {
        // return a promise ---> which means this can be await.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.todos.push({
                    name: name,
                    completed: false
                })
                resolve();
            }, 16)
        })
    }

    static init() {
        return new TodoStore();
    }

}
