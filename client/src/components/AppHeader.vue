
<template>
  <header class="bg-white shadow-sm">
    <!-- Ligne principale -->
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6"
    >
      <!-- Logo -->
      <a
        href="/"
        class="shrink-0 text-xl font-bold text-purple-600 sm:text-2xl"
      >
        StephShop
      </a>

      <!-- Recherche : visible à partir de la tablette -->
      <form
        class="hidden flex-1 md:flex"
        @submit.prevent="search"
      >
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Rechercher un produit..."
          aria-label="Rechercher un produit"
          class="min-w-0 flex-1 rounded-l-lg border border-slate-300 px-4 py-2 outline-none focus:border-purple-500"
        />

        <button
          type="submit"
          class="rounded-r-lg bg-purple-600 px-5 py-2 font-medium text-white hover:bg-purple-700"
        >
          Rechercher
        </button>
      </form>

      <!-- Actions -->
      <div class="flex shrink-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          class="hidden text-sm font-medium text-slate-700 hover:text-purple-600 sm:block"
        >
          Mon compte
        </button>

        <button
          type="button"
          class="text-sm font-medium text-slate-700 hover:text-purple-600"
        >
          Panier
          <span
            class="ml-1 rounded-full bg-purple-600 px-2 py-1 text-xs text-white"
          >
            0
          </span>
        </button>

        <!-- Bouton du menu mobile -->
        <button
          type="button"
          class="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          :aria-expanded="menuOpen"
          aria-label="Ouvrir ou fermer le menu"
          @click="menuOpen = !menuOpen"
        >
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Recherche mobile -->
    <div class="px-4 pb-3 md:hidden">
      <form class="flex" @submit.prevent="search">
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Rechercher un produit..."
          aria-label="Rechercher un produit"
          class="min-w-0 flex-1 rounded-l-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-purple-500"
        />

        <button
          type="submit"
          class="rounded-r-lg bg-purple-600 px-3 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          Rechercher
        </button>
      </form>
    </div>

    <!-- Navigation ordinateur -->
    <nav class="hidden border-t border-slate-100 md:block">
      <div
        class="mx-auto flex max-w-7xl gap-8 px-6 py-3 text-sm text-slate-600"
      >
        <a href="/" class="hover:text-purple-600">Accueil</a>
        <a href="#" class="hover:text-purple-600">Tous les produits</a>
        <a href="#" class="hover:text-purple-600">Nouveautés</a>
        <a href="#" class="hover:text-purple-600">Promotions</a>
      </div>
    </nav>

    <!-- Navigation mobile déroulante -->
    <nav
      v-if="menuOpen"
      class="border-t border-slate-100 bg-white px-4 py-3 md:hidden"
    >
      <div class="flex flex-col gap-1">
        <a
          href="/"
          class="rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
          @click="menuOpen = false"
        >
          Accueil
        </a>

        <a
          href="#"
          class="rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
          @click="menuOpen = false"
        >
          Tous les produits
        </a>

        <a
          href="#"
          class="rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
          @click="menuOpen = false"
        >
          Nouveautés
        </a>

        <a
          href="#"
          class="rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
          @click="menuOpen = false"
        >
          Promotions
        </a>

        <button
          type="button"
          class="rounded-lg px-3 py-3 text-left text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
        >
          Mon compte
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const menuOpen = ref(false)

function search() {
  console.log('Recherche :', searchQuery.value)
}
</script>
