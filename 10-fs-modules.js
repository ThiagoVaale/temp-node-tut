const { readFileSync, writeFileSync, read } = require("fs")

const firstFile = readFileSync('./content/first.txt', 'utf-8')
const secondFile = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt',
    {flag: "a"} //Adjuntar el archivo si es nuevamente creado.
)

