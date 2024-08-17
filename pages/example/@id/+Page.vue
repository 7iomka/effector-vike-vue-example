<template>
  <div class="flex flex-col gap-3">
    <h1>Example</h1>
    <p>Read parameter from route: {{ id }}</p>
    <Link href="/" class="bg-gray-100 hover:bg-gray-200 p-3">Go home</Link>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/shared/ui/link/Link.vue';
import { useUnit } from 'effector-vue/composition';
import { $id } from './model';

const id = useUnit($id);
</script>
