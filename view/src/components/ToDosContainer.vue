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
import { fetchToDos, deleteToDo, setListOrderAsync, fetchListOrder } from '../utils';

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
      listOrder: [],
      dragging: false,
      newToDoOnData: {},
    };
  },
  methods: {
    async log(event) {
      console.log(event);
      console.log(this.list);
      await this.setListOrder();
    },
    async getToDos() {
      const listOrderFetched = await fetchListOrder('8a23bf6d-4030-42fe-b54a-b59a9a32d958');    // Hard coded for now...
      const lisrOrderArray = listOrderFetched.order_seq;
      const toDosData = await fetchToDos();
      let toDosListOrdered = [];
      for (const toDoId of lisrOrderArray) {
        for (const toDoItem of toDosData) {
          if (toDoId == toDoItem.id) {
            toDosListOrdered.push(toDoItem);
          }
        }
      }
      return toDosListOrdered;
    },
    async onRemovedClicked(toDoDeleted) {
      const toDoDeletedID = toDoDeleted.id;
      this.list = this.list.filter(toDo => {
        return toDo !== toDoDeleted;
      })
      console.log(this.list);
      this.setListOrder();
      await deleteToDo(toDoDeletedID);
    },
    async setListOrder() {
      const toDoList = this.list;
      const toDosIds = [];
      toDoList.forEach(toDo => toDosIds.push(toDo.id));
      this.listOrder = toDosIds;
      // console.log(this.listOrder);
      const listID = '8a23bf6d-4030-42fe-b54a-b59a9a32d958';      // Hard coded for now...
      await setListOrderAsync(listID, toDosIds);
    },
  },
  watch: {
    newTodo: async function () {
      console.log("new to do added");
      this.list.push(this.newTodo);
      await this.setListOrder();
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