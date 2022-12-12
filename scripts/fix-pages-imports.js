import fsp from 'fs/promises'
import path from 'path'

async function main() {
    const __dirname = path.resolve()
    async function fix(filePath) {
        let data = await fsp.readFile(filePath, { encoding: 'utf-8' })
        data = data.replaceAll('../../', '../../../')
        await fsp.writeFile(filePath, data, { encoding: 'utf-8' })
    }
    for (const dirName of ['projets', 'blog']) {
        await fix(
            path.join(__dirname, `./src/pages/fr/${dirName}/[slug].astro`)
        )
    }
}

main()
