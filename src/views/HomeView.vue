<script setup lang="ts">
import { useContent } from '../composables/useContent'
import type { HomeContent } from '../types/content'
import headerImage from '../assets/images/header.png'

const { data, loading, error } = useContent<HomeContent>('home')
</script>

<template>
  <div class="space-y-12">
    <img :src="headerImage" alt="" class="w-full rounded-lg" />

    <p v-if="loading" class="text-slate-500">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error }}</p>

    <template v-else-if="data">
      <section>
        <h1 class="text-3xl font-semibold text-slate-900 mb-4">{{ data['main-section'].title }}</h1>
        <p v-for="(p, i) in data['main-section'].content" :key="i" class="text-slate-700 mb-3 leading-relaxed">
          {{ p }}
        </p>
      </section>

      <section v-if="data.news && data.news.length">
        <h2 class="text-xl font-semibold text-slate-900 mb-3">News</h2>
        <ul class="space-y-3">
          <li v-for="(item, i) in data.news" :key="i" class="border-l-2 border-slate-300 pl-4">
            <span class="text-sm text-slate-500">{{ item.date }}</span>
            <p class="text-slate-700">{{ item.content }}</p>
          </li>
        </ul>
      </section>

      <section v-for="(section, i) in data.sections" :key="i">
        <h2 class="text-xl font-semibold text-slate-900 mb-3">{{ section.title }}</h2>
        <p v-for="(p, j) in section.content" :key="j" class="text-slate-700 mb-3 leading-relaxed">
          {{ p }}
        </p>
      </section>
    </template>
  </div>
</template>
