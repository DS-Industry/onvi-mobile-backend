interface IPayProps {
  paymentToken: string;
  amount: any; //need to change to custom type
  capture: boolean;
  description: string;
}

export class Payment {
  constructor() {}
}
