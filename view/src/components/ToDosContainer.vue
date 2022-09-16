<template>
  <div class="toDosContainer">
    <h2>To do's:</h2>
    <draggable class="dragArea list-group w-full" :list="list" @change="log">
      <div
        class="m"
        v-for="element in list"
        :key="element"
      >
        <ToDoItem 
          @removedClicked="onRemovedClicked"
          :toDo="element" 
        />
      </div>
    </draggable>
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import ToDoItem from './ToDoItem.vue'
import { fetchToDos, deleteToDo } from '../utils';

export default defineComponent ({
  name: 'ToDosContainer',
  components: {
    ToDoItem,
    draggable: VueDraggableNext,
  },
  props: {
    toDos: Array,
    newTodo: Object,
  },
  data() {
    return {
      enabled: true,
      list: [],
      dragging: false,
      newToDoOnData: {},
    };
  },
  methods: {
    log(event) {
      console.log(event);
      console.log(this.list);
    },
    async getToDos() {
      const toDosData = await fetchToDos();
      const toDosText = [];
      toDosData.forEach(toDo => toDosText.push(toDo));
      return toDosText;
    },
    async onRemovedClicked(toDoDeleted) {
      const toDoDeletedID = toDoDeleted.id;
      this.list = this.list.filter(toDo => {
        return toDo !== toDoDeleted;
      })
      console.log(this.list);
      await deleteToDo(toDoDeletedID);
    },
  },
  watch: {
    newTodo: function () {
      console.log("new to do added");
      this.list.push(this.newTodo);
    }
  },
  async mounted() {
    console.log('List charged');
    this.list = await this.getToDos();
  },
})
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

/*.dragArea {

}*/


</style>