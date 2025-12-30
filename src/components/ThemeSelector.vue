<template>
  <div class="fixed bottom-4 right-4 z-50 theme-selector-container">
    <!-- Theme Toggle Button -->
    <button
      @click.stop="toggleSelector"
      class="w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg"
      :style="{ 
        backgroundColor: 'var(--theme-surface)', 
        borderColor: 'var(--theme-accent)', 
        color: 'var(--theme-accent)' 
      }"
      @mouseenter="$event.target.style.backgroundColor = 'var(--theme-accent)'; $event.target.style.color = 'var(--theme-bg)'"
      @mouseleave="$event.target.style.backgroundColor = 'var(--theme-surface)'; $event.target.style.color = 'var(--theme-accent)'"
      aria-label="Changer le thème"
    >
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Theme Selector Panel -->
    <div 
      v-if="isOpen"
      @click.stop
      class="absolute bottom-16 right-0 w-64 rounded-lg p-4 shadow-xl border-2"
      :style="{ 
        backgroundColor: 'var(--theme-surface)', 
        borderColor: 'var(--theme-accent)' 
      }"
    >
      <h3 class="font-semibold mb-4 text-center" :style="{ color: 'var(--theme-accent)' }">Choisir un thème</h3>
      <div class="space-y-2">
        <button
          v-for="(theme, key) in themes"
          :key="key"
          @click.stop="selectTheme(key)"
          class="w-full flex items-center gap-3 p-3 rounded border-2 transition-all text-left"
          :style="{ 
            backgroundColor: 'var(--theme-surface)',
            borderColor: currentThemeValue === key ? 'var(--theme-accent)' : 'rgba(var(--theme-border-rgb, 252, 211, 77), 0.3)'
          }"
        >
          <!-- Color Preview -->
          <div 
            class="w-8 h-8 rounded-full border-2"
            :style="{ 
              backgroundColor: key === 'light' ? theme.colors.background : (key === 'dark' ? theme.colors.background : theme.colors.accent),
              borderColor: 'rgba(var(--theme-border-rgb, 212, 175, 55), 0.3)'
            }"
          ></div>
          <div class="flex-1">
            <p class="font-medium" :style="{ color: 'var(--theme-text)' }">{{ theme.name }}</p>
            <p v-if="currentThemeValue === key" class="text-xs" :style="{ color: 'var(--theme-accent)' }">Actif</p>
          </div>
          <svg 
            v-if="currentThemeValue === key"
            class="w-5 h-5"
            :style="{ color: 'var(--theme-accent)' }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useTheme, themes } from '../composables/useTheme.js'

const { currentTheme, applyTheme } = useTheme()
const isOpen = ref(false)

// S'assurer que currentTheme est réactif
const currentThemeValue = computed(() => currentTheme.value)

function toggleSelector() {
  isOpen.value = !isOpen.value
}

function selectTheme(themeName) {
  applyTheme(themeName)
  isOpen.value = false
}

// Fermer le sélecteur si on clique en dehors
onMounted(() => {
  document.addEventListener('click', (e) => {
    const selector = e.target.closest('.theme-selector-container')
    if (!selector) {
      isOpen.value = false
    }
  })
})
</script>

