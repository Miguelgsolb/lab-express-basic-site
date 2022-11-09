const express = require("express")
const app = express()
const hbs = require("hbs")

app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)
app.use(express.static(`public`))

require('./db/db-connection')

const product= require('./models/Product.model')

app.get('/', (req, res) => {
    res.render("index-page")
})
app.get('/products', (req, res) => {
    

    product
        .find()
        .sort({
            price:1
        })
        .then(allProductsFromDB => {
            console.log('allProductsFromDB')
            res.render('product-page', { products: allProductsFromDB  })
        })
        .catch(err => console.log(err))

})



app.listen(3000, () => console.log('servidor levantado en 3000'))