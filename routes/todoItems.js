const router = require('express').Router();
//import todo item
const todoItemsModel = require('../modles/todoItems');

//lets create our first route .. we will add Todo item to our database
router.post('/api/item',async (req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item : req.body.item
        })
        //save this item in database
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

//Lets create secont route - get data from database
router.get('/api/items', async (req,res) =>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})


//Lets update item
router.put('/api/item/:id', async (req,res)=>{
    try{
        //find the item by its id and update it
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated Successfully');
    }catch(err){
        res.json(err);
    }
})

//Let's Delete Item from database
router.delete('/api/item/:id' , async (req,res)=>{
    try{
//find item by id and delete it
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }catch(err){
        res.json(err);
    }
})


//export router
module.exports = router;