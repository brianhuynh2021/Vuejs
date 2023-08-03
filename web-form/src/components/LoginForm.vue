<template>
  <div>
    <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const userData = {
        email: this.email,
        password: this.password
      };

      // Send the user data to the backend for login user
      // We'll implement this in the next step
    }
  }
};
</script>

<style>

</style>