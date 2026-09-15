<script setup lang="ts">
import { useContent } from '../composables/useContent'
import type { PublicationsContent } from '../types/content'

const { data, loading, error } = useContent<PublicationsContent>('publications')

function statusClasses(status: string) {
  if (status === 'published') return 'bg-green-100 text-green-800'
  if (status === 'in press' || status === 'accepted') return 'bg-blue-100 text-blue-800'
  return 'bg-slate-100 text-slate-600'
}
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-semibold text-slate-900">{{ data?.main.title ?? 'Publications' }}</h1>

    <p v-if="loading" class="text-slate-500">Loading…</p>
    <p v-else-if="error" class="text-red-600">{{ error }}</p>

    <ol v-else class="space-y-5">
      <li v-for="(pub, i) in data?.main.list" :key="i" class="border-b border-slate-100 pb-4">
        <p class="text-slate-800 leading-relaxed">
          {{ pub.item }}
          <a
            v-if="pub.link"
            :href="pub.link"
            target="_blank"
            rel="noopener"
            class="text-slate-500 hover:text-slate-900 underline ml-1"
          >
            [link]
          </a>
        </p>
        <span class="inline-block mt-1 text-xs px-2 py-0.5 rounded" :class="statusClasses(pub.status)">
          {{ pub.status }}
        </span>
      </li>
    </ol>
  </div>
</template>
