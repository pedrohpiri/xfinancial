<template>
    <button
      :class="[ 
        'font-semibold rounded-lg transition-all duration-300',
        variantClasses[variant],
        sizeClasses[size],
        className
      ]"
      v-bind="$attrs"
      @click="redirectToLink"
    >
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  // Define as propriedades esperadas no componente
  interface Props {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
  }
  
  // Define propriedades com valores padrão
  const { variant = 'primary', size = 'md', className = '' } = defineProps<Props>();
  
  // Estilos para variantes de botões
  const variantClasses = {
    primary: 'bg-primary text-black hover:bg-opacity-90',
    secondary: 'bg-black text-primary border-2 border-primary hover:bg-primary hover:text-black',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black',
  };
  
  // Estilos para tamanhos de botões
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Função para redirecionar ao link especificado
  const redirectToLink = () => {
    window.location.href =
      'https://store.nelogica.com.br/category/copy-invest/details/14183';
  };
  </script>
  