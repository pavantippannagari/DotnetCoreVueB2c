<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">todos</b-navbar-brand>


        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item :to="{name: 'completed', params: {completedTodos: completedTodos}}" >
                    Completed<span class="badge badge-dark">{{completedTodos.length}}</span>
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>{{username}}</em>
                    </template>
                    <b-dropdown-item href="/auth/signout">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
import userApi from '../apis/UserApi'
import eventBus from '../eventBus';

export default {
    data() {
        return {
            username: '',
            completedTodos: []
        }
    },
    created() {
        userApi.getUserInfo().then(response => {
            this.username = response.data.name
        })
        eventBus.$on('completed', todo => {
            this.completedTodos.push(todo)
        })
    }
}
</script>

<style>

</style>
