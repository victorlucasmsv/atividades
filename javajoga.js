public class JogadorFutebol {
    private String nome;
    private int idade;
    private int golsMarcados;
    private int jogosJogados;

    public JogadorFutebol(String nome, int idade, int golsMarcados, int jogosJogados) {
        this.nome = nome;
        this.idade = idade;
        this.golsMarcados = golsMarcados;
        this.jogosJogados = jogosJogados;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getGolsMarcados() {
        return golsMarcados;
    }

    public void setGolsMarcados(int golsMarcados) {
        this.golsMarcados = golsMarcados;
    }

    public int getJogosJogados() {
        return jogosJogados;
    }

    public void setJogosJogados(int jogosJogados) {
        this.jogosJogados = jogosJogados;
    }

    public double calculaRendimento() {
        if (jogosJogados == 0) {
            return 0.0;
        }
        return (double) golsMarcados / jogosJogados;
    }
}
