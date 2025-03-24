const { productModel } = require("../models/products.model");
const { userModel } = require("../models/user.model");


const createProduct = async (req, res) => {
    const { name, desc, image, category, price } = req.body;
    const userId = req.user;
    // console.log(req.user);

    try {
        const product = new productModel({
            name,
            desc,
            image,
            category,
            price,
            createdBy: userId
        });

        let productData = await product.save();
        console.log(productData)

        let data = await userModel.findByIdAndUpdate(userId, { $push: { products: product._id } });
        console.log(data)

        res.status(200).send({ message: "Data created successfully", data: product })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const page = req.query.page || 1;
        console.log(page)
        const limit = 10;
        const skip = (page - 1) * limit;

        // const products = await productModel.find().populate("createBy", "name email").skip(skip).limit(limit);
        const products = await productModel.find().skip(skip).limit(limit);

        const total = await productModel.countDocuments();

        res.status(200).send({
            total,
            products,
            page,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getProducts, createProduct
};
