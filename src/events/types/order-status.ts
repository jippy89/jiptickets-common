/**
 * Enum for Order Status.
 * @readonly
 * @enum {string}
 * @property {string} Created - When the order has been created but the ticket it is trying to reserve has not been reserved.
 */
export enum OrderStatus {
  /** When the order has been created but the ticket it is trying to reserve has not been reserved. */
  Created = 'created',
  /** The ticket order is trying to reserve has already been reserved, or when the user has cancelled the order, or order has expired.  */
  // This can be separated into three if you want to for analytics purposes. But for the sake of following the tutor I keep it this way.
  Cancelled = 'cancelled',
  /** The order has successfully reserved the ticket  */
  AwaitingPayment = 'awaiting:payment',
  /** The order has reserved the ticket and the user has provided payment successfully  */
  Complete = 'complete'
}