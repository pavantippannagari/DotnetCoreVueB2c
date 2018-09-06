<template>
    <div>
        <div>
            <h1>todos <span class="badge badge-info">{{todosCount}}</span></h1>
            <input class="form-control form-control-lg" autofocus autocomplete="off"
                placeholder="What needs to be done?"
                v-model="newTodoText"
                @keydown.enter="addTodo">
        </div>
        <todo-list :actions="true" :todos="todos" v-on:remove="removeTodo($event)" v-on:complete="completeTodo($event)"></todo-list>
    </div>
</template>

<script>
import TodoList from './TodoList.vue'
import eventBus from '../eventBus'

export default {
    components: {
        TodoList
    },
    data() {
        return {
            newTodoText: "",
            todos: [],
        }
    },
    computed: {
        todosCount: function() {
            return this.todos.length
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodoText !== '' && this.todos.indexOf(this.newTodoText) < 0) {
                this.todos.push(this.newTodoText)
                this.newTodoText = ''
            }
        },
        removeTodo: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
        completeTodo: function(todo) {
            this.removeTodo(todo)
            eventBus.$emit('completed', todo)
        }
    }
}
</script>

<style>

</style>
