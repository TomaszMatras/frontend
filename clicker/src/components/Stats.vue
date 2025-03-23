<template>
    <div class="stats-panel">
      <div class="stat-item">
        <label>Punkty:</label>
        <span>{{ points }}</span>
      </div>
      <div class="stat-item">
        <label>Punkty za klik:</label>
        <span>{{ pointsPerClick }}</span>
      </div>
      <div class="stat-item">
        <label>Automatyczne kliki/min:</label>
        <span>{{ autoClicksPerMin }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    points: {
      type: Number,
      default: 0
    },
    pointsPerClick: {
      type: Number,
      default: 1
    },
    autoClicksPerMin: {
      type: Number,
      default: 0
    }
  })
  </script>
  
  <style scoped>
  .stats-panel {
    background: #333;
    padding: 1rem;
    border-radius: 8px;
    color: #ccc;
  }
  
  .stat-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  label {
    font-weight: bold;
  }
  </style>
  