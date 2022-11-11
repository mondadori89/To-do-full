<template>
    <h3>Register new User</h3>
    <form id="registerForm" v-on:submit.prevent="handleSubmit">
        <input type="text" v-model="registerName" placeholder="Name"/>
        <input type="text" v-model="registerEmail" placeholder="Email"/>
        <input type="password" v-model="registerPassword" placeholder="Password"/>
        <input type="password" v-model="registerPassword2" placeholder="Password Confirmation"/>
        <button 
            type="submit"
            @click="submitRegister"
        > 
            Create User
        </button>
    </form>
    <router-link to="/">Go Back</router-link>
</template>

<script>
import { registerApi } from '../utils';

export default {
    name: 'RegisterPage',
    props: {
        userId: String,
    },
    data() {
        return {
            registerName: '',
            registerEmail: '',
            registerPassword: '',
            registerPassword2: '',
        }
    },
    methods: {
        async submitRegister() {
            const dataFetched = await registerApi(this.registerName, this.registerEmail, this.registerPassword, this.registerPassword2);
            if(dataFetched.message) { alert(dataFetched.message) }
            else { this.$router.push('/') }
        },
        handleSubmit(e) {
            e.target.reset();
            this.registerName = '';  
            this.registerEmail = '';
            this.registerPassword = '';
            this.registerPassword2 = '';
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