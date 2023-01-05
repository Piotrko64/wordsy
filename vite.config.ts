import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
            },
            devOptions: {
                enabled: true,
            },
            manifest: {
                display: "standalone",
                background_color: "#19BC00",

                orientation: "portrait-primary",
                name: "Wordsy",
                short_name: "Wordsy",
                description: "Nauka angielskiego",
                theme_color: "#19BC00",
                icons: [
                    {
                        src: "assets/pwa/icons/android-launchericon-48-48.png",
                        sizes: "48x48",
                        type: "image/png",
                    },
                    {
                        src: "assets/pwa/icons/android-launchericon-72-72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "assets/pwa/icons/android-launchericon-96-96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "assets/pwa/icons/android-launchericon-192-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "assets/pwa/icons/android-launchericon-144-144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "assets/pwa/icons/android-launchericon-512-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
});
