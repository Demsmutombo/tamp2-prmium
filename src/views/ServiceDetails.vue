<template>
  <div class="px-4 md:px-8 py-8">
    <!-- Title -->
    <h1 class="text-3xl md:text-4xl font-bold theme-text mb-8">Informations sur les Obsèques</h1>

    <div class="space-y-8">
      <!-- Veillée mortuaire -->
      <div v-if="data.funeralInfo.wake" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Veillée Mortuaire</h2>
        <div class="grid md:grid-cols-2 gap-6 theme-text-secondary">
          <div>
            <p class="theme-accent font-medium mb-2">Date :</p>
            <p>{{ formatCeremonyDate(data.funeralInfo.wake.date) }}</p>
          </div>
          <div>
            <p class="text-amber-200 font-medium mb-2">Heure :</p>
            <p>{{ data.funeralInfo.wake.time }}</p>
          </div>
          <div class="md:col-span-2">
            <p class="text-amber-200 font-medium mb-2">Lieu :</p>
            <p>{{ data.funeralInfo.wake.location }}</p>
          </div>
        </div>
      </div>

      <!-- Cérémonie funéraire -->
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Main Image -->
        <div class="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop" 
            alt="Cérémonie funéraire" 
            class="w-full h-auto rounded-md border theme-border object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
        </div>

        <!-- Sidebar -->
        <div class="w-full md:w-80 theme-surface p-6 rounded-md border theme-border relative flex flex-col">
          <!-- Map Icon -->
          <div class="mb-4">
            <svg class="w-8 h-8 theme-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <!-- Section Title -->
          <h2 class="text-2xl font-semibold theme-accent mb-6">Cérémonie Funéraire</h2>

          <!-- Event Details -->
          <div class="space-y-4 theme-text-secondary flex-1">
            <div>
              <p class="font-medium mb-1 theme-accent">Date :</p>
              <p>{{ formatCeremonyDate(data.funeralInfo.ceremony.date) }}</p>
            </div>
            <div>
              <p class="font-medium mb-1 text-amber-200">Heure :</p>
              <p>{{ data.funeralInfo.ceremony.time }}</p>
            </div>
            <div>
              <p class="font-medium mb-1 text-amber-200">Adresse :</p>
              <p class="text-sm">{{ data.funeralInfo.ceremony.location }}</p>
            </div>
            <div v-if="data.funeralInfo.ceremony.type">
              <p class="font-medium mb-1 text-amber-200">Type :</p>
              <p>{{ data.funeralInfo.ceremony.type }}</p>
            </div>
            <div v-if="data.funeralInfo.ceremony.church">
              <p class="font-medium mb-1 text-amber-200">Lieu de culte :</p>
              <p>{{ data.funeralInfo.ceremony.church }}</p>
            </div>
          </div>

          <!-- Profile Picture - Bottom Right -->
          <div class="mt-auto flex justify-end">
            <img 
              :src="data.photos.mainPhoto" 
              :alt="data.personalInfo.fullName" 
              class="w-16 h-16 rounded-full border-2 theme-border-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>

      <!-- Inhumation/Sépulture -->
      <div v-if="data.funeralInfo.burial" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Inhumation/Sépulture</h2>
        <div class="grid md:grid-cols-2 gap-6 theme-text-secondary mb-6">
          <div>
            <p class="theme-accent font-medium mb-2">Date :</p>
            <p>{{ formatCeremonyDate(data.funeralInfo.burial.date) }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Heure :</p>
            <p>{{ data.funeralInfo.burial.time || "Non spécifiée" }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Cimetière :</p>
            <p>{{ data.funeralInfo.burial.cemetery }}</p>
            <p v-if="data.funeralInfo.burial.address" class="text-sm theme-text-secondary mt-1">{{ data.funeralInfo.burial.address }}</p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Adresse :</p>
            <p class="text-sm">{{ data.funeralInfo.burial.address }}</p>
          </div>
        </div>

        <!-- Carte Google Maps - Centrée -->
        <div v-if="data.funeralInfo.burial.googleMaps && data.funeralInfo.burial.coordinates" class="mt-6 flex justify-center">
          <div class="w-full max-w-2xl">
            <div class="rounded-md overflow-hidden border theme-border">
              <iframe
                :src="`https://www.google.com/maps?q=${data.funeralInfo.burial.coordinates.lat},${data.funeralInfo.burial.coordinates.lng}&hl=fr&z=15&output=embed`"
                width="100%"
                height="250"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full"
              ></iframe>
            </div>
            <div class="text-center mt-3">
              <a 
                :href="data.funeralInfo.burial.googleMapsUrl"
                target="_blank"
                class="inline-flex items-center gap-1 text-xs theme-accent hover:theme-accent-hover transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { memorialData, formatDate } from '../data/memorialData.js'

const data = memorialData

// Fonction pour formater la date de cérémonie avec le jour de la semaine
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
</script>

