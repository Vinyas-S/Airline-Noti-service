const CrudRepository = require('./crud-repository')
const {Ticket} = require("../models")

class TicketRepository extends CrudRepository{
    constructor(){
       super(Ticket);
    }

    async getPendingTickets(){
        const response = Ticket.findAll({
            where:{
                status:'PENDING'
            }
        });
        return response;
    }
}
module.exports = TicketRepository