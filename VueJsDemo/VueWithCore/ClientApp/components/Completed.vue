<template>
    <div>
        <h5>Completed todos</h5>
        Filter: 
        <input v-model="todoFilterText">
        <todo-list :todos="filteredTodos"></todo-list>
    </div>
</template>

<script>
import eventBus from '../eventBus'
import TodoList from './TodoList.vue'

export default {
    components: {
        TodoList
    },
    props: ['completedTodos'],
    data() {
        return {
            todoFilterText: ''
        }
    },
    computed: {
        filteredTodos: function() {
            if (this.todoFilterText === '')
                return this.completedTodos
            return this.completedTodos.filter(x => x.includes(this.todoFilterText))
        }
    }
}
</script>

<style>

</style>
