import { writable } from 'svelte/store'

export const emoji = writable<string | undefined>()
