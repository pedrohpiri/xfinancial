<template>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Entre em Contato</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block mb-2">Nome</label>
              <BaseInput 
                id="name"
                v-model="form.name"
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div>
              <label for="email" class="block mb-2">E-mail</label>
              <BaseInput 
                id="email"
                type="email"
                v-model="form.email"
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <label for="message" class="block mb-2">Mensagem</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 bg-secondary/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Sua mensagem..."
                required
              ></textarea>
            </div>
            
            <BaseButton type="submit" class="w-full">
              Enviar Mensagem
            </BaseButton>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  import BaseInput from '../common/BaseInput.vue'
  import BaseButton from '../common/BaseButton.vue'
  
  const form = reactive({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = () => {
    // Lógica para enviar o formulário
    console.log('Formulário enviado:', form)
  }
  </script>