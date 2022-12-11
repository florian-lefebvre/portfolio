module.exports = {
    tabWidth: 4,
    singleQuote: true,
    semi: false,
    plugins: [
        require.resolve('prettier-plugin-astro'),
        require('prettier-plugin-tailwindcss'),
    ],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
