<template>

  <h1>To do list</h1>
  
  <ToDoForm 
    @submitClicked="onSubmitClicked"
  />

  <ToDosContainer 
    :toDos="toDos"
    @removedClicked="onRemovedClicked" 
  />
    
</template>


<script>
import ToDosContainer from './components/ToDosContainer.vue';
import ToDoForm from './components/ToDoForm.vue';
import { v4 as uuidv4 } from 'uuid';
import { fetchToDos, postToDo, deleteToDo } from './utils';

export default {
  name: 'App',
  components: {
    ToDosContainer,
    ToDoForm,
  },
  data() {
    return {
      toDos: [],
    }
  },
  methods: {
    async onSubmitClicked(toDoText) {
      const newTodo = {
        id: uuidv4(),
        description: toDoText,
        status: false
      }
      this.toDos.push(newTodo);
      console.log(this.toDos);
      await postToDo(newTodo);
    },
    async onRemovedClicked(toDoDeleted) {
      const toDoDeletedID = toDoDeleted.id;
      this.toDos = this.toDos.filter(toDo => {
        return toDo !== toDoDeleted;
      })
      console.log(this.toDos);
      await deleteToDo(toDoDeletedID);
    },
    async getToDos() {
      const toDosData = await fetchToDos();
      console.log(toDosData);
      const toDosText = [];
      toDosData.forEach(toDo => toDosText.push(toDo));
      return toDosText;
    }, 
  },
  async mounted() {
    console.log('App initiated');
    this.toDos = await this.getToDos();
  },
}
</script>


<style>

@media only screen and (max-width: 480px) {
  body {
    font-size: 14px;
  }
}

h1 {
  color: var(--color-branding);
  padding-top: 5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  background: var(--color-background);
  color: var(--color-text-body);
  overflow: hidden;
  line-break: auto;
  border-radius: var(--radius-2);
}

:root {
  --color-background: #fcfcfcb0;
  --color-background-secondary: #f3f3f3;
  --color-foreground: #ffffff;
  --color-border: #e6e6e6;
  --color-text-header: #444444;
  --color-text-body: #6f6f6f;
  --color-text-secondary: #717171;
  --color-text-invert: #ffffff;
  --color-text-link: #4ec3f5;
  --color-branding: #373e63;
  --color-branding-transparent: #3d5af140;

  --color-alert: #ff304f;
  --color-success: #45b81f;
  --color-on-hover: #0000000f;

  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  --box-shadow-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;

  --spacing-0: 4px;
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 36px;
  --spacing-5: 64px;

  --radius: 10px;
  --radius-2: 18px;
}

</style>
