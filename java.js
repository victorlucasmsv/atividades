public class Pessoa {
    private String nome;
    private String dataNascimento;

    public Pessoa(String nome, String dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    @Override
    public String toString() {
        return "Nome: " + nome + "\nData de Nascimento: " + dataNascimento;
    }
}
public abstract class PessoaIMC extends Pessoa {
    protected double peso;
    protected double altura;

    public PessoaIMC(String nome, String dataNascimento, double peso, double altura) {
        super(nome, dataNascimento);
        this.peso = peso;
        this.altura = altura;
    }

    public double getPeso() {
        return peso;
    }

    public double getAltura() {
        return altura;
    }

    public double calculaIMC() {
        return peso / (altura * altura);
    }

    public abstract String resultIMC();

    @Override
    public String toString() {
        return super.toString() + "\nPeso: " + peso + "\nAltura: " + altura;
    }
}
public class Homem extends PessoaIMC {
    public Homem(String nome, String dataNascimento, double peso, double altura) {
        super(nome, dataNascimento, peso, altura);
    }

    public String resultIMC() {
        double imc = calculaIMC();
        if (imc < 20.7) {
            return "Abaixo do peso ideal";
        } else if (imc < 26.4) {
            return "Peso ideal";
        } else {
            return "Acima do peso ideal";
        }
    }
}

public class Mulher extends PessoaIMC {
    public Mulher(String nome, String dataNascimento, double peso, double altura) {
        super(nome, dataNascimento, peso, altura);
    }

    public String resultIMC() {
        double imc = calculaIMC();
        if (imc < 19) {
            return "Abaixo do peso ideal";
        } else if (imc < 25.8) {
            return "Peso ideal";
        } else {
            return "Acima do peso ideal";
        }
    }
}
import java.util.Scanner;

public class Programa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o tamanho do array: ");
        int tamanhoArray = scanner.nextInt();

        PessoaIMC[] pessoas = new PessoaIMC[tamanhoArray];

        for (int i = 0; i < tamanhoArray; i++) {
            System.out.print("Informe o tipo de objeto (H para Homem, M para Mulher): ");
            String tipo = scanner.next();

            System.out.print("Informe o nome: ");
            String nome = scanner.next();

            System.out.print("Informe a data de nascimento: ");
            String dataNascimento = scanner.next();

            System.out.print("Informe o peso: ");
            double peso = scanner.nextDouble();

            System.out.print("Informe a altura: ");
            double altura = scanner.nextDouble();

            if (tipo.equalsIgnoreCase("H")) {
                pessoas[i] = new Homem(nome, dataNascimento, peso, altura);
            } else if (tipo.equalsIgnoreCase("M")) {
                pessoas[i] = new Mulher(nome, dataNascimento, peso, altura);
            } else {
                System.out.println("Tipo inválido. Objeto não criado.");
            }
        }

        for (PessoaIMC pessoa : pessoas) {
            if (pessoa != null) {
                System.out.println(pessoa.toString());
                System.out.println("Resultado IMC: " + pessoa.resultIMC());
                System.out.println();
            }
        }

        scanner.close();
    }
}
