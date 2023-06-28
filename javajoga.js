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
public class Goleiro extends JogadorFutebol {
    private int golsSofridos;

    public Goleiro(String nome, int idade, int golsMarcados, int golsSofridos) {
        super(nome, idade, golsMarcados, 0);
        this.golsSofridos = golsSofridos;
    }

    public int getGolsSofridos() {
        return golsSofridos;
    }

    public void setGolsSofridos(int golsSofridos) {
        this.golsSofridos = golsSofridos;
    }

    @Override
    public double calculaRendimento() {
        if (getJogosJogados() == 0) {
            return 0.0;
        }
        return (double) getGolsMarcados() / (getJogosJogados() + golsSofridos);
    }
}
public class ClubeFutebol {
    private JogadorFutebol[] jogadores;

    public ClubeFutebol() {
        this.jogadores = new JogadorFutebol[30];
    }

    public void incluirJogador(JogadorFutebol jogador) {
        for (int i = 0; i < jogadores.length; i++) {
            if (jogadores[i] == null) {
                jogadores[i] = jogador;
                break;
            }
        }
    }

    public JogadorFutebol buscarJogadorPorNome(String nome) {
        for (JogadorFutebol jogador : jogadores) {
            if (jogador != null && jogador.getNome().equals(nome)) {
                return jogador;
            }
        }
        return null;
    }

    public Goleiro buscarGoleiroMelhorRendimento() {
        Goleiro melhorRendimento = null;
        double maxRendimento = 0.0;

        for (JogadorFutebol jogador : jogadores) {
            if (jogador instanceof Goleiro) {
                Goleiro goleiro = (Goleiro) jogador;
                double rendimento = goleiro.calculaRendimento();
                if (rendimento > maxRendimento) {
                    maxRendimento = rendimento;
                    melhorRendimento = goleiro;
                }
            }
        }

        return melhorRendimento;
    }
}
