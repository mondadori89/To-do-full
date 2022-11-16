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
    <router-link class="goback" to="/">Go Back</router-link>
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
    margin: 5px;
    margin-top: 10px;
    margin-bottom: 30px;
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
    margin: 5px;
    }

    input:focus {
    background: #5e5e5e18;
    }

</style>