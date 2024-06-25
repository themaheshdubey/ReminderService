const service  = require('../services/emailService');

const create = async (req, res) => {
    try {
        const response = await service.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully registered an email reminder'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'unable to register an email reminder'
        });
    }
}

module.exports = {
    create
}