const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticketRepository');
const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

async function createNotification(data) {
    try {
        const ticket = await repo.createATicket(data);
        return ticket;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    sendBasicEmail,
    createNotification
}