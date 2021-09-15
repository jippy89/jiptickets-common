import { Event } from "../Event";
import { Subjects } from "../subjects";
import { OrderStatus } from "../types/order-status";

// In case of choosing how the `data` should transfer
// it should be really up to you
// Do you want to:
// 1. Share the maximum amount of information as much as possible?
// Or 2. Share the minimum info?
// FYI, if in the future you the other services need a new info
// You can always go back here and update the 'data'.
export interface OrderCancelledEvent extends Event {
  subject: Subjects.OrderCancelled
  data: {
    id: string
    version: number
    ticket: {
      id: string
    }
  }
}