import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  format: ["esm"], // ou 'cjs' se você precisar de CommonJS
  outDir: "dist",
  target: "es6",
  sourcemap: false, // Desativa a geração de arquivos de mapa de origem
  clean: true,
  outExtension: () => ({ js: ".js" }), // Define a extensão de saída como .js
});
