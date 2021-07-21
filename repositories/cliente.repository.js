import Clientes from "../models/cliente.model.js";

async function insertClient(cliente) {
    try {
        return await Clientes.create(cliente);
    } catch (err) {
        throw err;
    };
};

export default {
    insertClient
}