<template>
    <img 
      src="/podium_white.png"
      alt="Ranking"
      class="leaderboard-icon"
      @click="goToRanking"
    />
  </template>
  
  <!-- do wywalenia jak bedzie backend-->
  <script setup>
  function goToRanking() {
    // In a real app, you might use a router:
    // const router = useRouter()
    // router.push('/ranking')
    console.log('Przejście do rankingu') // Polish log for demonstration
  }
  </script>
  
  <style scoped>
  .leaderboard-icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    /* If your icon is dark, you might invert it for a white look:
    filter: invert(1);
    */
  }
  </style>
  