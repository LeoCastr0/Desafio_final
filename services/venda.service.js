import VendaRepository from "../repositories/venda.repository.js"
import ClienteRepository from "../repositories/cliente.repository.js"
import LivroRepository from "../repositories/livro.repository.js"

async function createVenda(venda) {
    let error = ""
    if (!(await ClienteRepository.getClient(venda.clienteId))) {
        error = "O ClienteId informado não existe \n"
    }
    const livro = await LivroRepository.getLivro(venda.livroId)
    if (!livro) {
        error += "O livroId informado não existe"
    }
    if (error) {
        throw new Error(error)
    }

    if (livro.estoque > 0) {
        venda = await VendaRepository.insertSale(venda)
        livro.estoque--
        await LivroRepository.updateLivro(livro)
        return venda
    } else {
        throw new Error("O Livro informado não possui estoque.")
    }
}

export default {
    createVenda,
}
