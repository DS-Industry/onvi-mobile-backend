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

  private constructor(
    amount: any,
    capture: boolean,
    description: string,
    paymentToken: string,
  ) {
    this.amount = amount;
    this.capture = capture;
    this.description = description;
    this.paymentToken = paymentToken;
  }

  public static create(paymentData: IPayProps): Payment {
    return new Payment(
      paymentData.amount,
      paymentData.capture,
      paymentData.description,
      paymentData.paymentToken,
    );
  }
}
