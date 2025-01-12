<template>
    <div class="min-h-screen bg-secondary pt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-8">Entre em Contato</h1>
  
          <!-- Grid de Contato e Formulário -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Informações de Contato -->
            <div>
              <div class="bg-zinc-800/50 p-8 rounded-lg mb-8">
                <h2 class="text-2xl font-semibold text-white mb-6">Informações de Contato</h2>
                <div class="space-y-6">
                  <a 
                    href="mailto:contato@xfinancial.com"
                    class="flex items-center space-x-4 text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    <EnvelopeIcon class="h-6 w-6" />
                    <span>contato@xfinancial.com</span>
                  </a>
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-4 text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    <MessageSquareIcon class="h-6 w-6" />
                    <span>WhatsApp: (11) 99999-9999</span>
                  </a>
                </div>
              </div>
  
              <!-- Redes Sociais -->
              <div class="bg-zinc-800/50 p-8 rounded-lg">
                <h2 class="text-2xl font-semibold text-white mb-6">Nossas Redes</h2>
                <div class="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/xfinancialbrasil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-12 h-12 rounded-lg bg-zinc-700 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <InstagramIcon class="h-6 w-6 text-text-secondary" />
                  </a>
                  <a 
                    href="https://youtube.com/@xfinancialbrasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-12 h-12 rounded-lg bg-zinc-700 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <YoutubeIcon class="h-6 w-6 text-text-secondary" />
                  </a>
                </div>
              </div>
            </div>
  
            <!-- Formulário de Contato -->
            <div class="bg-zinc-800/50 p-8 rounded-lg">
              <h2 class="text-2xl font-semibold text-white mb-6">Envie sua Mensagem</h2>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-text-secondary mb-2">Nome</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
  
                <div>
                  <label for="email" class="block text-sm font-medium text-text-secondary mb-2">E-mail</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                    placeholder="seu@email.com"
                  />
                </div>
  
                <div>
                  <label for="message" class="block text-sm font-medium text-text-secondary mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    required
                    class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  class="w-full py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { EnvelopeIcon } from '@heroicons/vue/24/outline'
  import { Instagram as InstagramIcon, Youtube as YoutubeIcon, MessageSquare as MessageSquareIcon } from 'lucide-vue-next'
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', form.value)
  }
  </script>