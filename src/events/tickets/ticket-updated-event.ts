import { Subjects } from "../subjects";
import { Event } from '../Event'

export interface TicketUpdatedEvent extends Event {
  subject: Subjects.TicketUpdated
  data: {
    id: string,
    version: number
    title: string,
    price: number,
    userId: string,
    orderId?: string
  }
}