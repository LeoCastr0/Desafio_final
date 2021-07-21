import ClienteRepository from "../repositories/cliente.repository.js";

async function createClient(cliente) {
    return await ClienteRepository.insertClient(cliente);
};

export default {
    createClient
}