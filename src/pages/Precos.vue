<template>
  <div class="min-h-screen bg-secondary pt-20">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-primary mb-8">Planos e Preços</h1>

      <!-- Planos -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="bg-zinc-800/50 p-8 rounded-lg border-2 border-transparent hover:border-primary transition-all duration-300"
          :class="{ 'border-primary': plan.popular }"
        >
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-white mb-2">{{ plan.title }}</h2>
            <div class="text-4xl font-bold text-primary mb-2">
              R$ {{ plan.price }}
              <span class="text-lg text-text-secondary">/{{ plan.period }}</span>
            </div>
            <p v-if="plan.discount" class="text-sm text-text-secondary">
              {{ plan.discount }}% de desconto
            </p>
          </div>

          <ul class="space-y-4 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start space-x-3"
            >
              <CheckCircleIcon class="h-6 w-6 text-primary flex-shrink-0" />
              <span class="text-text-secondary">{{ feature }}</span>
            </li>
          </ul>

          <!-- Botão com Redirecionamento -->
          <button
            class="w-full py-3 rounded-lg font-semibold transition-colors duration-300"
            :class="plan.popular ? 'bg-primary text-black hover:bg-primary/90' : 'bg-zinc-700 text-white hover:bg-zinc-600'"
            @click="redirectToLink"
          >
            Escolher Plano
          </button>
        </div>
      </div>

      <!-- Informações Adicionais -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-zinc-800/50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold text-white mb-4">Método de Pagamento</h3>
          <p class="text-text-secondary">
            Aceitamos pagamentos via Cartão de Crédito e PIX. Para pagamento via
            Boleto, entre em contato através do nosso chat ou e-mail.
          </p>
        </div>

        <div class="bg-zinc-800/50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold text-white mb-4">Política de Cancelamento</h3>
          <p class="text-text-secondary">
            Na primeira contratação, você tem até 7 dias para cancelar e receber
            reembolso integral. Após este período, consulte nossa política completa
            de cancelamento.
          </p>
        </div>
      </div>

      <!-- Informações da Estratégia -->
      <div class="bg-zinc-800/50 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-semibold text-white mb-4">Estratégia DOL MINI</h3>
        <p class="text-text-secondary">
          Com esta estratégia, você copiará nosso operacional exclusivo, fundamentado em uma combinação robusta de macro e microeconomia. Aplicamos cálculos de paridade amplamente utilizados por tesourarias, especificamente desenvolvidos para operações com dólar, respaldados por mais de 10 anos de experiência ativa e consistente no mercado financeiro.
        </p>
        <p class="text-text-secondary">
          <strong>Capital Mínimo:</strong> R$6.000,00<br>
          <strong>Capital Recomendado:</strong> R$8.000,00<br>
          <strong>Quantidade de contratos:</strong> 1 a 5 mini contratos
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid';

// Dados dos Planos
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
      'Acesso à comunidade',
    ],
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
      'Conteúdo exclusivo',
    ],
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
      'Consultoria personalizada',
    ],
  },
];

// Função para Redirecionamento
const redirectToLink = () => {
  window.location.href =
    'https://store.nelogica.com.br/category/copy-invest/details/14183';
};
</script>
