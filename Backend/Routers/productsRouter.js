import express from 'express';
import productModel from '../Models/parentsModel.js';

const productsRouter= express.Router();


productsRouter.get('/', async (req, res)=>{
 const products = await productModel.find();
 res.send( products );

});
productsRouter.post('/create', async (req, res)=>{
            const createProduct = await productModel.create(req.body)
        if(createProduct){
            res.send("Product added successfuly!")
        }else{
            res.send("Product not adding due to ")

        }
    });
productsRouter.get('/slug/:slug', async (req, res) => {
    const products =await productModel.findOne({slug: req.params.slug})
    if(products){
        res.send(products)
    }else{
        res.status(404).send({message: 'Product not found'});
    }
});
productsRouter.get('/:id', async (req, res) => {
    const products =await productModel.findById(req.params.id)
    if(products){
        res.send(products)
    }else{
        res.status(404).send({message: 'Product not found or entered wrong info'});
    }
});


productsRouter.put('/edit/:id', async (req, res)=>{
    const edit = await productModel.findByIdAndUpdate(req.params._id);
    if(edit){
        edit.name = req.body.name || edit.name;
        edit.slug = req.body.slug || edit.slug;
        edit.image = req.body.image || edit.image;
        edit.color = req.body.color || edit.color;
        edit.Fabric = req.body.Fabric || edit.Fabric;
        edit.price = req.body.price || edit.price;
        edit.brand = req.body.brand || edit.brand;
        edit.ratings = req.body.ratings || edit.ratings;
        edit.countInStock = req.body.countInStock || edit.countInStock;
        edit.category = req.body.category || edit.category;
        edit.note = req.body.note || edit.note;
        edit.mtrs1 = req.body.mtrs1 || edit.mtrs1;
        edit.mtrs2 = req.body.mtrs2 || edit.mtrs2;
        edit.mtrs3 = req.body.mtrs3 || edit.mtrs3;
        edit.mtrs4 = req.body.mtrs4 || edit.mtrs4;
        edit.mtrs5 = req.body.mtrs5 || edit.mtrs5;
        const updateproduct = await edit.save();
        res.send({
            name: updateproduct.name, 
        slug:  updateproduct.slug,
        image:  updateproduct.image,
        color:  updateproduct.color,
        Fabric:  updateproduct.Fabric,
        price: updateproduct.price,
        brand: updateproduct.brand,
        ratings: updateproduct.ratings,
        countInStock: updateproduct.countInStock,
        category: updateproduct.category,
        note:  updateproduct.note,
        mtrs1: updateproduct.mtrs1,
        mtrs2: updateproduct.mtrs2,
        mtrs3: updateproduct.mtrs3,
        mtrs4:  updateproduct.mtrs4,
        mtrs5: updateproduct.mtrs5,
    });
}else{
    res.status(404).send({message: 'product not found'})
}

})













export default productsRouter;