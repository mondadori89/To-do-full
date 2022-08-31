<template>
<div class="ToDoFormContainer">
    <form id="toDoForm" v-on:submit.prevent="handleSubmit" >
    <input type="text" v-model="toDoOnForm" />
    <br />
    <br />
    <button 
        type="submit"
        @click="$emit('submitClicked', toDoOnForm)"
    > 
        Go do it!
    </button>
    </form>
</div>
</template>


<script>
export default {
    name: 'ToDoForm',
    props: {
    },
    data() {
        return {
        toDoOnForm: '',
        }

    },
    methods: {
        handleSubmit(e) {
        e.target.reset();
        this.toDoOnForm = '';      
        }
    }
}
</script>


<style scoped>
.ToDoFormContainer {
margin: 5%;
}

button {
align-items: center;
appearance: none;
background-color: #fff;
border-radius: 20px;
border-style: none;
box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
box-sizing: border-box;
color: #3c4043;
cursor: pointer;
display: inline-flex;
fill: currentcolor;
font-size: 14px;
font-weight: 500;
height: 40px;
justify-content: center;
letter-spacing: .25px;
line-height: normal;
max-width: 100%;
padding: 2px 24px;
position: relative;
text-align: center;
text-transform: none;
transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
min-width: 150px;
width: auto;
will-change: transform,opacity;
z-index: 0;
}

button:hover {
background: #f6f9fe67;
font-weight: bold;
color: #174ea6;
} 

input {
padding: 10px;
font-size: 1em;
border-radius: 20px;
}

input:focus {
background: #5e5e5e18;
}

</style>
