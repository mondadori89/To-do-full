<template>
    <div class="toDoItem">
        <p class="to-do">{{ toDo }}</p>
        <div class="item-icons"> 
          <Icon :name="checkButtonClicked" class="item-icon check" @click="checkToDo" />
          <Icon :name="removeButtonState" class="item-icon remove" 
            @click="$parent.$emit('removedClicked', toDo)" 
            @mouseover="removeButtonState = 'xcirclefill'" 
            @mouseleave="removeButtonState = 'xcircle'" 
          />
        </div>
    </div> 
</template>


<script>
import Icon from '../assets/IconSelected.vue';

export default {
  name: 'ToDoItem',
  props: {
    toDo: String
  },
  data() {
      return {
        checkButtonClicked: 'checkcircle',
        removeButtonState: 'xcircle',
      }
  },
  components: {
    Icon
  },
  methods: {
    checkToDo() {
      if (this.checkButtonClicked === 'checkcircle') { 
          this.checkButtonClicked = 'checkcirclefill';
      } else {
          this.checkButtonClicked = 'checkcircle';
      }
    },
  },
}
</script>


<style scoped>
.toDoItem {
  background: var(--color-foreground);
  box-shadow: var(--box-shadow);
  border-radius: var(--radius);
  margin: 5px;
  display: grid;
  grid-template-columns: 60px auto 60px;
  grid-template-rows: auto;
}

.to-do {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}

.item-icons {
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
  display: grid;
  grid-template-columns: 30px 30px;
  grid-template-rows: auto;
  align-items: center;
}

.item-icon.check {
  color: rgb(18, 219, 18);
}

.item-icon.remove {
  color: rgb(129, 0, 0);
  margin-right: 10px;
}

@media only screen and (max-width: 480px) {
  p {
    font-size: 14px;
  }

  .toDoItem {
  grid-template-columns: 5px auto 60px;
}
}
</style>