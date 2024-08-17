import Head from '../layouts/HeadDefault.vue';
import Layout from '../layouts/LayoutDefault.vue';

import vikeVue from 'vike-vue/config';
import type { Config } from 'vike/types';
import type { EventCallable, Scope } from 'effector';

// Default config (can be overridden by pages)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const config = {
  extends: vikeVue,
  // https://vike.dev/clientRouting
  clientRouting: true,
  // https://vike.dev/passToClient
  passToClient: ['scopeValues'],
  // https://vike.dev/meta
  meta: {
    pageStarted: {
      env: { client: true, server: true },
    },
    scope: {
      env: { client: true, server: true },
    },
  },
  // https://vike.dev/hydrationCanBeAborted
  hydrationCanBeAborted: true,
  Head,
  Layout,
  title: 'Demo app',
} satisfies Config;

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface Config {
      baseCanonicalUrl?: string;
    }
    interface PageContext {
      config: {
        pageStarted?: EventCallable<{
          params: Record<string, string>;
          data: unknown;
        }>;
      };

      scopeValues?: Record<string, unknown>;
      scope?: Scope;
    }
  }
}
