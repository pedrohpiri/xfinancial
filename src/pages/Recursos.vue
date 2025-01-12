<template>
    <div class="min-h-screen bg-secondary pt-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-primary mb-8">Recursos</h1>
  
        <!-- Principais Recursos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="(feature, index) in features" 
               :key="index"
               class="bg-zinc-800/50 p-6 rounded-lg hover:bg-zinc-800/70 transition-all duration-300"
          >
            <component :is="feature.icon" class="h-12 w-12 text-primary mb-4" />
            <h3 class="text-xl font-semibold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-text-secondary">{{ feature.description }}</p>
          </div>
        </div>
  
        <!-- Como Funciona -->
        <div class="bg-zinc-800/50 p-8 rounded-lg mb-12">
          <h2 class="text-2xl font-semibold text-primary mb-6">Como Funciona</h2>
          <div class="space-y-4">
            <div v-for="(step, index) in steps" :key="index" class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold">
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">{{ step.title }}</h3>
                <p class="text-text-secondary">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { 
    StarIcon, 
    ChartBarIcon, 
    ArrowPathIcon, 
    ShieldCheckIcon, 
    ChartPieIcon, 
    DevicePhoneMobileIcon 
  } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      icon: StarIcon,
      title: 'Favoritar contas',
      description: 'Favorite os melhores Traders e Algoritmos para acompanhamento facilitado.'
    },
    {
      icon: ChartBarIcon,
      title: 'Gerenciar carteiras',
      description: 'Crie e gerencie múltiplas carteiras de forma independente.'
    },
    {
      icon: ArrowPathIcon,
      title: 'Operação flexível',
      description: 'Opere igual ou na ponta contrária conforme sua estratégia.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Gerenciamento de risco',
      description: 'Gerencie o risco por Conta e Estratégia de forma eficiente.'
    },
    {
      icon: ChartPieIcon,
      title: 'Análise de Performance',
      description: 'Analise o histórico através de estatística e eficiência.'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile',
      description: 'Acompanhe as operações e performance do seu celular.'
    }
  ]
  
  const steps = [
    {
      title: 'Configuração Simples',
      description: 'No modelo "Plug and Play", configure apenas margem, spread e Stop.'
    },
    {
      title: 'Acesso a Material Exclusivo',
      description: 'Tenha acesso a materiais exclusivos através da comunidade de assinantes.'
    },
    {
      title: 'Suporte Contínuo',
      description: 'Conte com Suporte 24/7 para tirar dúvidas técnicas sobre a ferramenta.'
    },
    {
      title: 'Acompanhamento',
      description: 'Participe de lives recorrentes com os desenvolvedores.'
    }
  ]
  </script>