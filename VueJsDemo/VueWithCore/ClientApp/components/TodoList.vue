<template>
        <b-card >
            <b-row v-for="todo in todos" :key="todo">
                <b-col>{{todo}}</b-col>
                <b-col v-if="actions">
                    <b-button variant="link" @click="remove(todo)">Remove</b-button>
                    <b-button variant="link" @click="complete(todo)">Complete</b-button>
                </b-col>
            </b-row>
        </b-card>
</template>

<script>
export default {
    props:['todos', 'actions'],
    methods: {
        remove: function(todo) {
            this.$emit('remove', todo)
        },
        complete: function(todo) {
            this.$emit('complete', todo)
        }
    }
}
</script>

<style>

</style>
