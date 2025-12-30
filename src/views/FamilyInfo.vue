<template>
  <div class="px-4 md:px-8 py-8">
    <h1 class="text-3xl md:text-4xl font-bold theme-text mb-8">Informations Familiales</h1>

    <div class="space-y-8">
      <!-- Parents -->
      <div class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Parents</h2>
        <div class="grid md:grid-cols-2 gap-6 theme-text-secondary">
          <div>
            <p class="theme-accent font-medium mb-2">Père</p>
            <p>{{ data.familyInfo.parents.father.name }}</p>
            <p v-if="data.familyInfo.parents.father.deathDate" class="text-sm theme-text-secondary mt-1">
              Décédé en {{ data.familyInfo.parents.father.deathDate }}
            </p>
          </div>
          <div>
            <p class="theme-accent font-medium mb-2">Mère</p>
            <p>{{ data.familyInfo.parents.mother.name }}</p>
            <p v-if="data.familyInfo.parents.mother.deathDate" class="text-sm theme-text-secondary mt-1">
              Décédée en {{ data.familyInfo.parents.mother.deathDate }}
            </p>
          </div>
        </div>
      </div>

      <!-- Conjoint/Partenaire -->
      <div v-if="data.familyInfo.spouse.name" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Conjoint/Partenaire</h2>
        <div class="theme-text-secondary">
          <p class="text-xl mb-2">{{ data.familyInfo.spouse.name }}</p>
          <p class="text-sm theme-text-secondary">Marié(e) en {{ data.familyInfo.spouse.marriageDate }}</p>
          <p class="text-sm theme-text-secondary mt-1">Statut : {{ data.familyInfo.spouse.status }}</p>
        </div>
      </div>

      <!-- Enfants -->
      <div v-if="data.familyInfo.children.length > 0" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Enfants ({{ data.familyInfo.children.length }})</h2>
        <div class="grid md:grid-cols-2 gap-4 theme-text-secondary">
          <div v-for="(child, index) in data.familyInfo.children" :key="index" class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full flex items-center justify-center theme-accent font-semibold" :style="{ backgroundColor: 'color-mix(in srgb, var(--theme-accent) 20%, transparent)' }">
              {{ index + 1 }}
            </div>
            <div>
              <p class="font-medium">{{ child.name }}</p>
              <p v-if="child.age" class="text-sm theme-text-secondary">{{ child.age }} ans</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Frères et sœurs -->
      <div v-if="data.familyInfo.siblings.count > 0" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Frères et Sœurs</h2>
        <div class="theme-text-secondary">
          <p class="mb-2">Nombre : {{ data.familyInfo.siblings.count }}</p>
          <p v-if="data.familyInfo.siblings.position" class="mb-2">
            Position dans la fratrie : {{ data.familyInfo.siblings.position }}
          </p>
          <div v-if="data.familyInfo.siblings.names && data.familyInfo.siblings.names.length > 0" class="mt-4">
            <p class="theme-accent font-medium mb-2">Noms :</p>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(name, index) in data.familyInfo.siblings.names" :key="index">{{ name }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Petits-enfants -->
      <div v-if="data.familyInfo.grandchildren.count > 0" class="theme-surface border theme-border rounded-lg p-6">
        <h2 class="text-2xl font-semibold theme-accent mb-4">Petits-enfants</h2>
        <div class="theme-text-secondary">
          <p class="mb-2">Nombre : {{ data.familyInfo.grandchildren.count }}</p>
          <div v-if="data.familyInfo.grandchildren.names && data.familyInfo.grandchildren.names.length > 0" class="mt-4">
            <p class="theme-accent font-medium mb-2">Noms :</p>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="(name, index) in data.familyInfo.grandchildren.names" :key="index">{{ name }}</li>
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

