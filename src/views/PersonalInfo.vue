<template>
  <div class="px-4 md:px-8 py-8">
    <h1 class="text-3xl md:text-4xl font-bold theme-text mb-8">Informations Personnelles</h1>

    <!-- Photo du défunt -->
    <div class="flex justify-center mb-8">
      <img 
        :src="data.photos.mainPhoto" 
        :alt="data.personalInfo.fullName" 
        class="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 theme-border-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
      />
    </div>

    <div class="space-y-8">
      <!-- Identité -->
      <div class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Identité</h2>
        <div class="grid md:grid-cols-2 gap-6 theme-text-secondary">
          <div>
            <p class="theme-accent font-medium mb-2">Nom complet</p>
            <p class="text-xl">{{ data.personalInfo.fullName }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Prénom(s)</p>
            <p>{{ data.personalInfo.firstName }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Nom de famille</p>
            <p>{{ data.personalInfo.lastName }}</p>
          </div>
          <div v-if="data.personalInfo.nickname">
            <p class="theme-accent font-medium mb-2">Surnom(s)</p>
            <p>{{ data.personalInfo.nickname }}</p>
          </div>
        </div>
      </div>

      <!-- Dates importantes -->
      <div class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Dates Importantes</h2>
        <div class="grid md:grid-cols-2 gap-6 theme-text-secondary">
          <div>
            <p class="theme-accent font-medium mb-2">Date de naissance</p>
            <p>{{ formatDate(data.personalInfo.birthDate) }}</p>
            <p class="text-sm theme-text-secondary mt-1">{{ data.personalInfo.birthPlace }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Date de décès</p>
            <p>{{ formatDate(data.personalInfo.deathDate) }}</p>
            <p class="text-sm theme-text-secondary mt-1">{{ data.personalInfo.deathPlace }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Lieu de résidence</p>
            <p>{{ data.personalInfo.residence }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Âge au décès</p>
            <p>{{ getAge(data.personalInfo.birthDate, data.personalInfo.deathDate) }} ans</p>
          </div>
        </div>
      </div>

      <!-- Profession et parcours -->
      <div class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Profession et Parcours</h2>
        <div class="space-y-4 theme-text-secondary">
          <div>
            <p class="theme-accent font-medium mb-2">Profession principale</p>
            <p>{{ data.personalInfo.profession }}</p>
            <p v-if="data.personalInfo.company" class="text-sm theme-text-secondary mt-1">
              {{ data.personalInfo.company }}
            </p>
          </div>
          <div v-if="data.personalInfo.previousProfessions && data.personalInfo.previousProfessions.length > 0">
            <p class="theme-accent font-medium mb-2">Professions précédentes</p>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(prof, index) in data.personalInfo.previousProfessions" :key="index">{{ prof }}</li>
            </ul>
          </div>
          <div class="grid md:grid-cols-3 gap-4 mt-6">
            <div v-if="data.personalInfo.education.primary">
              <p class="theme-accent font-medium mb-2 text-sm">Primaire</p>
              <p class="text-sm">{{ data.personalInfo.education.primary }}</p>
            </div>
            <div v-if="data.personalInfo.education.secondary">
              <p class="theme-accent font-medium mb-2 text-sm">Secondaire</p>
              <p class="text-sm">{{ data.personalInfo.education.secondary }}</p>
            </div>
            <div v-if="data.personalInfo.education.university">
              <p class="theme-accent font-medium mb-2 text-sm">Supérieur</p>
              <p class="text-sm">{{ data.personalInfo.education.university }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { memorialData, formatDate, getAge } from '../data/memorialData.js'

const data = memorialData
</script>

