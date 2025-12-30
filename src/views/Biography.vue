<template>
  <div class="px-8 py-8">
    <!-- Main Content -->
    <div class="flex flex-col md:flex-row gap-8 mb-8">
      <!-- Profile Picture -->
      <div class="flex-shrink-0">
        <img 
          :src="data.photos.mainPhoto" 
          :alt="data.personalInfo.fullName" 
          class="w-64 h-64 rounded-md border-2 theme-border-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
        />
      </div>

      <!-- Name and Biography -->
      <div class="flex-1">
        <h1 class="text-4xl font-bold theme-text mb-2">{{ data.personalInfo.fullName }}</h1>
        <p class="text-xl theme-text-secondary mb-6">{{ formatDate(data.personalInfo.birthDate) }} - {{ formatDate(data.personalInfo.deathDate) }}</p>
        <div class="theme-text-secondary leading-relaxed space-y-4">
          <div v-for="(paragraph, index) in biographyParagraphs" :key="index">
            <p>{{ paragraph }}</p>
          </div>
          
          <div v-if="data.biography.achievements && data.biography.achievements.length > 0" class="mt-6">
            <p class="theme-accent font-semibold mb-3">Réalisations importantes :</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li v-for="(achievement, index) in data.biography.achievements" :key="index">{{ achievement }}</li>
            </ul>
          </div>

          <div v-if="data.personalInfo.profession" class="mt-6">
            <p class="theme-accent font-semibold mb-2">Profession :</p>
            <p>{{ data.personalInfo.profession }}</p>
            <p v-if="data.personalInfo.company" class="text-sm theme-text-secondary mt-1">{{ data.personalInfo.company }}</p>
          </div>

          <div v-if="data.biography.hobbies && data.biography.hobbies.length > 0" class="mt-6">
            <p class="theme-accent font-semibold mb-2">Passions et hobbies :</p>
            <p>{{ data.biography.hobbies.join(', ') }}</p>
          </div>

          <div v-if="data.biography.personality && data.biography.personality.adjectives && data.biography.personality.adjectives.length > 0" class="mt-6">
            <p class="theme-accent font-semibold mb-2">Personnalité :</p>
            <p>{{ data.biography.personality.adjectives.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Inspiring Words Section -->
    <div class="text-center py-8 border-t theme-border mt-8">
      <h2 class="text-2xl font-semibold theme-accent mb-6">Inspiring Words</h2>
      <blockquote class="text-3xl italic theme-text mb-3 font-light">
        "{{ data.spiritual.favoriteQuotes[0] || 'The light remains with us.' }}"
      </blockquote>
      <p class="theme-text-secondary">- {{ data.personalInfo.fullName }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { memorialData, formatDate } from '../data/memorialData.js'

const data = memorialData

// Séparer la biographie en paragraphes
const biographyParagraphs = computed(() => {
  return data.biography.fullBiography
    .split('\n')
    .filter(p => p.trim().length > 0)
})
</script>

