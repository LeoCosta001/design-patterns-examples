// (Target) PaymentProcessor é a interface que o cliente espera usar.
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// (Adaptee) ThirdPartyPaymentSystem é uma classe existente com uma interface incompatível.
class ThirdPartyPaymentSystem {
  makePayment(userAuthToken: string, payment: number): void {
    // Lógica para processar pagamento
    console.log(
      `Pagamento processado de $${payment} através de sistema de pagamento de terceiros.`,
    );
  }
}

// (Adapter) ThirdPartyPaymentAdapter é o adaptador que implementa a interface PaymentProcessor e utiliza o ThirdPartyPaymentSystem (Adaptee).
class ThirdPartyPaymentAdapter implements PaymentProcessor {
  private _thirdPartyPaymentSystem: ThirdPartyPaymentSystem;
  private _userAuthToken: string;

  constructor(
    thirdPartyPaymentSystem: ThirdPartyPaymentSystem,
    userAuthToken: string,
  ) {
    this._thirdPartyPaymentSystem = thirdPartyPaymentSystem;
    this._userAuthToken = userAuthToken;
  }

  processPayment(amount: number): void {
    this._thirdPartyPaymentSystem.makePayment(this._userAuthToken, amount);
  }
}

/***************
 * CLIENT CODE *
 ***************/

// O código do cliente quer usar um objeto que segue a interface PaymentProcessor.
function clientCode(paymentProcessor: PaymentProcessor, amount: number): void {
  paymentProcessor.processPayment(amount);
}

// Instanciando o ThirdPartyPaymentSystem (Adaptee)
const thirdPartyPaymentSystem = new ThirdPartyPaymentSystem();

// Instanciando o Adapter com a instância de ThirdPartyPaymentSystem
const paymentAdapter = new ThirdPartyPaymentAdapter(
  thirdPartyPaymentSystem,
  'userAuthToken123',
);

// O cliente pode usar o ThirdPartyPaymentAdapter para processar pagamentos através do ThirdPartyPaymentSystem.
clientCode(paymentAdapter, 100); // Saída: "Pagamento processado de $100 através de sistema de pagamento de terceiros."

export {};
