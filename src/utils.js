const fs = require('fs')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()

const readXml = (path, cb) => {
    fs.readFile(path, (err, data) => {
        if (!err) {
            parser.parseString(data, (err, result) => {
                console.log(`Read data from ${path} successful!`)
                cb(result)
            })
        } else {
            console.log('Could not read the XML file due to', err)
        }
    })
}

module.exports = readXml