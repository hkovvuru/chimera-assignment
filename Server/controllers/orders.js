import OrderedItems from '../models/orderedItems.js';

export const orders = async (req, res) => {
    const order = req.body;
    const orders = await new OrderedItems(order);
    try{
        await orders.save();
        res.status(201).json(orderedItems);
    }catch(error) {
        res.status(404).json({ message : error.message});
    };
}