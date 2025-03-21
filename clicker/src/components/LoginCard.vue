<template>
    <v-container fluid class="login-background">
      
      <!-- Dodajemy obraz na górze strony -->
      <div class="header-image">
        <img src="/public/NapisUBB.png" alt="Napis UBB" />
      </div>
  
      <div class="login-wrapper">
        <v-card class="login-card">
            
          <v-card-title class="headline text-center">Zaloguj się</v-card-title>
  
          <v-form v-model="formValid" @submit.prevent="submitForm">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
              prepend-icon="mdi-email"
            ></v-text-field>
  
            <v-text-field
             v-model="password"
             :type="showPassword ? 'text' : 'password'"
             label="Hasło"
             :rules="passwordRules"
             required
             :prepend-icon="showPassword ? 'mdi-lock-open-variant' : 'mdi-lock'"
             @click:prepend="togglePasswordVisibility"
            />
  
            <v-btn 
              :disabled="!formValid" 
              color="deep-purple" 
              type="submit"
              prepend-icon="mdi-login"
              block
            >
              Zaloguj
            </v-btn>
          </v-form>
        </v-card>
      </div>
      
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const formValid = ref(false);
  const showPassword = ref(false);
  
  const emailRules = [
    v => !!v || 'Email jest wymagany',
    v => /.+@.+\..+/.test(v) || 'Wprowadź poprawny adres email',
  ];
  
  const passwordRules = [
    v => !!v || 'Hasło jest wymagane',
    v => v.length >= 6 || 'Hasło musi mieć co najmniej 6 znaków',
  ];
  
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
  
  const submitForm = () => {
    console.log('Zaloguj użytkownika z email:', email.value);
  };
  </script>
  
  <style scoped>
  /* Ustawienie tła */
  .login-background {
    background-image: url('/public/ubb.jpg'); /* Podmień na swoją ścieżkę */
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Ustawiamy elementy w kolumnie */
    position: relative; /* Dodane, żeby pozycjonowanie obrazu było względne do tego kontenera */
  }
  
  /* Kontener logowania */
  .login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative; /* Ustawiamy kontener logowania w relatywnej pozycji */
    z-index: 1; /* Ustawiamy kartę na wierzchu */
  }
  
  /* Kontener dla obrazu nagłówka, ustawiamy go wyżej */
  .header-image {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 20px; /* Ustawiamy obrazek na samej górze */
    z-index: 0; /* Ustawiamy obrazek pod kartą logowania */
  }
  
  /* Zmieniamy styl na kartę logowania */
  .login-card {
    padding: 20px;
    max-width: 600px;
    width: 100%;
  }
  </style>
  