<template>
  <div class="px-4 md:px-8 py-8">
    <!-- Section unique : Vidéos Disponibles -->
    <div class="theme-surface border theme-border rounded-lg p-6">
      <h1 class="text-3xl md:text-4xl font-bold theme-text mb-8">Vidéos Disponibles</h1>

      <div v-if="allVideos.length === 0" class="text-center py-12">
        <p class="theme-text-secondary text-lg">Aucune vidéo disponible pour le moment.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(video, index) in allVideos" 
          :key="index"
          class="flex flex-col"
        >
          <p class="font-medium theme-text text-lg mb-3">{{ video.title }}</p>
          
          <!-- Image d'aperçu de la vidéo YouTube -->
          <div v-if="video.url" class="mb-3 relative group">
            <a :href="video.url" target="_blank" class="block relative">
              <img 
                :src="getYouTubeThumbnail(video.url) || '/assets/img/portfolio/Capture.PNG'" 
                :alt="video.title"
                class="w-full aspect-video rounded-md border theme-border object-cover grayscale group-hover:grayscale-0 transition-all duration-300 cursor-pointer"
                @error="handleImageError"
              />
              <!-- Overlay play button YouTube style -->
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity rounded-md pointer-events-none">
                <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          
          <p v-if="video.url" class="text-sm theme-text-secondary mt-auto">
            <a :href="video.url" target="_blank" class="theme-accent hover:theme-accent-hover inline-flex items-center gap-1">
              Voir la vidéo →
            </a>
          </p>
          <p v-else class="text-sm theme-text-secondary mt-auto">À venir</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { memorialData } from '../data/memorialData.js'

const data = memorialData

// Toutes les vidéos disponibles
const allVideos = computed(() => {
  return data.videos.available || []
})

// Fonction pour extraire l'ID YouTube depuis une URL
function getYouTubeId(url) {
  if (!url) return null
  
  // Gérer les différents formats d'URL YouTube
  let videoId = null
  
  // Format youtu.be/VIDEO_ID
  const youtuBeMatch = url.match(/(?:youtu\.be\/)([^#&?]*)/)
  if (youtuBeMatch && youtuBeMatch[1]) {
    videoId = youtuBeMatch[1].split('?')[0] // Enlever les paramètres de requête
  }
  
  // Format youtube.com/watch?v=VIDEO_ID
  if (!videoId) {
    const watchMatch = url.match(/(?:watch\?v=)([^#&?]*)/)
    if (watchMatch && watchMatch[1]) {
      videoId = watchMatch[1]
    }
  }
  
  // Format youtube.com/embed/VIDEO_ID
  if (!videoId) {
    const embedMatch = url.match(/(?:embed\/)([^#&?]*)/)
    if (embedMatch && embedMatch[1]) {
      videoId = embedMatch[1]
    }
  }
  
  // Vérifier que l'ID fait 11 caractères (format standard YouTube)
  if (videoId && videoId.length === 11) {
    return videoId
  }
  
  return null
}

// Fonction pour obtenir l'URL de l'image thumbnail YouTube
function getYouTubeThumbnail(url) {
  const videoId = getYouTubeId(url)
  if (!videoId) return null
  
  // Utiliser hqdefault qui est plus fiable que maxresdefault
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

// Fonction pour gérer les erreurs de chargement d'image
function handleImageError(event) {
  // Si l'image YouTube ne charge pas, essayer avec maxresdefault
  const img = event.target
  const src = img.src
  if (src.includes('hqdefault.jpg')) {
    img.src = src.replace('hqdefault.jpg', 'maxresdefault.jpg')
  } else if (src.includes('maxresdefault.jpg')) {
    // Si maxresdefault ne fonctionne pas non plus, utiliser une image par défaut
    img.src = '/assets/img/portfolio/Capture.PNG'
  }
}
</script>

