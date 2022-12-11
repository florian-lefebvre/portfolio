import fsp from 'fs/promises'
import path from 'path'

async function main() {
    const __dirname = path.resolve()
    await fsp.rm(path.join(__dirname, './src/pages/fr'), {
        recursive: true,
        force: true,
    })
}

main()
