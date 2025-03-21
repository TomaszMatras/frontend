<template>
  <v-footer height="40" app>
    <!-- Prawa strona - ikona GitHub i napis "GitHub" -->
    <div class="footer-center">
      <a
        href="https://github.com/UBBClicker/frontend/tree/main/clicker"
        title="GitHub - UBBClicker"
        class="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon size="24" class="github-icon">mdi-github</v-icon>
        <span class="github-text">GitHub</span>
      </a>
    </div>
  </v-footer>
</template>

<script setup>
// Nie potrzeba dodatkowego kodu w tej sekcji dla tego zadania
</script>

<style scoped lang="sass">
  /* Stylizacja stopki */
  .footer-center
    display: flex
    justify-content: center
    align-items: center
    width: 100%

  .social-link
    display: flex
    align-items: center
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

  .social-link:hover
    color: rgba(25, 118, 210, 1)

  .github-icon
    color: #e91e63 !important
    margin-right: 8px

  .github-text
    font-size: 14px
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
</style>
