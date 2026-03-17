<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'Main page',
    to: '#top',
    css: {
      
    }
  },
  {
    label: 'Playground',
  },
  {
    label: 'Shopping cart',
    to: '_',
    target: '_blank'
  }
]
</script>

<template>
  <UFooter class="footer">
    <template #left>
      <p class="text-muted text-sm text">Copyright by Apple © {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu class="text" :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-simple-icons-telegram"
        color="neutral"
        variant="ghost"
        to="https://t.me/media_apple"
        target="_blank"
        aria-label="tg"
      />
      <UButton
        icon="i-simple-icons-vk"
        color="neutral"
        variant="ghost"
        to="https://vk.com/apple.inside"
        target="_blank"
        aria-label="vk"
      />
      <UButton
        icon="i-simple-icons-apple"
        color="neutral"
        variant="ghost"
        to="/monkey-eating-apple"
        target="_blank"
        aria-label="Apple"
      />
    </template>
  </UFooter>
</template>

<style>

.footer {
  background-color: rgb(245, 245, 247)
}

.text {
  color: black;
}

</style>