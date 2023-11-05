const fs = require('fs')
const path = require('path')

const p = path.join(__dirname, '..', 'data', 'products.json')

const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.error('Error reading file:', err)
            callback([])
        } else {
            try {
                const products = JSON.parse(fileContent)
                callback(products)
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError)
                callback([])
            }
        }
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.error('Error writing file:', err)
                }
            })
        })
    }

    static fetchAll(callback) {
        getProductsFromFile(callback)
    }
}
