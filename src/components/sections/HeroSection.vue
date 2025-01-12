<template>
    <section class="min-h-screen bg-secondary flex items-center">
      <div class="container mx-auto px-4 pt-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold text-primary mb-4">
              CopyTrader da X FINANCIAL
            </h1>
            <p class="text-lg text-text-primary mb-8">
              Maximize seus resultados com estratégias personalizadas e tecnologias avançadas.
            </p>
            <BaseButton size="lg" @click="redirectToLink">Começar Agora</BaseButton>
          </div>
          <div class="flex justify-center">
            <img 
              src="@/assets/images/05.png" 
              alt="Trading Platform" 
              class="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'

const redirectToLink = () => {
  window.location.href = 'https://store.nelogica.com.br/category/copy-invest/details/14183';
}
</script>
