<template>
    <div class="upgrade-item">
      <div class="upgrade-info">
        <h3>{{ upgrade.name }}</h3>
        <p>{{ upgrade.description }}</p>
      </div>
      <div class="upgrade-actions">
        <span>Koszt: {{ upgrade.cost }}</span>
        <button @click="$emit('buy', upgrade)">Kup</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    upgrade: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .upgrade-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #444;
    padding: 0.5rem;
    border-radius: 4px;
    color: #ccc;
  }
  
  .upgrade-info h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .upgrade-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .upgrade-actions button {
    background: #555;
    color: #fff;
    border: none;
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  </style>
  