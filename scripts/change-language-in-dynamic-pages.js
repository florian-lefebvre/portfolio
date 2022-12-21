import fsp from 'fs/promises'
import path from 'path'

async function main() {
    const __dirname = path.resolve()
    async function fix(filePath) {
        let data = await fsp.readFile(filePath, { encoding: 'utf-8' })
        data = data.replaceAll(
            'getStaticPaths() {',
            "getStaticPaths() {changeLanguage('fr')"
        )
        await fsp.writeFile(filePath, data, { encoding: 'utf-8' })
    }
    for (const filePath of ['projets/[slug]', 'blog/[slug]']) {
        await fix(path.join(__dirname, `./src/pages/fr/${filePath}.astro`))
    }
}

main()
