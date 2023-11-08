const { validationResult } = require("express-validator");
const { getAllClients,getClientById, createClient, updateClient, deleteClient } = require("../Services/clientSqlz")

const getAllClientsController = async (req,res) => {
    try{
        const clients = await getAllClients();
        res.satus(200).json(clients);
    }catch(err){
        res.status(500).json(err)
    }
}

const getClientByIdController = async (req, res) => {
    try{
        const client =  await getClientById();
        res.satus(200).json(client);
    }catch(err){
        res.status(500).json(err)
    }
}
const insertClientController = async(req, res) => {
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() })
        }

        const {client} = req.body;

        if(!client) {
           return res.status(400).json({ message: "User not found"});
        }

        const response = await createClient(client);
        res.status(200).json({response});
    }catch(err){
        res.status(500).json(err)
    }
}

const updateClientController = async (req, res) => {
    try{
        const error = validationResult(req);

        if(!error.isEmpty())
        {
            return res.status(400).json({ errors: error.array() })
        }
    
        const {client} = req.body;

        if(!client) {
            return res.status(400).json({ message: "User not found"});
        }

        const response = await updateClient(client);
        res.status(200).json({response});
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteClientController = async (req, res) => {
    try{
        const {client} = req.body;

        if(!client) {
            return res.status(400).json({ message: "User not found"});
        }
        const response = await deleteClient(client.client_id);
        res.status(200).json({response});
    }catch(err){
        res.satus(500).json(err)
    }
}

module.exports = {
    getAllClientsController,
    insertClientController,
    updateClientController,
    deleteClientController,
}