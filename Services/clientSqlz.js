const Client = require("../model/Client");
const Country = require("../model/Country");

const createClient = async (client) => {
    try {
        const newClient = new Client.create({
            client_first_name: client.client_first_name,
            client_last_name: client.client_last_ame,
            client_username: client.client_username,
            client_password: client.client_password,
            client_email: client.client_email,
            client_mobile: client.client_mobile,
            client_address: client.client_address,
            client_gender: client.client_gender,
            client_dob: client.client_dob
        })
        return newClient.toJSON();
    }catch(err){
        console.error("Error creating client ", err)
    }
}

const getAllClients = async () => {
    try{
        const client = await Client.findAll({ include: [{ model: Country }] });
        return client;
    }catch(err){
        console.error('Error getting all clients ', err);
    }
}

const getClientById = async (id) => {
    try{
        const client = await Client.findByPk(id);
        if(client){
            return client;
        }
        
        return "User not found";
    }catch(err){
        console.error("Error getting the client ", err);
    }
}

const updateClient = async (client) => {
    try {

        const updateClient = new Client.update({
            client_first_name: client.client_first_name,
            client_last_name: client.client_last_ame,
            client_username: client.client_username,
            client_password: client.client_password,
            client_email: client.client_email,
            client_mobile: client.client_mobile,
            client_address: client.client_address,
            client_gender: client.client_gender,
            client_dob: client.client_dob
        }, { where: {client_id: client.client_id } });
        return updateClient;

    }catch(err){
        console.error("Error updating client ", err)
    }
}

const deleteClient = async (id) => {
    try {
        const client = await findByPk(id);
        if(!client){
            return "Client not found. Could'nt delete"
        }

        const deletedClient = await Client.destroy();
        return deletedClient.toJSON();
    }catch(err){
        console.error("Error deleting client ", err);
    }
}

module.exports = {
    createClient,
    getAllClients,
    getClientById,
    updateClient,
    deleteClient,
}

