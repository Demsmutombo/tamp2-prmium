import { ref, watch, onMounted } from 'vue'

// Définition des thèmes funéraires - Couleurs sobres et respectueuses
export const themes = {
  dark: {
    name: 'Noir Classique',
    colors: {
      background: '#000000',
      surface: '#0a0a0a',
      text: '#FFFFFF',
      textSecondary: '#D1D5DB',
      accent: '#D4AF37', // Or funéraire classique
      accentHover: '#E5C158',
      border: '#D4AF37',
      borderOpacity: '0.3'
    }
  },
  elegant: {
    name: 'Or Élégant',
    colors: {
      background: '#1a1a1a',
      surface: '#0f0f0f',
      text: '#F5F5F5',
      textSecondary: '#A3A3A3',
      accent: '#C9A961', // Or plus sobre
      accentHover: '#D4AF37',
      border: '#C9A961',
      borderOpacity: '0.4'
    }
  },
  royal: {
    name: 'Pourpre Spirituel',
    colors: {
      background: '#1a0f1a',
      surface: '#0f0a0f',
      text: '#E5E7EB',
      textSecondary: '#9CA3AF',
      accent: '#7C3AED', // Violet pourpre plus sobre
      accentHover: '#8B5CF6',
      border: '#7C3AED',
      borderOpacity: '0.3'
    }
  },
  serene: {
    name: 'Bleu Paix',
    colors: {
      background: '#0f1419',
      surface: '#1a1f26',
      text: '#E0E7FF',
      textSecondary: '#A5B4FC',
      accent: '#4A5568', // Bleu-gris sobre
      accentHover: '#5A6578',
      border: '#4A5568',
      borderOpacity: '0.3'
    }
  },
  warm: {
    name: 'Gris Anthracite',
    colors: {
      background: '#1a1a1a',
      surface: '#2a2a2a',
      text: '#F5F5F4',
      textSecondary: '#D6D3D1',
      accent: '#8B7355', // Beige-gris sobre
      accentHover: '#9B8365',
      border: '#8B7355',
      borderOpacity: '0.3'
    }
  },
  light: {
    name: 'Blanc Pur',
    colors: {
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: '#1F2937',
      textSecondary: '#6B7280',
      accent: '#8B7355', // Beige-gris sobre pour contraste
      accentHover: '#9B8365',
      border: '#8B7355',
      borderOpacity: '0.3'
    }
  }
}

// État du thème actuel (partagé globalement)
const currentTheme = ref('dark')

// Fonction pour appliquer un thème
export function applyTheme(themeName) {
  const theme = themes[themeName]
  if (!theme) return

  const root = document.documentElement
  const colors = theme.colors

  // Convertir hex en RGB pour les bordures avec opacité
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  const borderRgb = hexToRgb(colors.border)
  const borderRgbString = borderRgb ? `${borderRgb.r}, ${borderRgb.g}, ${borderRgb.b}` : '252, 211, 77'

  // Appliquer les couleurs CSS variables
  root.style.setProperty('--theme-bg', colors.background)
  root.style.setProperty('--theme-surface', colors.surface)
  root.style.setProperty('--theme-text', colors.text)
  root.style.setProperty('--theme-text-secondary', colors.textSecondary)
  root.style.setProperty('--theme-accent', colors.accent)
  root.style.setProperty('--theme-accent-hover', colors.accentHover)
  root.style.setProperty('--theme-border', colors.border)
  root.style.setProperty('--theme-border-rgb', borderRgbString)
  root.style.setProperty('--theme-border-opacity', colors.borderOpacity)

  // Sauvegarder dans localStorage
  localStorage.setItem('memorial-theme', themeName)
  currentTheme.value = themeName
}

// Fonction pour charger le thème sauvegardé
export function loadTheme() {
  const savedTheme = localStorage.getItem('memorial-theme')
  if (savedTheme && themes[savedTheme]) {
    applyTheme(savedTheme)
  } else {
    applyTheme('dark')
  }
}

// Composable Vue
export function useTheme() {
  // Charger le thème au montage si pas déjà chargé
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('memorial-theme')
    if (savedTheme && themes[savedTheme]) {
      if (currentTheme.value === 'dark') {
        applyTheme(savedTheme)
      }
    } else if (currentTheme.value === 'dark') {
      applyTheme('dark')
    }
  }

  return {
    currentTheme,
    themes,
    applyTheme,
    loadTheme
  }
}

