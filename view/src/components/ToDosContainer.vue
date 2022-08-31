<template>
  <div class="toDosContainer">
    <h2>To do's:</h2>
    <ul>
      <li v-for="toDo in toDos" :key="toDo">
        <ToDoItem 
          :toDo="toDo" 
        />
      </li> 
    </ul>
  </div>
</template>


<script>
import ToDoItem from './ToDoItem.vue'

export default {
  name: 'ToDosContainer',
  components: {
    ToDoItem,
  },
  props: {
    toDos: Array
  },
}
</script>


<style scoped>
.toDosContainer {
  padding: 0;
}

h2 {
  margin: 40px 0 0;
  color: var(--color-branding);
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>