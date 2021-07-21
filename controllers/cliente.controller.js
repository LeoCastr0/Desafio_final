import ClienteService from "../services/cliente.service.js";

async function createClient(req, res, next) {
    try {
        let client = req.body;
        if (!client.nome || !client.email || !client.senha || !client.telefone || !client.endereco) {
            throw new Error("Nome, email, senha, telefone, endereço dever ser preenchidos");
        }
        client = await ClienteService.createClient(client);
        res.send(client);
        global.logger.info(`POST /cliente - ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    };
};


export default {
    createClient
}