interface IOrderProps {
  id?: number;
  card?: any; //need to change to custom type
  transactionId?: string;
  createdAt: Date;
  sum: number;
  promoCodeId?: number;
  discountAmount?: number;
  orderStatus: any; //need to change to custom type
  rewardPointsUsed?: number;
  carWashId: number;
  bayNumber: number;
  excecutionError?: string;
}

export class Order {
  constructor() {}
}
