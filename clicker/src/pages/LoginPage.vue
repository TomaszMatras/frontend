<template>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title class="headline">Zaloguj się</v-card-title>
  
            <v-form v-model="formValid" @submit.prevent="submitForm">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                :rules="emailRules"
                required
              ></v-text-field>
  
              <v-text-field
                v-model="password"
                label="Hasło"
                type="password"
                :rules="passwordRules"
                required
              ></v-text-field>
  
              <v-btn :disabled="!formValid" color="primary" type="submit">Zaloguj</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const formValid = ref(false);
  
  const emailRules = [
    v => !!v || 'Email jest wymagany',
    v => /.+@.+\..+/.test(v) || 'Wprowadź poprawny adres email',
  ];
  
  const passwordRules = [
    v => !!v || 'Hasło jest wymagane',
    v => v.length >= 6 || 'Hasło musi mieć co najmniej 6 znaków',
  ];
  
  const submitForm = () => {
    console.log('Zaloguj użytkownika z email:', email.value);
    // Możesz tutaj dodać funkcjonalność logowania, np. wysłać zapytanie do API
  };
  </script>
  
  <style scoped>
  .v-card {
    padding: 20px;
  }
  </style>
  