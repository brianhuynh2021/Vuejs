<template>
    <div class="checkbox-container">
      <label class="checkbox-label" :for="id">{{ label }}</label>
      <input v-model="isChecked" :id="id" type="checkbox">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
    },
    data() {
      return {
        isChecked: false,
      };
    },
  };
  </script>
  
  <style scoped>
    .checkbox-container {
    display: flex;
    align-items: center;
    }

    .checkbox-label {
    margin-left: 12px;
    }

    .checkbox-container input[type="checkbox"] {
    transform: scale(1.5);
    }
  </style>
  