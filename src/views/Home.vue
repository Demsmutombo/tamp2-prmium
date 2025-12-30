<template>
  <div class="px-4 md:px-8 py-8">
    <!-- Title Section with Profile Picture -->
    <div class="flex items-center gap-6 mb-8">
      <!-- Profile Picture (Circular) -->
      <div class="flex-shrink-0">
        <img 
          :src="data.photos.mainPhoto" 
          :alt="data.personalInfo.fullName" 
          class="w-24 h-24 rounded-full border-2 theme-border-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
        />
      </div>
      
      <!-- Title and Years -->
      <div>
        <h1 class="text-2xl md:text-3xl font-bold theme-text mb-2">Photo Memories of {{ data.personalInfo.fullName }}</h1>
        <p class="text-lg theme-text-secondary">{{ formatDate(data.personalInfo.birthDate) }} - {{ formatDate(data.personalInfo.deathDate) }}</p>
      </div>
    </div>

    <!-- Filtres par catégorie -->
    <div class="mb-6 flex flex-wrap gap-2 justify-center">
      <button
        @click="selectedCategory = 'all'"
        :class="[
          'px-4 py-2 rounded-md border transition-all text-sm',
          selectedCategory === 'all' 
            ? 'theme-border-full theme-accent theme-button' 
            : 'theme-border theme-text-secondary hover:theme-accent'
        ]"
      >
        Toutes les photos
      </button>
      <button
        @click="selectedCategory = 'Photos personnelles'"
        :class="[
          'px-4 py-2 rounded-md border transition-all text-sm',
          selectedCategory === 'Photos personnelles' 
            ? 'theme-border-full theme-accent theme-button' 
            : 'theme-border theme-text-secondary hover:theme-accent'
        ]"
      >
        Henock
      </button>
      <button
        @click="selectedCategory = 'Morgue'"
        :class="[
          'px-4 py-2 rounded-md border transition-all text-sm',
          selectedCategory === 'Morgue' 
            ? 'theme-border-full theme-accent theme-button' 
            : 'theme-border theme-text-secondary hover:theme-accent'
        ]"
      >
        Morgue
      </button>
      <button
        @click="selectedCategory = 'Cimetière'"
        :class="[
          'px-4 py-2 rounded-md border transition-all text-sm',
          selectedCategory === 'Cimetière' 
            ? 'theme-border-full theme-accent theme-button' 
            : 'theme-border theme-text-secondary hover:theme-accent'
        ]"
      >
        Cimetière
      </button>
      <button
        @click="selectedCategory = 'Veillée et cérémonie'"
        :class="[
          'px-4 py-2 rounded-md border transition-all text-sm',
          selectedCategory === 'Veillée et cérémonie' 
            ? 'theme-border-full theme-accent theme-button' 
            : 'theme-border theme-text-secondary hover:theme-accent'
        ]"
      >
        Veillée et cérémonie
      </button>
      <button
        @click="selectedCategory = 'Bain de consolation'"
        :class="[
          'px-4 py-2 rounded-md border transition-all text-sm',
          selectedCategory === 'Bain de consolation' 
            ? 'theme-border-full theme-accent theme-button' 
            : 'theme-border theme-text-secondary hover:theme-accent'
        ]"
      >
        Bain de consolation
      </button>
    </div>

    <!-- Photo Gallery Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div 
        v-for="(photo, index) in photos" 
        :key="index"
        class="aspect-square overflow-hidden rounded-md border theme-border cursor-pointer hover:theme-border-full transition-all"
        @click="openLightbox(index)"
      >
        <img 
          :src="photo.src" 
          :alt="photo.alt" 
          class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
        />
      </div>
    </div>

    <!-- Load More Button -->
    <div class="text-center mb-8">
      <button class="px-6 py-2 border theme-border-full theme-accent hover:bg-amber-200 hover:text-black transition-colors rounded-md theme-button">
        Load More
      </button>
    </div>


    <!-- Lightbox Modal -->
    <div 
      v-if="selectedPhotoIndex !== null"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
      @click.self="closeLightbox"
    >
      <!-- Close Button -->
      <button 
        @click="closeLightbox"
        class="absolute top-4 right-4 theme-accent hover:theme-accent-hover transition-colors z-10"
        aria-label="Fermer"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Previous Button -->
      <button 
        v-if="photos.length > 1"
        @click="previousPhoto"
        class="absolute left-4 theme-accent hover:theme-accent-hover transition-colors z-10"
        aria-label="Photo précédente"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Next Button -->
      <button 
        v-if="photos.length > 1"
        @click="nextPhoto"
        class="absolute right-4 theme-accent hover:theme-accent-hover transition-colors z-10"
        aria-label="Photo suivante"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Image Container -->
      <div class="relative max-w-5xl max-h-[90vh] w-full">
        <img 
          :src="photos[selectedPhotoIndex]?.src" 
          :alt="photos[selectedPhotoIndex]?.alt" 
          class="max-w-full max-h-[90vh] mx-auto object-contain"
        />
        
        <!-- Photo Counter -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 theme-accent text-sm theme-surface bg-opacity-50 px-4 py-2 rounded">
          {{ selectedPhotoIndex + 1 }} / {{ photos.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { memorialData, formatDate } from '../data/memorialData.js'

const data = memorialData

// État pour la lightbox
const selectedPhotoIndex = ref(null)

// État pour le filtre de catégorie
const selectedCategory = ref('all')

// Liste des photos filtrées selon la catégorie sélectionnée (sans doublons et sans photos de témoignage)
const photos = computed(() => {
  let filteredPhotos = data.photos.gallery
  
  // Exclure explicitement les photos du dossier témoignage
  filteredPhotos = filteredPhotos.filter(photo => !photo.src.includes('/temoignage/'))
  
  // Filtrer par catégorie si une catégorie est sélectionnée
  if (selectedCategory.value !== 'all') {
    filteredPhotos = filteredPhotos.filter(photo => photo.category === selectedCategory.value)
  }
  
  // Supprimer les doublons basés sur le src
  const seen = new Set()
  const uniquePhotos = filteredPhotos.filter(photo => {
    if (seen.has(photo.src)) {
      return false
    }
    seen.add(photo.src)
    return true
  })
  
  return uniquePhotos.map(photo => ({
    src: photo.src,
    alt: photo.alt || `Memory ${photo.category || ''}`,
    category: photo.category
  }))
})

// Fonction pour ouvrir la lightbox
function openLightbox(index) {
  selectedPhotoIndex.value = index
  document.body.style.overflow = 'hidden'
}

// Fonction pour fermer la lightbox
function closeLightbox() {
  selectedPhotoIndex.value = null
  document.body.style.overflow = 'auto'
}

// Fonction pour photo précédente
function previousPhoto() {
  if (selectedPhotoIndex.value > 0) {
    selectedPhotoIndex.value--
  } else {
    selectedPhotoIndex.value = photos.value.length - 1
  }
}

// Fonction pour photo suivante
function nextPhoto() {
  if (selectedPhotoIndex.value < photos.value.length - 1) {
    selectedPhotoIndex.value++
  } else {
    selectedPhotoIndex.value = 0
  }
}

// Navigation au clavier
function handleKeyPress(event) {
  if (selectedPhotoIndex.value === null) return
  
  if (event.key === 'Escape') {
    closeLightbox()
  } else if (event.key === 'ArrowLeft') {
    previousPhoto()
  } else if (event.key === 'ArrowRight') {
    nextPhoto()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

