import { Scope } from 'effector';
import { App, Plugin } from 'vue';

export interface EffectorScopePluginOptions {
  scope: Scope;
  scopeName?: string;
}
export const EffectorScopePlugin: Plugin = {
  install(app: App, options: EffectorScopePluginOptions) {
    const scopeName = options.scopeName ?? 'root';

    app.config.globalProperties.scopeName = scopeName;
    app.provide(app.config.globalProperties.scopeName, options.scope);
  },
};
