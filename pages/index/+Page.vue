<template>
  <h1 class="font-bold text-3xl pb-4">My Vike app</h1>

  <div class="flex flex-col gap-2">
    <h1>Hello World</h1>
    <p>Random from server: {{ random }}</p>
    <Link
      :href="`/example/${random}`"
      class="mt-4 bg-gray-100 hover:bg-gray-200 p-3"
      >Go to /example/{{ random }}</Link
    >
  </div>
</template>

<script lang="ts" setup>
import { useUnit } from 'effector-vue/composition';
import { $random } from './model';
import Link from '@/shared/ui/link/Link.vue';

const random = useUnit($random);
</script>
