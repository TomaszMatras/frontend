<template>
    <div class="clicker-container">
      <img
        src="/UBBlogo.png"
        alt="UBB Logo"
        class="clicker-image"
        @click="handleClick"
      />
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue'
  
  const emits = defineEmits(['incrementPoints'])
  
  function handleClick() {
    console.log("ClickIcon: handleClick -> emitting incrementPoints")
    emits('incrementPoints')
  }
  </script>
  
  <style scoped>
  .clicker-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .clicker-image {
  width: 300px;        /* increased from 200px */
  height: auto;
  cursor: pointer;
  transition: transform 0.1s;
  border-radius: 5px;  /* rounded corners */
}
  
  .clicker-image:active {
    transform: scale(0.95);
  }
  </style>
  