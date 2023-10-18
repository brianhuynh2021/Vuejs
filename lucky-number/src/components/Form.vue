<template>
    <div class="container">
      <h1 style="color:rgb(105, 177, 27)">Good luck to you 😍 !!!</h1>
      <div class="number-container">
        <form @submit.prevent="submitForm" id="form">
          <div>
            <label for="numberInput">Number:</label>
            <input v-model="number" type="number" id="numberInput">
          </div>
          <div>
            <label for="headInput">Head:</label>
            <input v-model="head" type="number" id="headInput">
          </div>
          <div>
            <label for="tailInput">Tail:</label>
            <input v-model="tail" type="number" id="tailInput">
          </div>
          <checkbox-input id="cover2dit" label="Cover2dits"></checkbox-input>
          <checkbox-input id="cover-3dit" label="Cover3dits"></checkbox-input>
          <div>
            <label for="soDaInput">SoDa:</label>
            <input v-model="soDa" type="number" id="soDaInput">
          </div>
          <div>
            <label for="amountSoda">Amount:</label>
            <input v-model="amountSoda" type="number" id="amountSoda">
          </div>
          <div>
            <button class="submit-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  import CheckBoxInput from "./CheckBoxInput"
  
  export default {
    components: {
        CheckBoxInput,
    },
    data() {
      return {
        number: null,
        head: null,
        tail: null,
        soDa: null,
        amountSoda: null,
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
        console.log("Form submitted");
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    font-family: Arial, sans-serif;
    margin-top: -20.9px;
    background-image: url("../assets/lucky_number.jpg");
    background-repeat: no-repeat;
    background-size: cover; /* This line ensures the image covers the entire container */
    background-position: top;
    height: 100vh;
    width: 100%; /* Make sure the container takes the full width */
    box-sizing: border-box;
  }

  h1 {
    margin-top: 25px;
    text-align: center;
  }

form {
  width: 600px;
  height: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #e08282;
  border-radius: 5px;
}

label {
  display: inline-block;
  width: 70px;
  margin-bottom: 5px;
  margin-left: 10px;
}

input[type="number"],
input[type="checkbox"] {
  width: 40%;
  padding: 5px;
  margin-bottom: 10px;
  margin-left: 10px; /* Corrected value */
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #45a049;
}
  </style>
  