<template>
  <div class="px-4 md:px-8 py-8">
    <h1 class="text-3xl md:text-4xl font-bold theme-text mb-8">Citations et Paroles</h1>

    <div class="space-y-8">
      <!-- Religion/Foi -->
      <div v-if="data.spiritual.religion" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Religion/Foi</h2>
        <div class="theme-text-secondary">
          <p class="text-xl mb-6">{{ data.spiritual.religion }}</p>
          
          <div v-if="data.spiritual.favoriteVerses && data.spiritual.favoriteVerses.length > 0">
            <p class="theme-accent font-medium mb-4">Versets bibliques</p>
            <div class="space-y-4">
              <div 
                v-for="(verse, index) in data.spiritual.favoriteVerses" 
                :key="index"
                class="theme-surface border-l-4 theme-border-full pl-4 py-3 italic"
              >
                <p>{{ verse }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Citations et paroles -->
      <div v-if="data.spiritual.favoriteQuotes && data.spiritual.favoriteQuotes.length > 0" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Parole de Henock</h2>
        <div class="space-y-4">
          <blockquote 
            v-for="(quote, index) in data.spiritual.favoriteQuotes" 
            :key="index"
            class="text-xl italic theme-text border-l-4 theme-border-full pl-4 py-2"
          >
            "{{ quote }}"
          </blockquote>
        </div>
      </div>

      <!-- Paroles du défunt -->
      <div v-if="data.spiritual.personalWords" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Paroles du Défunt</h2>
        <p class="theme-text-secondary text-lg italic">"{{ data.spiritual.personalWords }}"</p>
        <p class="theme-text-secondary text-sm mt-2">- {{ data.personalInfo.fullName }}</p>
      </div>

      <!-- Musique -->
      <div class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Musique</h2>
        <div class="grid md:grid-cols-2 gap-6 theme-text-secondary">
          <div v-if="data.spiritual.favoriteSongs && data.spiritual.favoriteSongs.length > 0">
            <p class="theme-accent font-medium mb-3">Chansons préférées</p>
            <ul class="space-y-2">
              <li v-for="(song, index) in data.spiritual.favoriteSongs" :key="index" class="flex items-center gap-2">
                <svg class="w-5 h-5 theme-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <span>{{ song }}</span>
              </li>
            </ul>
          </div>
          <div v-if="data.spiritual.religiousHymns && data.spiritual.religiousHymns.length > 0">
            <p class="theme-accent font-medium mb-3">Hymnes religieux</p>
            <ul class="space-y-2">
              <li v-for="(hymn, index) in data.spiritual.religiousHymns" :key="index" class="flex items-center gap-2">
                <svg class="w-5 h-5 theme-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <span>{{ hymn }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { memorialData } from '../data/memorialData.js'

const data = memorialData
</script>

