const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Bienvendio a la pagina INICIAL.")
    } else if (req.url === "/about"){
        res.end("Bienvenido a tus DATOS.")
    } else{
        res.end(
            `<h1>Oops!</h1>
            <p>Esta pagina no existe</p>
            <a href="/">Volver al inicio</a>`
        )
    }
})

server.listen(5000)