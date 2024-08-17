<template>
  <a :data-active="booleanDataAttr(isActive)">
    <slot />
  </a>
</template>

<script lang="ts" setup>
  import { usePageContext } from 'vike-vue/usePageContext';
  import { computed, useAttrs } from 'vue';
  import { booleanDataAttr } from '@/shared/lib/attrs';

  const pageContext = usePageContext();
  const { href } = useAttrs();

  const isActive = computed(() => {
    const { urlPathname } = pageContext;
    return href === '/'
      ? urlPathname === href
      : urlPathname.startsWith(href as string);
  });
</script>
