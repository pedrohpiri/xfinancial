<template>
    <header class="fixed w-full top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/10">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <img src="../../assets/images/01.png" alt="X Financial" class="h-8">
            </router-link>
          </div>
  
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link 
              to="/sobre" 
              class="text-text-primary hover:text-primary transition-colors"
              active-class="text-primary"
            >
              Sobre
            </router-link>
            <router-link 
              to="/recursos" 
              class="text-text-primary hover:text-primary transition-colors"
              active-class="text-primary"
            >
              Recursos
            </router-link>
            <router-link 
              to="/precos" 
              class="text-text-primary hover:text-primary transition-colors"
              active-class="text-primary"
            >
              Preços
            </router-link>
            <router-link 
              to="/contato" 
              class="text-text-primary hover:text-primary transition-colors"
              active-class="text-primary"
            >
              Contato
            </router-link>
            <BaseButton size="sm" @click="redirectToLink">Começar Agora</BaseButton>
          </div>
  
          <!-- Mobile Menu Button -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6 text-primary" />
            <XMarkIcon v-else class="h-6 w-6 text-primary" />
          </button>
        </nav>
  
        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.to"
              class="block px-3 py-2 text-text-primary hover:text-primary transition-colors"
              active-class="text-primary"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
            <BaseButton class="w-full mt-4" size="sm" @click="redirectToLink">Começar Agora</BaseButton>
          </div>
        </div>
      </div>
    </header>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '../common/BaseButton.vue'

const isMenuOpen = ref(false)

const navigationItems = [
  { name: 'Sobre', to: '/sobre' },
  { name: 'Recursos', to: '/recursos' },
  { name: 'Preços', to: '/precos' },
  { name: 'Contato', to: '/contato' }
]

const redirectToLink = () => {
  window.location.href = 'https://store.nelogica.com.br/category/copy-invest/details/14183';
}
</script>
