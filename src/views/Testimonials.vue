<template>
  <div class="px-4 md:px-8 py-8">
    <!-- Main Title -->
    <h1 class="text-3xl md:text-4xl font-serif font-bold theme-text mb-6">Mots Words & Souvenirs Parttés</h1>

    <!-- Share Your Memory Button -->
    <div class="mb-8">
      <button class="px-6 py-2 border theme-border-full theme-accent rounded-md theme-button transition-colors">
        Share Your Memory
      </button>
    </div>

    <!-- Testimonials Grid - Responsive: 1 col mobile, 2 col tablet, 3 col desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div 
        v-for="(testimonial, index) in testimonials" 
        :key="index"
        class="theme-surface border theme-border rounded-lg p-4 md:p-5 shadow-md relative"
      >
        <div class="flex items-start gap-3 mb-3">
          <img 
            :src="testimonial.image" 
            :alt="testimonial.author || 'Author'" 
            class="w-10 h-10 rounded-full object-cover flex-shrink-0 border theme-border grayscale hover:grayscale-0 transition-all"
          />
          <div class="flex-1">
            <p class="theme-text-secondary text-sm leading-relaxed">
              {{ getDisplayText(testimonial.text) }}
            </p>
            <button 
              v-if="shouldShowReadMore(testimonial.text)"
              @click="openModal(index)"
              class="theme-accent text-xs mt-2 hover:theme-accent-hover underline"
            >
              Lire plus
            </button>
          </div>
        </div>
        <div v-if="testimonial.author || testimonial.relationship" class="theme-text-secondary text-sm mb-4">
          <p v-if="testimonial.author">- {{ testimonial.author }}</p>
          <p v-if="testimonial.relationship" class="text-xs theme-text-secondary mt-1">{{ testimonial.relationship }}</p>
        </div>
        <div class="absolute bottom-4 right-4">
          <svg class="w-5 h-5 theme-accent opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div 
      v-if="selectedTestimonial !== null"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      :style="{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }"
      @click.self="closeModal"
    >
      <div class="theme-surface border theme-border rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-4 md:p-6 border-b theme-border sticky top-0 theme-surface">
          <div class="flex items-center gap-3">
            <img 
              :src="selectedTestimonial?.image" 
              :alt="selectedTestimonial?.author || 'Author'" 
              class="w-12 h-12 rounded-full object-cover border theme-border"
            />
            <div>
              <h3 v-if="selectedTestimonial?.author" class="font-semibold theme-text">
                {{ selectedTestimonial.author }}
              </h3>
              <p v-else class="theme-text-secondary text-sm">Témoignage</p>
            </div>
          </div>
          <button 
            @click="closeModal"
            class="theme-accent hover:theme-accent-hover transition-colors"
            aria-label="Fermer"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-4 md:p-6">
          <p class="theme-text-secondary leading-relaxed text-base md:text-lg">
            {{ selectedTestimonial?.text }}
          </p>
        </div>

        <!-- Modal Footer -->
        <div class="p-4 md:p-6 border-t theme-border flex justify-end">
          <button 
            @click="closeModal"
            class="px-6 py-2 border theme-border-full theme-accent rounded-md theme-button transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { memorialData } from '../data/memorialData.js'

const data = memorialData

// État pour le modal
const selectedTestimonial = ref(null)

// Longueur maximale avant troncature
const MAX_LENGTH = 100

// Données des témoignages depuis les données centralisées
const testimonials = computed(() => {
  return data.testimonials.map(testimonial => ({
    text: testimonial.text,
    author: testimonial.author,
    relationship: testimonial.relationship,
    image: testimonial.image
  }))
})

// Fonction pour vérifier si on doit afficher "Lire plus"
function shouldShowReadMore(text) {
  return text.length > MAX_LENGTH
}

// Fonction pour obtenir le texte à afficher (toujours tronqué dans la carte)
function getDisplayText(text) {
  if (text.length <= MAX_LENGTH) {
    return text
  }
  return text.substring(0, MAX_LENGTH) + '...'
}

// Fonction pour ouvrir le modal
function openModal(index) {
  selectedTestimonial.value = testimonials.value[index]
  // Empêcher le scroll du body quand le modal est ouvert
  document.body.style.overflow = 'hidden'
}

// Fonction pour fermer le modal
function closeModal() {
  selectedTestimonial.value = null
  // Réactiver le scroll du body
  document.body.style.overflow = 'auto'
}
</script>

