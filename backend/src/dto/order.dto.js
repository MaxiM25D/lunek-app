export class OrderDTO {
  constructor(order) {
    this.id         = order._id;
    this.user       = order.user;
    this.items      = order.items.map((i) => ({
      product:  i.product,
      title:    i.title,
      price:    i.price,
      quantity: i.quantity,
      subtotal: i.price * i.quantity
    }));
    this.shipping   = order.shipping;
    this.total      = order.total;
    this.status     = order.status;
    this.payment_id = order.payment_id;
    this.createdAt  = order.createdAt;
  }
}