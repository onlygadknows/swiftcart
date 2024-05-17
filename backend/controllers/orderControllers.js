import asyncHandler from "../middleware/asyncHandler.js"
import Order from "../models/orderModel.js";

//@desc Create new order
//@route POST /api/orders
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
    res.send('Add order items')
});

//@desc Get logged in user orders
//@route Get /api/orders/myorders
//@access Private
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('Get my orders')
});

//@desc Get order by ID
//@route Get /api/orders/myorders/:id
//@access Private
const getOrderbyId = asyncHandler(async (req, res) => {
    res.send('Get orders by ID')
});

//@desc Update order to paid
//@route Get /api/orders/:id/pay
//@access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('Update order to paid')
});

//@desc Update order to delivered
//@route Get /api/orders/:id/deliver
//@access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('Update order to delivered')
});

//@desc Get all orders
//@route Get /api/orders/
//@access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('get all orders')
});

export {
    addOrderItems,
    getMyOrders,
    getOrderbyId,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
};


