import fsp from 'fs/promises'
import path from 'path'

async function main() {
    async function rename(oldPath, newPath) {
        try {
            await fsp.access(oldPath)
        } catch (e) {
            console.warn(`Can't rename ${oldPath}`)
            return
        }
        await fsp.rename(oldPath, newPath)
    }
    const __dirname = path.resolve()
    for (const [o, n] of [
        [
            path.join(__dirname, './src/pages/fr/projects'),
            path.join(__dirname, './src/pages/fr/projets'),
        ],
        [
            path.join(__dirname, './src/pages/fr/legal/legal-notices.astro'),
            path.join(__dirname, './src/pages/fr/legal/mentions-legales.astro'),
        ],
        [
            path.join(__dirname, './src/pages/fr/legal/privacy-policy.astro'),
            path.join(
                __dirname,
                './src/pages/fr/legal/politique-de-confidentialite.astro'
            ),
        ],
    ]) {
        await rename(o, n)
    }
}

main()
