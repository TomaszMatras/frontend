<template>
    <div class="upgrades-panel">
      <!-- Notice the array uses 'Za klik' (lowercase k) -->
      <Tabs :tabs="['Za klik', 'Automatyczne']" v-model:selectedTab="selectedTab" />
  
      <!-- Check the exact same text in the condition -->
      <div class="upgrades-list" v-if="selectedTab === 'Za klik'">
        <!-- Show per-click upgrades here -->
        <UpgradeCard
          v-for="(upgrade, index) in perClickUpgrades"
          :key="index"
          :upgrade="upgrade"
          @buy="buyUpgrade"
        />
      </div>
  
      <!-- The else block is for 'Automatyczne' -->
      <div class="upgrades-list" v-else>
        <!-- Show auto upgrades here -->
        <UpgradeCard
          v-for="(upgrade, index) in autoUpgrades"
          :key="index"
          :upgrade="upgrade"
          @buy="buyUpgrade"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Tabs from '@/components/Tabs.vue'
  import UpgradeCard from '@/components/UpgradeCard.vue'
  
  const allUpgrades = ref([
    { name: 'Biały monsterek', type: 'click', cost: 10, description: '+1 kliknięć' },
    { name: 'Konsultacje ze SMISu', type: 'click', cost: 50, description: '+5 kliknięć' },
    { name: 'ChatGPT', type: 'auto', cost: 25, description: '1 kliknięcie na sekundę' },
    { name: 'DeepSeek', type: 'auto', cost: 100, description: '2 kliknięć na sekundę' }
  ])
  
  const selectedTab = ref('Za klik')
  
  const perClickUpgrades = computed(() => allUpgrades.value.filter(u => u.type === 'click'))
  const autoUpgrades = computed(() => allUpgrades.value.filter(u => u.type === 'auto'))
  
  function buyUpgrade(upgrade) {
    console.log('Kupiono ulepszenie:', upgrade)
    // Add logic to subtract points and apply the upgrade's effect
  }
  </script>
  
  <style scoped>
  .upgrades-panel {
    background: #333;
    padding: 1rem;
    border-radius: 8px;
    color: #ccc;
  }
  
  .upgrades-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  </style>
  