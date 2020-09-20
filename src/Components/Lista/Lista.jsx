import React, { useState } from 'react';
import Produto from '../Produto/Produto';

export default () => {

    const [listaProdutos, setListaProdutos] = useState([
        { id: 1, nome: 'Caneta' },
        { id: 2, nome: 'Caderno' },
        { id: 3, nome: 'Lapis'}
    ]);

    const ProdutoDeleteHandler = (id) => {
        console.log('excluir id:' + id)

        //Busca o index pelo id:
        const produtoIndex = listaProdutos.findIndex(p => p.id === id);

        //Copiando o state lista produtos para uma variavel temporaria
        let listaProdutosTemp = [...listaProdutos]; //Essa sintaxe [...] remove a passagem por referencia. criando uma nova variavel. Se nao colocar funciona como um ponteiro.
        console.log(listaProdutosTemp);

        listaProdutosTemp.splice(produtoIndex, 1);
        console.log(listaProdutosTemp);

        setListaProdutos(listaProdutosTemp);
        console.log(listaProdutos);

    }

    return (
        <div>
            {listaProdutos.map((produto, index) => {
                return <Produto key={produto.id} nome={produto.nome} deleteClickEvent={() => ProdutoDeleteHandler(produto.id)}></Produto>
            })}
        </div>
    );
}