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


const fetchPendingEmails = async () => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}


const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    sendBasicEmail,
    createNotification,
    fetchPendingEmails,
    updateTicket
}