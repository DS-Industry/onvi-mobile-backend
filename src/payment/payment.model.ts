interface IPayProps {
  paymentToken: string;
  amount: any; //need to change to custom type
  capture: boolean;
  description: string;
}

export class Payment implements IPayProps {
  amount: any;
  capture: boolean;
  description: string;
  paymentToken: string;

  private constructor(paymentData: {
    amount: any;
    capture: boolean;
    description: string;
    paymentToken: string;
  }) {
    this.amount = paymentData.amount;
    this.capture = paymentData.capture;
    this.description = paymentData.description;
    this.paymentToken = paymentData.paymentToken;
  }

  public static create(paymentData: {
    amount: any;
    capture: boolean;
    description: string;
    paymentToken: string;
  }): Payment {
    const payment = new Payment(paymentData);
    return payment;
  }
}
