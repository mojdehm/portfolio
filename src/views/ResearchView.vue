<script setup lang="ts">
import { useContent } from '../composables/useContent'
import type { ResearchContent } from '../types/content'

const { data, loading, error } = useContent<ResearchContent>('research')
</script>

<template>
  <div class="space-y-10">
    <h1 class="text-3xl font-semibold text-slate-900">Research</h1>

    <p v-if="loading" class="text-slate-500">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error }}</p>

    <template v-else>
      <section v-for="(section, i) in data?.sections" :key="i">
        <h2 class="text-xl font-semibold text-slate-900 mb-3">{{ section.title }}</h2>
        <p v-for="(p, j) in section.content" :key="j" class="text-slate-700 mb-3 leading-relaxed">
          {{ p }}
        </p>
      </section>
    </template>
  </div>
</template>
