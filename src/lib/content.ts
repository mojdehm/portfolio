const CONTENT_BASE_URL = 'https://raw.githubusercontent.com/mojdehm/portfolio-content/main'

export async function fetchContent<T>(file: string): Promise<T> {
  const response = await fetch(`${CONTENT_BASE_URL}/${file}.json`, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to load ${file}.json (${response.status})`)
  }
  return response.json() as Promise<T>
}
