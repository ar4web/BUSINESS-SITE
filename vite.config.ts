import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), tailwindcss()];
  // @ts-expect-error optional instrumentation plugin (plain JS, no type declarations)
  const sourceTagsModule = await import('./.vite-source-tags.js').catch(() => null);
  if (sourceTagsModule && typeof sourceTagsModule.sourceTags === 'function') {
    plugins.push(sourceTagsModule.sourceTags());
  }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_']);
  const processEnvDefines: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value);
  }

  return {
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
    server: {
      allowedHosts: ['.monkeycode-ai.live'],
    },
  };
})
