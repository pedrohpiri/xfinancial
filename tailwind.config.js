/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // Inclui o arquivo HTML principal
    "./src/**/*.{vue,js,ts,jsx,tsx}" // Analisa todos os arquivos Vue, JS, TS, JSX, e TSX na pasta src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CFF832', // Verde principal (cor primária)
        secondary: '#1A1A1A', // Cinza escuro (cor secundária)
        text: {
          primary: '#FFFFFF', // Texto principal (branco)
          secondary: '#666666' // Texto secundário (cinza claro)
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Fontes customizadas para o projeto
      },
      spacing: {
        '128': '32rem', // Espaçamento extra grande
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Adiciona um tamanho de borda arredondada personalizada
      },
    },
  },
  plugins: [],
};
