<script setup lang="ts">
import { useContent } from '../composables/useContent'
import type { CvContent } from '../types/content'

const { data, loading, error } = useContent<CvContent>('cv')
</script>

<template>
  <div class="space-y-10">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <h1 class="text-3xl font-semibold text-slate-900">CV</h1>
      <a
        v-if="data"
        :href="`/${data.pdf}`"
        target="_blank"
        rel="noopener"
        class="inline-block text-sm px-4 py-2 rounded bg-slate-900 text-white hover:bg-slate-700 transition-colors"
      >
        Download PDF
      </a>
    </div>

    <p v-if="loading" class="text-slate-500">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error }}</p>

    <template v-else-if="data">
      <p class="text-slate-700 leading-relaxed">{{ data.profile }}</p>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Positions</h2>
        <div v-for="(p, i) in data.positions" :key="i" class="mb-3">
          <p class="text-sm font-semibold text-slate-900">{{ p.date }}</p>
          <p class="font-medium text-slate-800">{{ p.role }}</p>
          <p class="text-sm text-slate-500">{{ p.org }}</p>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Publications</h2>
        <p class="text-slate-700">
          See the full
          <RouterLink to="/publications" class="underline text-slate-900">Publications</RouterLink>
          page.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Research methods and analytical skills</h2>
        <ul class="list-disc pl-5 text-slate-700 space-y-1">
          <li v-for="(s, i) in data.skills" :key="i">{{ s }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Teaching experience</h2>
        <div v-for="(t, i) in data.teaching" :key="i" class="mb-3">
          <p class="text-slate-800">{{ t.content }}</p>
          <p class="text-sm text-slate-500">{{ t.org }}</p>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">International conferences</h2>
        <ul class="list-disc pl-5 text-slate-700 space-y-1">
          <li v-for="(c, i) in data.conferences" :key="i">{{ c }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Education</h2>
        <div v-for="(e, i) in data.education" :key="i" class="mb-3">
          <p class="text-slate-800">{{ e.content }}</p>
          <p v-if="e.org" class="text-sm text-slate-500">{{ e.org }}</p>
          <p v-if="e.detail" class="text-sm text-slate-500">{{ e.detail }}</p>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Academic service</h2>
        <ul class="list-disc pl-5 text-slate-700 space-y-1">
          <li v-for="(s, i) in data.service" :key="i">{{ s }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Honors and awards</h2>
        <ul class="list-disc pl-5 text-slate-700 space-y-1">
          <li v-for="(h, i) in data.honors" :key="i">{{ h }}</li>
        </ul>
      </section>
    </template>
  </div>
</template>
