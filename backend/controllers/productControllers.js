import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js";

//@desc Fetch all product
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products)
});

//@desc Fetch all product
//@route GET /api/products/:id
//@access Public
const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        return res.json(product);
    } else {
        res.status(404)
        throw new Error('Product not found')

    }
})

//@desc Create a product
//@route POST /api/products
//@access private/admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        rating: 0,
        // category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    })

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

//@desc Update a product
//@route GET /api/products/:id
//@access private/admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, countInStock} = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.countInStock = countInStock;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404)
        throw new Error('Resource not found!');
    }


});


export {getProducts, getProductsById, createProduct, updateProduct}