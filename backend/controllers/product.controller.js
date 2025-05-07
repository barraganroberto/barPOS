const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
};

const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(product);
};

const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json(product);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};