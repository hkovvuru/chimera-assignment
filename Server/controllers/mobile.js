import  MobileInfo from '../models/mobileInfo.js';

export const getMobile = async (req, res) => {
    try {
        const mobiles = await MobileInfo.find();
        res.status(200).json(mobiles);
    } catch (error) {
        res.status(404).json({ message : error.message});
    }
} 

export const addMobile = async (req, res) => {
    const mobile = req.body;
    const newMobile = await new MobileInfo(mobile);
    try {
        await newMobile.save();
        res.status(201).json(newMobile);
    } catch (error) {
        res.status(409).json({ message : error.message });
    }
} 

