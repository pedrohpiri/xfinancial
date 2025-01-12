<template>
    <section class="py-16 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Perguntas Frequentes</h2>
          <p class="text-lg text-text-secondary">
            Tire suas dúvidas sobre a X FINANCIAL e nossas estratégias
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div v-for="(item, index) in faqItems" :key="index" class="mb-4">
            <button
              class="w-full text-left p-6 rounded-lg bg-secondary/50 transition-all border-2 border-primary/20 hover:border-primary"
              :class="{ 'border-primary': openItem === index }"
              @click="toggleItem(index)"
            >
              <div class="flex justify-between items-center">
                <h3 class="text-xl font-semibold">{{ item.question }}</h3>
                <span 
                  class="transform transition-transform text-primary"
                  :class="{ 'rotate-180': openItem === index }"
                >
                  ▼
                </span>
              </div>
              
              <transition name="fade">
                <p v-if="openItem === index" class="mt-4 text-text-secondary">
                  {{ item.answer }}
                </p>
              </transition>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const openItem = ref<number | null>(null)
  
  const faqItems = [
    {
      question: "Qual o investimento mínimo necessário?",
      answer: "Para operar com a estratégia DOL MINI, o capital mínimo é de R$6.000,00, sendo R$8.000,00 o capital recomendado para melhor performance. Operamos com 1 a 5 mini contratos."
    },
    {
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Aceitamos pagamentos via Cartão de Crédito e PIX pelo site. Para pagamentos via Boleto, entre em contato através dos nossos canais de atendimento."
    },
    {
      question: "Existe garantia de satisfação?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Caso não esteja satisfeito, você pode solicitar o cancelamento e receber o reembolso integral do valor pago."
    },
    {
      question: "Posso cancelar a assinatura?",
      answer: "Sim. Em planos mensais, o cancelamento pode ser feito a qualquer momento pela sua área logada. Para planos de fidelidade (semestral/anual), após os 7 dias iniciais, o cancelamento terá desconto de 50% sobre o valor proporcional do período restante."
    },
    {
      question: "Quais os planos disponíveis e seus valores?",
      answer: "Oferecemos três opções: Mensal por R$400,00, Semestral por R$2.040,00 (R$340/mês, 15% de desconto) e Anual por R$3.840,00 (R$320/mês, 20% de desconto)."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você terá acesso a materiais exclusivos através da comunidade de assinantes, vídeo aulas, e-book exclusivo, lives recorrentes com os desenvolvedores e suporte técnico 24/7."
    },
    {
      question: "O que é necessário para começar?",
      answer: "Após a contratação, você receberá por e-mail todo o material necessário para configurações, podendo operar em Conta de Simulação e Conta Real. O sistema é 'Plug and Play', necessitando apenas configurar margem, spread e Stop."
    },
    {
      question: "Quem está por trás da estratégia?",
      answer: "A X FINANCIAL é presidida por Kalil Araujo, profissional com mais de 15 anos de experiência corporativa e uma década no mercado financeiro. A estratégia DOL MINI é desenvolvida por Lucas Xavier, CNPI 2707."
    }
  ]
  
  const toggleItem = (index: number) => {
    openItem.value = openItem.value === index ? null : index
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>