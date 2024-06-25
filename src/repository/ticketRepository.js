const {NotificationTicket} = require('../models/index');

class TicketRepository {

    async createATicket(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = TicketRepository;