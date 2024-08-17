// import { EffectorScopePlugin } from 'effector-vue';
import { fork } from 'effector';
import type { OnCreateAppSync } from 'vike-vue/types';
import { EffectorScopePlugin } from '@/shared/lib/effector/effector-vue3-scope-plugin';
// import { EffectorScopePlugin } from 'effector-vue'; // <-- broken!

const onCreateApp: OnCreateAppSync = (
  pageContext
): ReturnType<OnCreateAppSync> => {
  const { app, scopeValues } = pageContext;

  // app.use(
  //   EffectorScopePlugin({
  //     scope: fork({ values: scopeValues }),
  //     scopeName: 'app-scope-name',
  //   })
  // );

  console.log('Scopevalues', scopeValues,);

  app.use(EffectorScopePlugin, {
    scope: fork({ values: scopeValues }),
    scopeName: 'app-scope-name',
  });
};

export { onCreateApp };
