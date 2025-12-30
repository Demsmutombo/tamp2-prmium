<template>
  <div class="min-h-screen bg-black flex flex-col items-center p-4 md:p-8">
    <!-- Navigation Bar -->
    <nav class="w-full max-w-4xl mb-4 md:mb-6 pt-4 pb-2 border-b border-gray-700">
      <ul class="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-300 text-xs md:text-sm">
        <li>
          <router-link 
            to="/" 
            class="hover:text-white transition-colors"
          >
            Accueil
          </router-link>
        </li>
        <li>
          <router-link 
            to="/galerie" 
            class="hover:text-white transition-colors"
          >
            Galerie
          </router-link>
        </li>
        <li>
          <router-link 
            to="/informations-obeques" 
            class="hover:text-white transition-colors"
          >
            Obsèques
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Card Container - Responsive -->
    <div 
      id="memorial-card"
      class="relative w-full max-w-md md:max-w-2xl bg-black text-white flex-1 flex items-center mb-8"
    >
      <!-- Decorative L-lines -->
      <div class="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-amber-200 opacity-60"></div>
      <div class="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-amber-200 opacity-60"></div>

      <!-- Floral Elements - Top Right -->
      <div class="absolute top-0 right-0 opacity-40 pointer-events-none hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 20 Q90 30, 85 40 Q95 50, 90 60" stroke="#E5E7EB" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M85 40 Q75 35, 80 30 Q85 25, 90 30" stroke="#D1D5DB" stroke-width="1.5" fill="none"/>
          <circle cx="85" cy="40" r="4" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="85" cy="40" r="2.5" fill="#E5E7EB"/>
          <circle cx="90" cy="60" r="3.5" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="90" cy="60" r="2" fill="#E5E7EB"/>
          <ellipse cx="82" cy="37" rx="1.5" ry="3" fill="#F3F4F6" opacity="0.6" transform="rotate(-25 82 37)"/>
          <ellipse cx="88" cy="37" rx="1.5" ry="3" fill="#F3F4F6" opacity="0.6" transform="rotate(25 88 37)"/>
        </svg>
      </div>

      <!-- Floral Elements - Bottom Left -->
      <div class="absolute bottom-0 left-0 opacity-40 pointer-events-none hidden md:block">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 120 Q30 110, 35 115 Q40 100, 50 105 Q45 90, 55 95 Q60 85, 65 90" 
                stroke="#E5E7EB" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M35 115 Q25 105, 30 100 Q35 95, 40 100" 
                stroke="#D1D5DB" stroke-width="1.5" fill="none"/>
          <path d="M50 105 Q45 95, 50 90 Q55 85, 60 90" 
                stroke="#D1D5DB" stroke-width="1.5" fill="none"/>
          <circle cx="35" cy="115" r="5" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="35" cy="115" r="3" fill="#E5E7EB"/>
          <circle cx="50" cy="105" r="4" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="50" cy="105" r="2.5" fill="#E5E7EB"/>
          <circle cx="65" cy="90" r="4.5" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="65" cy="90" r="3" fill="#E5E7EB"/>
          <ellipse cx="32" cy="112" rx="2" ry="4" fill="#F3F4F6" opacity="0.6" transform="rotate(-30 32 112)"/>
          <ellipse cx="38" cy="112" rx="2" ry="4" fill="#F3F4F6" opacity="0.6" transform="rotate(30 38 112)"/>
        </svg>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 px-6 md:px-12 py-8 md:py-16 text-center w-full">
        <!-- REPOSE EN PAIX -->
        <h1 class="text-2xl md:text-4xl font-serif text-white mb-8 md:mb-10 tracking-wide" style="font-family: 'Times New Roman', serif;">
          REPOSE EN PAIX
        </h1>

        <!-- Circular Photo -->
        <div class="flex justify-center mb-6 md:mb-8">
          <div class="relative">
            <img 
              :src="imageSrc" 
              alt="Henock Ngandu Kabadi" 
              class="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-amber-200 object-cover shadow-lg"
              @error="handleImageError"
              @load="imageLoaded = true"
            />
            <div v-if="!imageLoaded" class="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
              <span class="text-gray-400 text-xs">Chargement...</span>
            </div>
          </div>
        </div>

        <!-- Name -->
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-4 md:mb-6 tracking-wide" style="font-family: 'Times New Roman', serif;">
          Henock Ngandu Kabadi
        </h2>

        <!-- Dates -->
        <p class="text-gray-300 text-sm md:text-base mb-8 md:mb-12 font-light tracking-wide">
          15 Mai 1992 - 2 Septembre 2024
        </p>

        <!-- Eulogy Message -->
        <div class="text-gray-200 text-sm md:text-base leading-relaxed font-light space-y-2 max-w-sm mx-auto">
          <p>Que ton âme trouve la paix éternelle et le réconfort.</p>
          <p class="mt-2">Repose en paix, cher Henock. Tu nous manqueras</p>
          <p>profondément.</p>
        </div>
      </div>
    </div>

    <!-- Download Button -->
    <div class="w-full max-w-4xl mt-8 mb-4 flex justify-center">
      <button 
        @click="downloadCard"
        class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors text-sm md:text-base flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Télécharger la carte
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { memorialData } from '../data/memorialData.js'
import html2canvas from 'html2canvas'

const imageSrc = ref('/assets/img/portfolio/henock/henock.jpg')
const imageLoaded = ref(false)

const formatDate = (date) => {
  if (!date || !date.day || !date.month || !date.year) return ''
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  return `${date.day} ${months[date.month - 1]} ${date.year}`
}

const handleImageError = (event) => {
  console.error('Erreur de chargement de l\'image:', event.target.src)
  // Essayer un chemin alternatif
  if (imageSrc.value.includes('henock.jpg')) {
    imageSrc.value = '/assets/img/portfolio/henock/henock (2).jpg'
  } else {
    // Si aucune image ne charge, utiliser une image par défaut
    imageSrc.value = '/assets/img/portfolio/Capture.PNG'
  }
}

const downloadCard = async (event) => {
  const cardElement = document.getElementById('memorial-card')
  if (!cardElement) return

  const button = event?.target?.closest('button') || event?.currentTarget
  const originalText = button ? button.innerHTML : ''
  
  try {
    // Afficher un message de chargement
    if (button) {
      button.innerHTML = '<span class="animate-spin">⏳</span> Téléchargement...'
      button.disabled = true
    }

    // Créer le canvas avec html2canvas
    const canvas = await html2canvas(cardElement, {
      backgroundColor: '#000000',
      scale: 2, // Meilleure qualité pour le téléchargement
      useCORS: true,
      logging: false
    })

    // Convertir en image et télécharger
    const link = document.createElement('a')
    link.download = `Carte_Commemorative_${memorialData.personalInfo.fullName.replace(/\s+/g, '_')}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()

    // Restaurer le bouton
    if (button) {
      button.innerHTML = originalText
      button.disabled = false
    }
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error)
    alert('Erreur lors du téléchargement de la carte. Veuillez réessayer.')
    if (button) {
      button.disabled = false
      button.innerHTML = originalText
    }
  }
}

onMounted(() => {
  // S'assurer que les images sont chargées avant le téléchargement
  const img = document.querySelector('#memorial-card img')
  if (img && !img.complete) {
    img.addEventListener('load', () => {
      // Image chargée
    })
  }
})
</script>

<style scoped>
/* Assure que le fond est vraiment noir */
.bg-black {
  background-color: #000000;
}
</style>

