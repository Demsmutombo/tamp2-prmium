<template>
  <footer class="border-t theme-border py-8 px-4 md:px-8 mt-12">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Informations de contact -->
        <div>
          <h3 class="theme-accent font-semibold mb-4 text-lg">Contact</h3>
          <div class="space-y-2 theme-text-secondary text-sm">
            <p v-if="data.contact.siteContact.name" class="font-medium theme-text">
              {{ data.contact.siteContact.name }}
            </p>
            <p v-if="data.contact.siteContact.relationship" class="text-xs theme-text-secondary mb-2">
              {{ data.contact.siteContact.relationship }}
            </p>
            <p v-if="data.contact.siteContact.phone" class="flex items-center gap-2">
              <span class="theme-accent">Téléphone:</span> 
              <a :href="`https://wa.me/${data.contact.siteContact.phone.replace(/[^0-9]/g, '')}`" target="_blank" class="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <svg class="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-1.08-2.03-1.205-.273-.124-.471-.186-.67.186-.197.371-.767 1.205-.94 1.453-.173.248-.347.289-.644.149-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span class="theme-text-secondary">{{ data.contact.siteContact.phone }}</span>
              </a>
            </p>
            <p v-if="data.contact.siteContact.email" class="flex items-center gap-2">
              <span class="theme-accent">Email:</span> 
              <a :href="`mailto:${data.contact.siteContact.email}`" class="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <svg class="w-5 h-5" fill="#4285F4" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span class="theme-text-secondary">{{ data.contact.siteContact.email }}</span>
              </a>
            </p>
          </div>
        </div>

        <!-- Condoléances -->
        <div v-if="data.contact.condolences.showContact">
          <h3 class="theme-accent font-semibold mb-4 text-lg">Condoléances</h3>
          <div class="space-y-2 theme-text-secondary text-sm">
            <p v-if="data.contact.condolences.phone" class="flex items-center gap-2">
              <span class="theme-accent">Téléphone:</span> 
              <a :href="`https://wa.me/${data.contact.condolences.phone.replace(/[^0-9]/g, '')}`" target="_blank" class="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <svg class="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-1.08-2.03-1.205-.273-.124-.471-.186-.67.186-.197.371-.767 1.205-.94 1.453-.173.248-.347.289-.644.149-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span class="theme-text-secondary">{{ data.contact.condolences.phone }}</span>
              </a>
            </p>
            <p v-if="data.contact.condolences.email" class="flex items-center gap-2">
              <span class="theme-accent">Email:</span> 
              <a :href="`mailto:${data.contact.condolences.email}`" class="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <svg class="w-5 h-5" fill="#4285F4" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span class="theme-text-secondary">{{ data.contact.condolences.email }}</span>
              </a>
            </p>
            <p v-if="data.contact.condolences.postalAddress" class="mt-2">
              {{ data.contact.condolences.postalAddress }}
            </p>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="theme-accent font-semibold mb-4 text-lg">Navigation</h3>
          <ul class="space-y-2 theme-text-secondary text-sm">
            <li>
              <router-link to="/" class="hover:theme-accent transition-colors">
                Accueil
              </router-link>
            </li>
            <li>
              <router-link to="/biographie" class="hover:theme-accent transition-colors">
                Biographie
              </router-link>
            </li>
            <li>
              <router-link to="/galerie" class="hover:theme-accent transition-colors">
                Galerie
              </router-link>
            </li>
            <li>
              <router-link to="/temoignages" class="hover:theme-accent transition-colors">
                Témoignages
              </router-link>
            </li>
            <li>
              <router-link to="/informations-obeques" class="hover:theme-accent transition-colors">
                Informations Obsèques
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Ligne de séparation -->
      <div class="border-t theme-border pt-6">
        <div class="flex flex-col items-center gap-4 text-center">
          <!-- Logo et nom -->
          <div class="flex items-center gap-2">
            <img 
              src="/assets/img/log.png" 
              alt="IM DIGITAL LABS" 
              class="h-10 md:h-12 w-auto"
            />
            <span class="text-base md:text-lg theme-accent font-medium">
              IM DIGITAL LABS
            </span>
          </div>
          
          <!-- Copyright -->
          <p class="theme-text-secondary text-sm">
            © Copyright IM DIGITAL LABS All Rights Reserved
          </p>

          <!-- Informations de conception -->
          <p class="theme-text-secondary text-xs md:text-sm flex flex-wrap items-center justify-center gap-2">
            <span>Conçu par IM DIGITAL LABS</span>
            <span>|</span>
            <a href="https://wa.me/243991683269" target="_blank" class="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-1.08-2.03-1.205-.273-.124-.471-.186-.67.186-.197.371-.767 1.205-.94 1.453-.173.248-.347.289-.644.149-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>+243 991 683 269</span>
            </a>
            <span>|</span>
            <a href="mailto:imdigitallabs@gmail.com" class="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5" fill="#4285F4" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>imdigitallabs@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { memorialData } from '../data/memorialData.js'

const data = memorialData

const currentYear = computed(() => new Date().getFullYear())
</script>

