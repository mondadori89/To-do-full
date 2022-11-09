<template>
    <header>
        <form id="loginForm" v-on:submit.prevent="handleSubmit">
            <input type="text" v-model="email" placeholder="Email"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <button 
                type="submit"
                @click="$emit('submitLogin', { email: email, password: password })"
            > 
                Login
            </button>
        </form>
        <h3>Hello {{userName}}!</h3>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp',
    props: {
        userName: String,
    },
    data() {
        return {
            email: 'monda@gmail.com',
            password: '$2a$10$xNxWr8uOVIZLLx09dbtu1.Kk87RAXYsVYSTQ4jPiBnpfrqMQrgHZq',
        }
    },
    methods: {
        handleSubmit(e) {
            e.target.reset();
            //this.email = '';  
            //this.password = '';     
        }
    }
}
</script>

<style scoped>
    a {
        color: #333;
    }

    header {
        margin-top: 30px;
        text-align: center;
    }
</style>