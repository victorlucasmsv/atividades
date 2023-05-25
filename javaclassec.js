import java.util.ArrayList;

public class ConjuntoProdutos {
    private ArrayList<Produto> produtos;

    public ConjuntoProdutos() {
        produtos = new ArrayList<>();
    }

    public void inserirProduto(Produto produto) {
        if (!produtos.contains(produto)) {
            produtos.add(produto);
            System.out.println("Produto adicionado com sucesso.");
        } else {
            System.out.println("Produto já existe no conjunto.");
        }
    }

    public void removerProduto(int codigo) {
        for (int i = 0; i < produtos.size(); i++) {
            if (produtos.get(i).getCodigo() == codigo) {
                produtos.remove(i);
                System.out.println("Produto removido com sucesso.");
                return;
            }
        }
        System.out.println("Produto não encontrado no conjunto.");
    }

    public void atualizarPreco(int codigo, float percentual) {
        for (Produto produto : produtos) {
            if (produto.getCodigo() == codigo) {
                produto.atualizarPreco(percentual);
                System.out.println("Preço atualizado com sucesso.");
                return;
            }
        }
        System.out.println("Produto não encontrado no conjunto.");
    }

    public void mostrarProdutos() {
        if (produtos.isEmpty()) {
            System.out.println("Nenhum produto cadastrado no conjunto.");
        } else {
            System.out.println("Produtos no conjunto:");
            for (Produto produto : produtos) {
                System.out.println("Código: " + produto.getCodigo() +
                                   ", Nome: " + produto.getNome() +
                                   ", Valor: " + produto.getValor() +
                                   ", Fornecedor: " + produto.getFornecedor().getNome());
            }
        }
    }
}
