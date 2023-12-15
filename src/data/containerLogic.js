const fs = require ('fs');
const path = require ('path');

const loadProducts = () => {
    const productsFilePath = path.join (__dirname, './productsDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
    return products;
}

const storeProducts = (products) => {
    const usersFilePath = path.join (__dirname, './productsDataBase.json');
    fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
}



module.exports = {
    loadProducts,
    storeProducts
}