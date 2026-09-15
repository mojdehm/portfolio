<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' }
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-800">
    <header class="border-b border-slate-200">
      <nav class="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <RouterLink to="/" class="text-lg font-semibold tracking-tight text-slate-900">
          Mojdeh Mansoori
        </RouterLink>
        <div class="flex gap-6 text-sm">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-slate-600 hover:text-slate-900 transition-colors"
            active-class="text-slate-900 font-medium"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </nav>
    </header>

    <main class="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
      <RouterView />
    </main>

    <footer class="border-t border-slate-200 mt-auto">
      <div class="max-w-4xl mx-auto px-6 py-6 text-sm text-slate-500">
        Section for Orofacial Pain and Jaw Function, Department of Dentistry and Oral Health, Aarhus University
      </div>
    </footer>
  </div>
</template>
