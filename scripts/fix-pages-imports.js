import fsp from 'fs/promises'
import path from 'path'

async function main() {
    const __dirname = path.resolve()
    const filePath = path.join(__dirname, './src/pages/fr/projets/[slug].astro')
    let data = await fsp.readFile(filePath, { encoding: 'utf-8' })
    data = data.replaceAll('../../', '../../../')
    await fsp.writeFile(filePath, data, { encoding: 'utf-8' })
}

main()
