<template>
  <footer class="bg-secondary/95 border-t border-primary/10 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo e Sobre -->
        <div class="col-span-1 md:col-span-2">
          <img src="../../assets/images/01.png" alt="X Financial" class="h-8 mb-4">
          <p class="text-text-secondary">
            A X FINANCIAL é uma empresa inovadora e especializada no mercado financeiro, 
            dedicada a oferecer soluções personalizadas e estratégias de alto impacto.
          </p>
          <!-- Redes Sociais -->
          <div class="mt-6 flex space-x-4">
            <a 
              href="https://www.instagram.com/xfinancialbrasil/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-primary transition-colors"
            >
              <InstagramIcon class="h-6 w-6" />
              <span class="sr-only">Instagram</span>
            </a>
            <a 
              href="https://youtube.com/@xfinancialbrasil" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-primary transition-colors"
            >
              <YoutubeIcon class="h-6 w-6" />
              <span class="sr-only">YouTube</span>
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-primary transition-colors"
            >
              <MessageSquareIcon class="h-6 w-6" />
              <span class="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Links Rápidos -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Links Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/sobre" 
                class="text-text-secondary hover:text-primary transition-colors"
              >
                Sobre
              </router-link>
            </li>
            <li>
              <router-link 
                to="/recursos" 
                class="text-text-secondary hover:text-primary transition-colors"
              >
                Recursos
              </router-link>
            </li>
            <li>
              <router-link 
                to="/precos" 
                class="text-text-secondary hover:text-primary transition-colors"
              >
                Preços
              </router-link>
            </li>
            <li>
              <router-link 
                to="/contato" 
                class="text-text-secondary hover:text-primary transition-colors"
              >
                Contato
              </router-link>
            </li>
            <li>
              <router-link 
                to="/politicas-de-privacidade" 
                class="text-text-secondary hover:text-primary transition-colors"
              >
                Política de Privacidade
              </router-link>
            </li>
            <li>
              <router-link 
                to="/termos-e-condicoes" 
                class="text-text-secondary hover:text-primary transition-colors"
              >
                Termos de Uso
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contato -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Contato</h3>
          <ul class="space-y-4 text-text-secondary">
            <li>
              <a 
                href="mailto:contato@xfinancial.com" 
                class="flex items-center hover:text-primary transition-colors"
              >
                <EnvelopeIcon class="h-5 w-5 mr-2 text-primary" />
                contato@xfinancial.com
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center hover:text-primary transition-colors"
              >
                <MessageSquareIcon class="h-5 w-5 mr-2 text-primary" />
                WhatsApp: (11) 99999-9999
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-primary/10 text-center text-text-secondary">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {{ new Date().getFullYear() }} X Financial. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline';
import { Instagram as InstagramIcon, Youtube as YoutubeIcon, MessageSquare as MessageSquareIcon } from 'lucide-vue-next';
</script>
