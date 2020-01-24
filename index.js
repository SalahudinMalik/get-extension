const path = require('path')
function getExtension(filePath){
    let mimetype = path.extname(filePath)
    mimetype = mimetype.split('/').pop()
    mimetype = mimetype.includes('+') ? mimetype.split('+').shift() : mimetype
    mimetype = mimetype.includes('?') ? mimetype.split('?').shift() : mimetype
    return mimetype
}

module.exports = getExtension
