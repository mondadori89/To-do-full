<template>
  <div v-if="userId" class="toDosContainer">
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
import { fetchToDos, deleteToDo, setListOrderAsync, fetchListOrder, getUser } from '../utils';

export default defineComponent ({
  name: 'ToDosContainer',
  components: {
    ToDoItem,
    draggable: VueDraggableNext,
  },
  props: {
    toDos: Array,
    newTodo: Object,
    userId: String,
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
      const userData = await getUser();
      console.log(userData);
      console.log(this.userId);
      const toDosData = await fetchToDos(this.userId);
      const listOrderFetched = await fetchListOrder(this.userId);
      const lisrOrderArray = listOrderFetched.order_seq;

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
      const listUserID = this.userId;      // Hard coded for now...
      await setListOrderAsync(listUserID, toDosIds);
    },
  },
  watch: {
    newTodo: async function () {
      console.log("new to do added");
      this.list.push(this.newTodo);
      await this.setListOrder();
    },
    userId: async function () {
      if (this.userId == '') {
        return
      }
      console.log("new guy (or no guy) on the house");
      this.list = await this.getToDos();
    }
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


.m {
  animation: animateDragDrop 0.5s ease forwards;
}

@keyframes animateDragDrop {
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.9)
  }
  100% {
    transform: scale(1)
  }
}

</style>