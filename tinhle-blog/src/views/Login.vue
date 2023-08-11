<template>
    <div id="app">
      <form @submit.prevent="submitForm">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <br />
        <label for="remember">Remember me</label>
        <input type="checkbox" id="remember" v-model="rememberMe" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
        rememberMe: false
      };
    },
    methods: {
      async submitForm() {
      //
      }
    }
  };
  </script>
  
  <style>

    form {
      margin: 10px 0;
    }
    #app label {
      text-align: left;
    }

    #app input {
      text-align: right;
      width: 25%;
      box-sizing: border-box;
    }
  </style>