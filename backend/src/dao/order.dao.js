import { Order } from "../models/order.model.js";
 
export class OrderDAO {
  create(data) {
    return Order.create(data);
  }
 
  getById(id) {
    return Order.findById(id).populate("items.product").populate("user", "first_name last_name email");
  }
 
  getByUserId(userId) {
    return Order.find({ user: userId }).sort({ createdAt: -1 });
  }
 
  getAll() {
    return Order.find()
      .populate("user", "first_name last_name email")
      .sort({ createdAt: -1 });
  }
 
  updateStatus(id, status) {
    return Order.findByIdAndUpdate(id, { status }, { new: true });
  }
 
  updatePayment(id, payment_id, status) {
    return Order.findByIdAndUpdate(id, { payment_id, status }, { new: true });
  }
}