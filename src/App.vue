<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Componentes de Layout
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

// Componentes de Seção para a página inicial
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import FeaturesSection from './components/sections/FeaturesSection.vue';
import PricingSection from './components/sections/PricingSection.vue';
import ContactSection from './components/sections/ContactSection.vue';

// Computed para verificar a rota
const route = useRoute();
const isHome = computed(() => route.path === '/');
</script>

<template>
  <div class="min-h-screen bg-secondary flex flex-col">
    <!-- Cabeçalho do site -->
    <TheHeader />

    <!-- Conteúdo principal -->
    <main class="flex-grow">
      <!-- Renderiza as seções da página inicial se for a rota '/' -->
      <template v-if="isHome">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </template>

      <!-- Renderiza outras páginas dinamicamente -->
      <template v-else>
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </template>
    </main>

    <!-- Rodapé do site -->
    <TheFooter />
  </div>
</template>

<style scoped>
/* Estilização de transições para as páginas */
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>
