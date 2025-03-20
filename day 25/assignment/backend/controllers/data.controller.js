const productData = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 10.99,
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 5.99,
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 7.99,
    }

]

export const getProductData = (req,res)=> {
    res.json(productData);
}