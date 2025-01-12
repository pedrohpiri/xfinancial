<template>
    <nav class="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <ul class="space-y-4">
        <li v-for="(item, index) in navigationItems" :key="index">
          <a
            :href="item.href"
            :class="[ 
              'block w-3 h-3 rounded-full transition-all duration-300',
              activeSection === item.href.slice(1)
                ? 'bg-primary scale-125'
                : 'bg-primary/30 hover:bg-primary/60'
            ]"
            :title="item.name"
            target="_blank" 
            rel="noopener noreferrer"
          ></a>
        </li>
      </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeSection = ref('hero')
const navigationItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Recursos', href: '#features' },
  { name: 'Preços', href: '#pricing' },
  { name: 'Contato', href: '#contact' },
  { name: 'Começar Agora', href: 'https://store.nelogica.com.br/category/copy-invest/details/14183' }
]
</script>
