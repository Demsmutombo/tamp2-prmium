<template>
  <div class="px-4 md:px-8 py-8">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <p class="text-lg md:text-xl theme-accent mb-4 italic">En mémoire de</p>
      <div class="flex justify-center mb-6">
        <img 
          :src="data.photos.mainPhoto" 
          :alt="data.personalInfo.fullName" 
          class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 theme-border-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
        />
      </div>
      <h1 class="text-4xl md:text-6xl font-serif font-bold theme-text mb-2">{{ data.personalInfo.fullName }}</h1>
      <p v-if="data.personalInfo.nickname" class="text-xl md:text-2xl theme-accent mb-4 italic">{{ data.personalInfo.nickname }}</p>
      <p class="text-xl md:text-2xl theme-text-secondary mb-2">{{ formatDate(data.personalInfo.birthDate) }} - {{ formatDate(data.personalInfo.deathDate) }}</p>
      <p class="text-lg theme-accent mb-2">{{ getAge(data.personalInfo.birthDate, data.personalInfo.deathDate) }} ans</p>
      <p class="text-base theme-text-secondary italic">{{ getDaysSinceDeath(data.personalInfo.deathDate) }} Jours depuis son départ</p>
    </div>

    <!-- Quote Section -->
    <div class="text-center mb-12 py-8 border-y theme-border">
      <blockquote class="text-2xl md:text-3xl italic theme-text font-light mb-3">
        "{{ data.spiritual.favoriteQuotes[0] || 'The light remains with us.' }}"
      </blockquote>
      <p class="theme-text-secondary">- {{ data.personalInfo.fullName }}</p>
    </div>

    <!-- Quick Info Cards -->
    <div class="grid md:grid-cols-3 gap-6 mb-12">
      <!-- Profession -->
      <div v-if="data.personalInfo.profession" class="theme-surface border theme-border rounded-lg p-6 text-center">
        <svg class="w-10 h-10 theme-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h3 class="theme-accent font-semibold mb-2">Profession</h3>
        <p class="theme-text-secondary">{{ data.personalInfo.profession }}</p>
        <p v-if="data.personalInfo.company" class="text-sm theme-text-secondary mt-1">{{ data.personalInfo.company }}</p>
      </div>

      <!-- Famille -->
      <div v-if="data.familyInfo.children.length > 0" class="theme-surface border theme-border rounded-lg p-6 text-center">
        <svg class="w-10 h-10 theme-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h3 class="theme-accent font-semibold mb-2">Famille</h3>
        <p class="theme-text-secondary">{{ data.familyInfo.children.length }} enfant(s)</p>
        <p v-if="data.familyInfo.spouse.name" class="text-sm theme-text-secondary mt-1">Époux(se) : {{ data.familyInfo.spouse.name }}</p>
      </div>

      <!-- Lieu -->
      <div class="theme-surface border theme-border rounded-lg p-6 text-center">
        <svg class="w-10 h-10 theme-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 class="theme-accent font-semibold mb-2">Résidence</h3>
        <p class="theme-text-secondary text-sm">{{ data.personalInfo.residence }}</p>
      </div>
    </div>

    <!-- Biography Section -->
    <div class="theme-surface border theme-border rounded-lg p-6 md:p-8 mb-12">
      <h2 class="text-3xl font-semibold theme-accent mb-6 text-center">Biographie</h2>
      <div class="theme-text-secondary leading-relaxed space-y-4 max-w-4xl mx-auto">
        <div v-for="(paragraph, index) in biographyParagraphs" :key="index">
          <p>{{ paragraph }}</p>
        </div>
      </div>
    </div>

    <!-- Achievements & Passions -->
    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <!-- Achievements -->
      <div v-if="data.biography.achievements && data.biography.achievements.length > 0" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4 flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Réalisations
        </h2>
        <ul class="space-y-3 theme-text-secondary">
          <li v-for="(achievement, index) in data.biography.achievements" :key="index" class="flex items-start gap-3">
            <span class="theme-accent mt-1">•</span>
            <span>{{ achievement }}</span>
          </li>
        </ul>
      </div>

      <!-- Passions & Hobbies -->
      <div v-if="data.biography.hobbies && data.biography.hobbies.length > 0" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4 flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Passions
        </h2>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="(hobby, index) in data.biography.hobbies" 
            :key="index"
            class="px-4 py-2 border theme-border rounded-full theme-accent text-sm"
            :style="{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)' }"
          >
            {{ hobby }}
          </span>
        </div>
        <div v-if="data.biography.sports && data.biography.sports.length > 0" class="mt-6">
          <h3 class="theme-accent font-medium mb-3">Sports</h3>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="(sport, index) in data.biography.sports" 
              :key="index"
              class="px-4 py-2 border theme-border rounded-full theme-text-secondary text-sm"
            :style="{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 10%, transparent)' }"
            >
              {{ sport }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Family Section -->
    <div v-if="data.familyInfo.children.length > 0 || data.familyInfo.spouse.name" class="theme-surface border theme-border rounded-lg p-6 md:p-8 mb-12">
      <h2 class="text-3xl font-semibold theme-accent mb-6 text-center">Famille</h2>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-if="data.familyInfo.spouse.name">
          <h3 class="text-xl theme-accent mb-4">Conjoint/Partenaire</h3>
          <p class="theme-text-secondary text-lg">{{ data.familyInfo.spouse.name }}</p>
          <p class="theme-text-secondary text-sm mt-1">Marié(e) en {{ data.familyInfo.spouse.marriageDate }}</p>
        </div>
        <div v-if="data.familyInfo.children.length > 0">
          <h3 class="text-xl theme-accent mb-4">Enfants</h3>
          <ul class="space-y-2 theme-text-secondary">
            <li v-for="(child, index) in data.familyInfo.children" :key="index" class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-full flex items-center justify-center theme-accent font-semibold text-sm" :style="{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)' }">
                {{ index + 1 }}
              </span>
              <div>
                <p>{{ child.name }}</p>
                <p v-if="child.age" class="text-sm theme-text-secondary">{{ child.age }} ans</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Funeral Info Section -->
    <div v-if="data.funeralInfo.ceremony" class="theme-surface border theme-border rounded-lg p-6 md:p-8 mb-12">
      <h2 class="text-3xl font-semibold theme-accent mb-6 text-center">Informations sur les Obsèques</h2>
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
        <div v-if="data.funeralInfo.wake">
          <h3 class="text-xl theme-accent mb-3">Veillée</h3>
          <p class="theme-text-secondary">{{ formatCeremonyDate(data.funeralInfo.wake.date) }}</p>
          <p class="theme-text-secondary text-sm mt-1">{{ data.funeralInfo.wake.time }}</p>
        </div>
        <div>
          <h3 class="text-xl theme-accent mb-3">Cérémonie</h3>
          <p class="theme-text-secondary">{{ formatCeremonyDate(data.funeralInfo.ceremony.date) }}</p>
          <p class="theme-text-secondary text-sm mt-1">{{ data.funeralInfo.ceremony.time }}</p>
        </div>
        <div v-if="data.funeralInfo.burial">
          <h3 class="text-xl theme-accent mb-3">Inhumation</h3>
          <p class="theme-text-secondary">{{ formatCeremonyDate(data.funeralInfo.burial.date) }}</p>
          <p class="theme-text-secondary text-sm mt-1">{{ data.funeralInfo.burial.time }}</p>
        </div>
      </div>
      <div class="text-center mt-6">
        <router-link 
          to="/informations-obeques"
          class="inline-block px-6 py-2 border theme-border-full theme-accent theme-button transition-colors rounded-md"
        >
          Voir tous les détails
        </router-link>
      </div>
    </div>

    <!-- Photo Gallery Preview -->
    <div v-if="data.photos.gallery.length > 0" class="mb-12">
      <h2 class="text-3xl font-semibold theme-accent mb-6 text-center">Galerie Photo</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div 
          v-for="(photo, index) in previewPhotos" 
          :key="index"
          class="aspect-square overflow-hidden rounded-md border theme-border cursor-pointer hover:theme-border-full transition-all"
          @click="$router.push('/galerie')"
        >
          <img 
            :src="photo.src" 
            :alt="photo.alt" 
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>
      <div class="text-center">
        <router-link 
          to="/galerie"
          class="inline-block px-6 py-2 border theme-border-full theme-accent theme-button transition-colors rounded-md"
        >
          Voir toutes les photos ({{ data.photos.gallery.length }})
        </router-link>
      </div>
    </div>

    <!-- Testimonials Preview -->
    <div v-if="data.testimonials.length > 0" class="mb-12">
      <h2 class="text-3xl font-semibold theme-accent mb-6 text-center">Témoignages</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div 
          v-for="(testimonial, index) in previewTestimonials" 
          :key="index"
          class="theme-surface border theme-border rounded-lg p-5"
        >
          <div class="flex items-start gap-3 mb-3">
            <img 
              :src="testimonial.image" 
              :alt="testimonial.author || 'Author'" 
              class="w-10 h-10 rounded-full object-cover flex-shrink-0 border theme-border grayscale hover:grayscale-0 transition-all"
            />
            <p class="theme-text-secondary text-sm leading-relaxed flex-1">
              {{ getDisplayText(testimonial.text) }}
            </p>
          </div>
          <p v-if="testimonial.author" class="theme-text-secondary text-sm">- {{ testimonial.author }}</p>
        </div>
      </div>
      <div class="text-center">
        <router-link 
          to="/temoignages"
          class="inline-block px-6 py-2 border theme-border-full theme-accent theme-button transition-colors rounded-md"
        >
          Voir tous les témoignages ({{ data.testimonials.length }})
        </router-link>
      </div>
    </div>

    <!-- Spiritual Section Preview -->
    <div v-if="data.spiritual.favoriteQuotes && data.spiritual.favoriteQuotes.length > 0" class="theme-surface border theme-border rounded-lg p-6 md:p-8 mb-12">
      <h2 class="text-3xl font-semibold theme-accent mb-6 text-center">Éléments Spirituels</h2>
      <div class="max-w-3xl mx-auto space-y-6">
        <div v-if="data.spiritual.religion" class="text-center">
          <p class="theme-accent font-medium mb-2">Religion</p>
          <p class="theme-text-secondary text-lg">{{ data.spiritual.religion }}</p>
        </div>
        <div v-if="data.spiritual.favoriteQuotes.length > 0" class="space-y-4">
          <blockquote 
            v-for="(quote, index) in data.spiritual.favoriteQuotes.slice(0, 2)" 
            :key="index"
            class="text-xl italic theme-text border-l-4 theme-border-full pl-4 py-2"
          >
            "{{ quote }}"
          </blockquote>
        </div>
        <div class="text-center mt-6">
          <router-link 
            to="/elements-spirituels"
            class="inline-block px-6 py-2 border theme-border-full theme-accent theme-button transition-colors rounded-md"
          >
            Voir tous les éléments spirituels
          </router-link>
        </div>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <router-link 
        to="/informations-personnelles"
        class="theme-surface border theme-border rounded-lg p-4 text-center hover:theme-border-full transition-all group"
      >
        <svg class="w-8 h-8 theme-accent mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <p class="theme-text-secondary text-sm">Informations Personnelles</p>
      </router-link>
      <router-link 
        to="/informations-familiales"
        class="theme-surface border theme-border rounded-lg p-4 text-center hover:theme-border-full transition-all group"
      >
        <svg class="w-8 h-8 theme-accent mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p class="theme-text-secondary text-sm">Informations Familiales</p>
      </router-link>
      <router-link 
        to="/videos"
        class="theme-surface border theme-border rounded-lg p-4 text-center hover:theme-border-full transition-all group"
      >
        <svg class="w-8 h-8 theme-accent mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <p class="theme-text-secondary text-sm">Vidéos</p>
      </router-link>
      <router-link 
        to="/carte-commemorative"
        class="theme-surface border theme-border rounded-lg p-4 text-center hover:theme-border-full transition-all group"
      >
        <svg class="w-8 h-8 theme-accent mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="theme-text-secondary text-sm">Carte Commémorative</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { memorialData, formatDate, getAge, getDaysSinceDeath } from '../data/memorialData.js'

const data = memorialData

// Séparer la biographie en paragraphes
const biographyParagraphs = computed(() => {
  return data.biography.fullBiography
    .split('\n')
    .filter(p => p.trim().length > 0)
})

// Photos de prévisualisation (4 premières)
const previewPhotos = computed(() => {
  return data.photos.gallery.slice(0, 4)
})

// Témoignages de prévisualisation (3 premiers)
const previewTestimonials = computed(() => {
  return data.testimonials.slice(0, 3)
})

// Fonction pour formater la date de cérémonie
function formatCeremonyDate(dateObj) {
  if (!dateObj) return ""
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ]
  const date = new Date(dateObj.year, dateObj.month - 1, dateObj.day)
  const dayName = days[date.getDay()]
  return `${dayName} ${dateObj.day} ${months[dateObj.month - 1]} ${dateObj.year}`
}

// Fonction pour tronquer le texte
function getDisplayText(text) {
  const MAX_LENGTH = 80
  if (text.length <= MAX_LENGTH) {
    return text
  }
  return text.substring(0, MAX_LENGTH) + '...'
}
</script>

