import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Le plugin singlefile n'agit qu'au build : il produit un dist/index.html
// autonome (JS et CSS inclus) qui s'ouvre par double-clic, sans serveur.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
});
