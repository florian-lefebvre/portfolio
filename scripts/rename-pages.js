import fsp from 'fs/promises'
import path from 'path'

async function main() {
    const __dirname = path.resolve()
    const oldPath = path.join(__dirname, './src/pages/fr/projects')
    const newPath = path.join(__dirname, './src/pages/fr/projets')
    try {
        await fsp.rename(oldPath, newPath)
    } catch (e) {
        console.warn('No folder to rename.')
    }
}

main()
