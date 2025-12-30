<template>
  <div class="min-h-screen bg-black flex flex-col items-center p-4">
    <!-- Navigation Bar -->
    <nav class="w-full max-w-md mb-4 pt-4 pb-2 border-b border-gray-700">
      <ul class="flex justify-center space-x-6 text-gray-300 text-sm">
        <li>
          <router-link 
            to="/" 
            class="hover:text-white transition-colors"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link 
            to="/galerie" 
            class="hover:text-white transition-colors"
          >
            Gallery
          </router-link>
        </li>
        <li>
          <router-link 
            to="/temoignages" 
            class="hover:text-white transition-colors"
          >
            Tributes
          </router-link>
        </li>
        <li>
          <router-link 
            to="/informations-obeques" 
            class="hover:text-white transition-colors"
          >
            Service Details
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="relative w-full max-w-md bg-black text-white flex-1 flex items-center">
      <!-- Decorative L-lines -->
      <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200 opacity-60"></div>
      <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200 opacity-60"></div>

      <!-- Floral Elements - Top Right -->
      <div class="absolute top-0 right-0 opacity-40 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 20 Q90 30, 85 40 Q95 50, 90 60" stroke="#E5E7EB" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M85 40 Q75 35, 80 30 Q85 25, 90 30" stroke="#D1D5DB" stroke-width="1.5" fill="none"/>
          <circle cx="85" cy="40" r="4" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="85" cy="40" r="2.5" fill="#E5E7EB"/>
          <circle cx="90" cy="60" r="3.5" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="90" cy="60" r="2" fill="#E5E7EB"/>
          <ellipse cx="82" cy="37" rx="1.5" ry="3" fill="#F3F4F6" opacity="0.6" transform="rotate(-25 82 37)"/>
          <ellipse cx="88" cy="37" rx="1.5" ry="3" fill="#F3F4F6" opacity="0.6" transform="rotate(25 88 37)"/>
        </svg>
      </div>

      <!-- Floral Elements - Bottom Left -->
      <div class="absolute bottom-0 left-0 opacity-40 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 120 Q30 110, 35 115 Q40 100, 50 105 Q45 90, 55 95 Q60 85, 65 90" 
                stroke="#E5E7EB" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M35 115 Q25 105, 30 100 Q35 95, 40 100" 
                stroke="#D1D5DB" stroke-width="1.5" fill="none"/>
          <path d="M50 105 Q45 95, 50 90 Q55 85, 60 90" 
                stroke="#D1D5DB" stroke-width="1.5" fill="none"/>
          <circle cx="35" cy="115" r="5" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="35" cy="115" r="3" fill="#E5E7EB"/>
          <circle cx="50" cy="105" r="4" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="50" cy="105" r="2.5" fill="#E5E7EB"/>
          <circle cx="65" cy="90" r="4.5" fill="#F3F4F6" opacity="0.8"/>
          <circle cx="65" cy="90" r="3" fill="#E5E7EB"/>
          <ellipse cx="32" cy="112" rx="2" ry="4" fill="#F3F4F6" opacity="0.6" transform="rotate(-30 32 112)"/>
          <ellipse cx="38" cy="112" rx="2" ry="4" fill="#F3F4F6" opacity="0.6" transform="rotate(30 38 112)"/>
        </svg>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 px-8 py-12 text-center">
        <!-- REST IN PEACE -->
        <h1 class="text-2xl md:text-3xl font-serif text-white mb-8 tracking-wide" style="font-family: 'Times New Roman', serif;">
          REST IN PEACE
        </h1>

        <!-- Circular Photo -->
        <div class="flex justify-center mb-6">
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
              alt="Morgan Maxwell" 
              class="w-48 h-48 rounded-full border-2 border-amber-200 object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
          </div>
        </div>

        <!-- Name -->
        <h2 class="text-3xl md:text-4xl font-serif text-white mb-3 tracking-wide" style="font-family: 'Times New Roman', serif;">
          MORGAN MAXWELL
        </h2>

        <!-- Dates -->
        <p class="text-gray-300 text-sm md:text-base mb-12 font-light tracking-wide">
          October 14 1942 - May 10 2030
        </p>

        <!-- Eulogy Message -->
        <div class="text-gray-200 text-sm md:text-base leading-relaxed font-light space-y-2 max-w-sm mx-auto">
          <p>May your soul find eternal peace and comfort.</p>
          <p>Rest in Peace, dear Morgan. You will be</p>
          <p>deeply missed.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page de carte commémorative
</script>

<style scoped>
/* Assure que le fond est vraiment noir */
.bg-black {
  background-color: #000000;
}
</style>

