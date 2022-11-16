<template>   
   
  <ToDoForm 
    @submitClicked="onSubmitClicked"
    :userId="userId"
  />

  <ToDosContainer 
    :newTodo="newTodo"
    :userId="userId"
  />
</template>

<script>
import ToDosContainer from '../components/ToDosContainer.vue';
import ToDoForm from '../components/ToDoForm.vue';
import { v4 as uuidv4 } from 'uuid';
import { postToDo } from '../utils';

export default {
    name: 'HomePage',
    components: {
        ToDosContainer,
        ToDoForm,
    },
    props: {
        userId: String,
    },
    data() {
        return {
          newTodo: {},
        }
    },
    methods: {
        async onSubmitClicked(toDoText) {
        const newTodo = {
            id: uuidv4(),
            description: toDoText,
            status: false,
            userId: this.userId 
        }
        this.newTodo = newTodo;
        await postToDo(newTodo);
        }, 
    },
}

</script>