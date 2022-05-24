import { Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/model/Ticket';
import { TicketRepository } from '../../domain/ports/TicketRepository';

/**
 * This is the output port, to store things in memory.
 */
@Injectable()
export class TicketInMemory implements TicketRepository {
  private readonly tickets: Ticket[] = [];

  create(ticket: Ticket): Ticket {
    this.tickets.push(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.tickets;
  }
}
