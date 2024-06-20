// A classe Singleton é um exemplo de implementação do padrão Singleton.
class Singleton {
  // Propriedade estática privada para armazenar a instância única
  // OBS: Pode ser armazenada qualquer classe, inclusive a própria classe Singleton.
  private static _instance: Singleton;

  // Construtor privado para evitar a criação de novas instâncias fora da classe.
  private constructor() {
    // Inicialize seus atributos, se houver.
  }

  // Método estático para obter a instância única.
  public static getInstance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }

  // Métodos públicos da classe Singleton.
  public someMethod(): void {
    console.log('Este é um método público da classe Singleton.');
  }
}

/***************
 * CLIENT CODE *
 ***************/

// Testando o Singleton
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.someMethod(); // Saída: "Este é um método público da classe Singleton."

// Verificando se as instâncias são iguais.
console.log(singleton1 === singleton2); // Saída: true

export {};
