<template>
    <div class="game-page">
      <MainHeader />
      <div class="main-content">
        <!-- Left section: clickable image -->
        <div class="left-section">
          <ClickIcon @incrementPoints="incrementPoints" />
        </div>
        <!-- Right section: stats panel and upgrades -->
        <div class="right-section">
          <Stats
            :points="points"
            :pointsPerClick="pointsPerClick"
            :autoClicksPerMin="autoClicksPerMin"
          />
          <Upgrades/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MainHeader from '@/components/MainHeader.vue'
  import ClickIcon from '@/components/ClickIcon.vue'
  import Stats from '@/components/Stats.vue'
  import Upgrades from '@/components/Upgrades.vue'
  
  const points = ref(0)
  const pointsPerClick = ref(1)
  const autoClicksPerMin = ref(0)
  
  function incrementPoints() {
    // Increase points by the pointsPerClick value
    points.value += pointsPerClick.value
    console.log("GamePage: points =", points.value)
  }
  </script>
  
  <style scoped>
  .game-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #222; /* Dark background */
    color: #ccc;
  }
  
  .main-content {
    display: flex;
    flex: 1;
  }
  
  .left-section {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
  </style>
  