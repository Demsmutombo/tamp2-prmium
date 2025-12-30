<template>
  <!-- Écran de chargement -->
  <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center theme-bg">
    <div class="flex flex-col items-center">
      <img 
        src="/assets/img/log.png" 
        alt="IM DIGITAL LABS" 
        class="h-48 md:h-64 w-auto animate-pulse"
      />
    </div>
  </div>

  <!-- Page spéciale pour la carte commémorative (fond noir) -->
  <div v-else-if="$route.name === 'MemorialCard'" class="min-h-screen">
    <router-view></router-view>
  </div>
  
  <!-- Pages normales avec thème -->
  <div v-else class="min-h-screen flex items-center justify-center p-4 theme-bg">
    <div class="theme-surface w-full max-w-5xl border relative overflow-hidden theme-border">
      <!-- Decorative L-lines -->
      <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 theme-border" style="opacity: 0.4;"></div>
      <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 theme-border" style="opacity: 0.4;"></div>
      
      <!-- Theme Selector -->
      <ThemeSelector />

      <!-- Navigation Bar -->
      <nav class="border-b theme-border px-4 md:px-8 py-4 relative">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <img 
              src="/assets/img/log.png" 
              alt="IM DIGITAL LABS" 
              class="h-8 md:h-10 w-auto"
            />
            <span class="text-sm md:text-base theme-accent font-medium">
              IM DIGITAL LABS
            </span>
          </div>
          
          <!-- Desktop Navigation Links -->
          <ul class="hidden md:flex space-x-4 lg:space-x-6 theme-text-secondary text-sm">
            <li>
              <router-link 
                to="/" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'Home' || $route.name === 'Biography' }"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link 
                to="/biographie" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'Biography' }"
              >
                Biographie
              </router-link>
            </li>
            <li>
              <router-link 
                to="/informations-personnelles" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'PersonalInfo' }"
              >
                Personnelles
              </router-link>
            </li>
            <li>
              <router-link 
                to="/informations-familiales" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'FamilyInfo' }"
              >
                Familiales
              </router-link>
            </li>
            <li>
              <router-link 
                to="/galerie" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'Gallery' }"
              >
                Photos
              </router-link>
            </li>
            <li>
              <router-link 
                to="/videos" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'Videos' }"
              >
                Vidéos
              </router-link>
            </li>
            <li>
              <router-link 
                to="/temoignages" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'Testimonials' }"
              >
                Témoignages
              </router-link>
            </li>
            <li>
              <router-link 
                to="/elements-spirituels" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'Spiritual' }"
              >
                Spirituel
              </router-link>
            </li>
            <li>
              <router-link 
                to="/informations-obeques" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'ServiceDetails' }"
              >
                Obsèques
              </router-link>
            </li>
            <li>
              <router-link 
                to="/carte-commemorative" 
                class="hover:theme-accent transition-colors"
                :class="{ 'border-b-2 theme-border pb-1 font-medium theme-accent': $route.name === 'MemorialCard' }"
              >
                Carte
              </router-link>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden theme-accent focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div 
          v-if="isMobileMenuOpen"
          class="md:hidden mt-4 pb-4 border-t theme-border pt-4 max-h-[70vh] overflow-y-auto"
        >
          <ul class="flex flex-col space-y-2 theme-text-secondary text-sm">
            <li>
              <router-link 
                to="/" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'Home' || $route.name === 'Biography' }"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link 
                to="/biographie" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'Biography' }"
              >
                Biographie
              </router-link>
            </li>
            <li>
              <router-link 
                to="/informations-personnelles" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'PersonalInfo' }"
              >
                Informations Personnelles
              </router-link>
            </li>
            <li>
              <router-link 
                to="/informations-familiales" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'FamilyInfo' }"
              >
                Informations Familiales
              </router-link>
            </li>
            <li>
              <router-link 
                to="/galerie" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'Gallery' }"
              >
                Photos
              </router-link>
            </li>
            <li>
              <router-link 
                to="/videos" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'Videos' }"
              >
                Vidéos
              </router-link>
            </li>
            <li>
              <router-link 
                to="/temoignages" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'Testimonials' }"
              >
                Témoignages
              </router-link>
            </li>
            <li>
              <router-link 
                to="/elements-spirituels" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'Spiritual' }"
              >
                Éléments Spirituels
              </router-link>
            </li>
            <li>
              <router-link 
                to="/informations-obeques" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'ServiceDetails' }"
              >
                Informations Obsèques
              </router-link>
            </li>
            <li>
              <router-link 
                to="/carte-commemorative" 
                @click="closeMobileMenu"
                class="block hover:theme-accent transition-colors py-2"
                :class="{ 'border-l-4 theme-border-full pl-2 font-medium theme-accent': $route.name === 'MemorialCard' }"
              >
                Carte Commémorative
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Router View for Pages -->
      <div class="relative theme-text">
        <router-view></router-view>
      </div>

      <!-- Footer -->
      <Footer />

      <!-- Decorative Floral Elements - Bottom Left -->
      <div class="absolute bottom-0 left-0 opacity-30 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Feuilles et tiges -->
          <path d="M20 120 Q30 110, 35 115 Q40 100, 50 105 Q45 90, 55 95 Q60 85, 65 90" 
                stroke="#FDE68A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M35 115 Q25 105, 30 100 Q35 95, 40 100" 
                stroke="#FCD34D" stroke-width="1.5" fill="none"/>
          <path d="M50 105 Q45 95, 50 90 Q55 85, 60 90" 
                stroke="#FCD34D" stroke-width="1.5" fill="none"/>
          <!-- Fleurs -->
          <circle cx="35" cy="115" r="5" fill="#FEF3C7" opacity="0.8"/>
          <circle cx="35" cy="115" r="3" fill="#FDE68A"/>
          <circle cx="50" cy="105" r="4" fill="#FEF3C7" opacity="0.8"/>
          <circle cx="50" cy="105" r="2.5" fill="#FDE68A"/>
          <circle cx="65" cy="90" r="4.5" fill="#FEF3C7" opacity="0.8"/>
          <circle cx="65" cy="90" r="3" fill="#FDE68A"/>
          <!-- Pétales supplémentaires -->
          <ellipse cx="32" cy="112" rx="2" ry="4" fill="#FEF3C7" opacity="0.6" transform="rotate(-30 32 112)"/>
          <ellipse cx="38" cy="112" rx="2" ry="4" fill="#FEF3C7" opacity="0.6" transform="rotate(30 38 112)"/>
        </svg>
      </div>

      <!-- Decorative Floral Elements - Bottom Right -->
      <div class="absolute bottom-0 right-0 opacity-30 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Feuilles et tiges -->
          <path d="M100 110 Q90 100, 85 105 Q80 90, 70 95 Q75 80, 65 85 Q60 75, 55 80" 
                stroke="#FDE68A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M85 105 Q95 95, 90 90 Q85 85, 80 90" 
                stroke="#FCD34D" stroke-width="1.5" fill="none"/>
          <path d="M70 95 Q75 85, 70 80 Q65 75, 60 80" 
                stroke="#FCD34D" stroke-width="1.5" fill="none"/>
          <!-- Fleurs -->
          <circle cx="85" cy="105" r="4.5" fill="#FEF3C7" opacity="0.8"/>
          <circle cx="85" cy="105" r="3" fill="#FDE68A"/>
          <circle cx="70" cy="95" r="4" fill="#FEF3C7" opacity="0.8"/>
          <circle cx="70" cy="95" r="2.5" fill="#FDE68A"/>
          <circle cx="55" cy="80" r="4" fill="#FEF3C7" opacity="0.8"/>
          <circle cx="55" cy="80" r="2.5" fill="#FDE68A"/>
          <!-- Pétales supplémentaires -->
          <ellipse cx="82" cy="102" rx="2" ry="3.5" fill="#FEF3C7" opacity="0.6" transform="rotate(30 82 102)"/>
          <ellipse cx="88" cy="102" rx="2" ry="3.5" fill="#FEF3C7" opacity="0.6" transform="rotate(-30 88 102)"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ThemeSelector from './components/ThemeSelector.vue'
import Footer from './components/Footer.vue'

// État de chargement
const isLoading = ref(true)

// État du menu mobile
const isMobileMenuOpen = ref(false)

// Masquer l'écran de chargement après le chargement initial
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500) // Afficher pendant 1.5 secondes
})

// Fonction pour basculer le menu mobile
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Fonction pour fermer le menu mobile
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

