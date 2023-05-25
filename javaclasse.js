public class TesteProduto {
    public static void main(String[] args) {
        Fornecedor fornecedor1 = new Fornecedor("123456789", "99999999", "Fornecedor 1");
        Fornecedor fornecedor2 = new Fornecedor("987654321", "88888888", "Fornecedor 2");

        Produto produto1 = new Produto(1, "Produto 1", 10.0f, fornecedor1);
        Produto produto2 = new Produto(2, "Produto 2", 20.0f, fornecedor2);
        Produto produto3 = new Produto(3, "Produto 3", 30.0f, fornecedor1);

        System.out.println("Produto 1: " + produto1.getNome() + ", Valor: " + produto1.getValor() + ", Fornecedor: " + produto1.getFornecedor().getNome());
        System.out.println("Produto 2: " + produto2.getNome() + ", Valor: " + produto2.getValor() + ", Fornecedor: " + produto2.getFornecedor().getNome());
        System.out.println("Produto 3: " + produto3.getNome() + ", Valor: " + produto3.getValor() + ", Fornecedor: " + produto3.getFornecedor().getNome());
    }
}
