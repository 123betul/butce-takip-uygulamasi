import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // veya kullandığın mevcut react plugini

export default defineConfig({
  plugins: [react()],
  base: '/butce-takip-uygulamasi/', // <-- BU SATIRI TAM OLARAK BÖYLE EKLE
})
