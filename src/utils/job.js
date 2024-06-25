const cron = require('node-cron');
const service = require('../services/emailService');
const sender = require('../config/emailConfig');



function setUpJobs() {

    cron.schedule('*/10 * * * * *' , async () => {
        const response = await service.fetchPendingEmails();

        response.forEach((email) => {
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            } , async (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await service.updateTicket(email.id, {status: "SUCCESS"});
                }
                });
        });


    });

}

module.exports = {
    setUpJobs
}