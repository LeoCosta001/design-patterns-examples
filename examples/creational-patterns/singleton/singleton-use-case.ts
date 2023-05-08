// A classe Configuration é um exemplo de implementação do padrão Singleton.
class Configuration {
  // Propriedade estática privada para armazenar a instância única de Configuration.
  private static _instance: Configuration;

  // Atributos privados para armazenar as configurações (tema, idioma e volume).
  private _theme: string;
  private _language: string;
  private _volume: number;

  // Construtor privado para evitar a criação de instâncias fora desta classe.
  private constructor() {

    // Inicializa os atributos com valores padrão.
    this._theme = 'light';
    this._language = 'en';
    this._volume = 50;
  }

  // Getters e setters para acessar e modificar os atributos de configuração.
  public static getInstance(): Configuration {
    // Se a instância ainda não foi criada, cria e armazena em _instance.
    if (!Configuration._instance) {
      Configuration._instance = new Configuration();
    }

    // Retorna a instância única.
    return Configuration._instance;
  }

  // Getters e setters para acessar e modificar os atributos de configuração.
  public get theme(): string {
    return this._theme;
  }

  public set theme(value: string) {
    this._theme = value;
  }

  public get language(): string {
    return this._language;
  }

  public set language(value: string) {
    this._language = value;
  }

  public get volume(): number {
    return this._volume;
  }

  public set volume(value: number) {
    this._volume = value;
  }
}

// Exemplo de uso da classe Configuration e do padrão Singleton.
const config = Configuration.getInstance();

console.log('Tema atual:', config.theme); // Saída: "Tema atual: light"
config.theme = 'dark';
console.log('Tema atualizado:', config.theme); // Saída: "Tema atualizado: dark"

console.log('Idioma atual:', config.language); // Saída: "Idioma atual: en"
config.language = 'pt';
console.log('Idioma atualizado:', config.language); // Saída: "Idioma atualizado: pt"

console.log('Volume atual:', config.volume); // Saída: "Volume atual: 50"
config.volume = 75;
console.log('Volume atualizado:', config.volume); // Saída: "Volume atualizado: 75"
