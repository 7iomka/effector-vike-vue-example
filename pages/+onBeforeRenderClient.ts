import { fork } from 'effector';
import type { PageContextClient } from 'vike/types';

export function onBeforeRenderClient(pageContext: PageContextClient) {
  console.log('pageContext.isHydration', pageContext.isHydration)
  if (!('scope' in pageContext)) {
    return {
      pageContext: {
        scope: fork({ values: pageContext.scopeValues }),
      },
    };
  }
}
