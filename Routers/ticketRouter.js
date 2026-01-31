import express from 'express'
import {
    createTicket,
    deleteTicket,
    getAllTickets,
    getTicketById,
    getTicketsByState,
    getUserTickets,
    updateTicketState
} from '../Controller/ticketControler.js';
import { adminMiddleware, reviewerMiddleware, authMiddleware } from '../Middleware/authMiddleware.js';



const ticketRoute = express.Router();


// GET Methods
ticketRoute.post("/all-tickets", adminMiddleware, getAllTickets)

ticketRoute.get("/getUserTickets", authMiddleware, getUserTickets);

ticketRoute.get("/:id", getTicketById);

ticketRoute.get("/by-state/:state", reviewerMiddleware, getTicketsByState);


// POST Methods
ticketRoute.post("/create", authMiddleware, createTicket);



// PUT Methods
ticketRoute.post("/update-state", reviewerMiddleware, updateTicketState);


// DELETE Methods
ticketRoute.delete("/delete-tickets/:id", reviewerMiddleware, deleteTicket);

export default ticketRoute;