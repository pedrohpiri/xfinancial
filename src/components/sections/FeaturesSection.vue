<template>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Recursos do Sistema</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="p-6 bg-secondary/50 rounded-lg">
            <component :is="feature.icon" class="w-12 h-12 text-primary mb-4"/>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-text-secondary">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { StarIcon, ChartBarIcon, CogIcon, UserGroupIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      title: 'Favoritar contas',
      description: 'Favorite os melhores Traders e Algoritmos.',
      icon: StarIcon
    },
    {
      title: 'Gerenciar carteiras',
      description: 'Crie múltiplas carteiras de forma independente.',
      icon: ChartBarIcon
    },
    {
      title: 'Operação flexível',
      description: 'Opere igual ou na ponta contrária.',
      icon: CogIcon
    },
    {
      title: 'Gerenciamento de risco',
      description: 'Gerencie o risco por Conta e Estratégia.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Análise de Performance',
      description: 'Analise o histórico através de estatística.',
      icon: UserGroupIcon
    },
    {
      title: 'Mobile',
      description: 'Acompanhe as operações do seu celular.',
      icon: DevicePhoneMobileIcon
    }
  ]
  </script>