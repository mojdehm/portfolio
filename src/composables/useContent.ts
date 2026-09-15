import { ref, onMounted } from 'vue'
import { fetchContent } from '../lib/content'

export function useContent<T>(file: string) {
  const data = ref<T | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      data.value = await fetchContent<T>(file)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load content.'
    } finally {
      loading.value = false
    }
  })

  return { data, loading, error }
}
