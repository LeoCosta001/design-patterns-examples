// A classe MySingleton é um exemplo de implementação do padrão Singleton.
class MySingleton {
  // Propriedade estática privada para armazenar a instância única.
  private static _instance: MySingleton;

  // Construtor privado para evitar a criação de novas instâncias fora da classe.
  private constructor() {
    // Inicialize seus atributos, se houver.
  }

  // Método estático para obter a instância única.
  public static getInstance(): MySingleton {
    if (!MySingleton._instance) {
      MySingleton._instance = new MySingleton();
    }
    return MySingleton._instance;
  }

  // Métodos públicos da classe MySingleton.
  public someMethod(): void {
    console.log('Este é um método público da classe MySingleton.');
  }
}

// Testando o MySingleton
const singleton1 = MySingleton.getInstance();
const singleton2 = MySingleton.getInstance();

singleton1.someMethod(); // Saída: "Este é um método público da classe MySingleton."

// Verificando se as instâncias são iguais.
console.log(singleton1 === singleton2); // Saída: true
