<template>
    <header class="header">
      <!-- Left side: Title -->
      <div class="left-header">
        <h1 class="title">UBBClicker</h1>
      </div>
  
      <!-- Right side: Leaderboard icon -->
      <div class="right-header">
        <LeaderboardIcon />
      </div>
    </header>
  </template>
  
  <script setup>
  import LeaderboardIcon from '@/components/LeaderboardIcon.vue'
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
    color: #ccc;
  }
  
  
  /* Right side styling (icon) */
  .right-header {
    display: flex;
    align-items: center;
  }
  </style>
  