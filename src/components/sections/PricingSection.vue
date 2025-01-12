<template>
    <section class="py-16 bg-secondary">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Planos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="plan in plans" :key="plan.title" 
               class="p-6 rounded-lg border-2 border-primary/20 hover:border-primary transition-colors duration-300"
               :class="{ 'border-primary': plan.popular }">
            <div class="text-center mb-6">
              <h3 class="text-xl font-bold mb-2">{{ plan.title }}</h3>
              <div class="text-3xl font-bold text-primary mb-2">
                R$ {{ plan.price }}<span class="text-lg text-text-secondary">/{{ plan.period }}</span>
              </div>
              <p v-if="plan.discount" class="text-sm text-text-secondary">{{ plan.discount }}% de desconto</p>
            </div>
            
            <ul class="mb-6 space-y-3">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                <CheckIcon class="w-5 h-5 text-primary mr-2" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Informações da Estratégia -->
            <div class="text-sm text-text-secondary mb-4">
              <p><strong>Estratégia:</strong> DOL MINI</p>
              <p>Capital Mínimo: R$6.000,00</p>
              <p>Capital Recomendado: R$8.000,00</p>
              <p>Quantidade de contratos: 1 a 5 mini contratos</p>
            </div>
            
            <BaseButton :variant="plan.popular ? 'primary' : 'outline'" class="w-full" @click="redirectToLink">
              Escolher Plano
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
import BaseButton from '../common/BaseButton.vue'

const plans = [
  {
    title: 'Mensal',
    price: '400,00',
    period: 'mês',
    discount: null,
    popular: false,
    features: [
      'Acesso completo às estratégias',
      'Suporte técnico',
      'Material exclusivo',
      'Acesso à comunidade'
    ]
  },
  {
    title: 'Semestral',
    price: '340,00',
    period: 'mês',
    discount: 15,
    popular: true,
    features: [
      'Todas as features do plano Mensal',
      'Desconto de 15%',
      'Acesso prioritário ao suporte',
      'Conteúdo exclusivo'
    ]
  },
  {
    title: 'Anual',
    price: '320,00',
    period: 'mês',
    discount: 20,
    popular: false,
    features: [
      'Todas as features do plano Semestral',
      'Desconto de 20%',
      'Suporte VIP',
      'Consultoria personalizada'
    ]
  }
]

const redirectToLink = () => {
  console.log('Redirecionando para o link...');
  window.location.href = 'https://store.nelogica.com.br/category/copy-invest/details/14183';
}
</script>
