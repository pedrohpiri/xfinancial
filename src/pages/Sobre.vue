<template>
    <div class="min-h-screen bg-secondary pt-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-primary mb-8">Sobre a X Financial</h1>
        
        <!-- História e Visão -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-zinc-800/50 p-8 rounded-lg">
            <h2 class="text-2xl font-semibold text-primary mb-4">Nossa História</h2>
            <p class="text-text-secondary leading-relaxed">
              A X FINANCIAL é uma empresa inovadora e especializada no mercado financeiro, 
              dedicada a oferecer soluções personalizadas e estratégias de alto impacto. 
              Presidida por Kalil Araujo, um profissional com mais de 15 anos de experiência 
              no meio corporativo e uma década de atuação ativa no mercado financeiro.
            </p>
          </div>
          
          <div class="bg-zinc-800/50 p-8 rounded-lg">
            <h2 class="text-2xl font-semibold text-primary mb-4">Nossa Visão</h2>
            <p class="text-text-secondary leading-relaxed">
              Nosso diferencial está em transformar a complexidade do mercado financeiro 
              em oportunidades claras e acessíveis, sempre priorizando segurança, 
              eficiência e inovação. Seja você um investidor iniciante ou experiente, 
              a X FINANCIAL está pronta para impulsionar sua performance no mercado.
            </p>
          </div>
        </div>
  
        <!-- Expertise -->
        <div class="mb-12">
          <h2 class="text-2xl font-semibold text-primary mb-6">Nossa Expertise</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-zinc-800/50 p-6 rounded-lg">
              <ChartBarIcon class="h-12 w-12 text-primary mb-4" />
              <h3 class="text-xl font-semibold text-white mb-2">Mercado Brasileiro</h3>
              <p class="text-text-secondary">
                Especialização em mercado brasileiro com foco em resultados consistentes.
              </p>
            </div>
  
            <div class="bg-zinc-800/50 p-6 rounded-lg">
              <GlobeAmericasIcon class="h-12 w-12 text-primary mb-4" />
              <h3 class="text-xl font-semibold text-white mb-2">Mercados Internacionais</h3>
              <p class="text-text-secondary">
                Experiência em bolsas internacionais e commodities.
              </p>
            </div>
  
            <div class="bg-zinc-800/50 p-6 rounded-lg">
              <CurrencyDollarIcon class="h-12 w-12 text-primary mb-4" />
              <h3 class="text-xl font-semibold text-white mb-2">Derivativos</h3>
              <p class="text-text-secondary">
                Especialização em derivativos como dólar e índice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ChartBarIcon, GlobeAmericasIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'
  </script>