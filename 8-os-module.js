const os = require("os")

console.log(`La computadora estuvo inactiva por: ${os.uptime()} seconds`)

//usamos el modulo OS para obtener informacion del sistema operativo de donde se
//corre el script
const currentOS = {
    name: os.type(), //Tipo de sistema operativo
    release: os.release(), //version del sistema operativo
    totalMem: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB', //memoria total del sistema (en bytes)
    freeMem: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB', //memoria libre disponible (en bytes)
}

console.log(currentOS)