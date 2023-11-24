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

export class Order implements IOrderProps {
  bayNumber: number;
  carWashId: number;
  card: any;
  createdAt: Date;
  discountAmount: number;
  excecutionError: string;
  id: number;
  orderStatus: any;
  promoCodeId: number;
  rewardPointsUsed: number;
  sum: number;
  transactionId: string;

  private constructor(orderData: {
    bayNumber: number;
    carWashId: number;
    card: any;
    createdAt: Date;
    discountAmount: number;
    excecutionError: string;
    id: number;
    orderStatus: any;
    promoCodeId: number;
    rewardPointsUsed: number;
    sum: number;
    transactionId: string;
  }) {
    this.bayNumber = orderData.bayNumber;
    this.carWashId = orderData.carWashId;
    this.card = orderData.card;
    this.createdAt = orderData.createdAt;
    this.discountAmount = orderData.discountAmount;
    this.excecutionError = orderData.excecutionError;
    this.id = orderData.id;
    this.orderStatus = orderData.orderStatus;
    this.promoCodeId = orderData.promoCodeId;
    this.rewardPointsUsed = orderData.rewardPointsUsed;
    this.sum = orderData.sum;
    this.transactionId = orderData.transactionId;
  }

  public static create(orderData: {
    bayNumber: number;
    carWashId: number;
    card: any;
    createdAt: Date;
    discountAmount: number;
    excecutionError: string;
    id: number;
    orderStatus: any;
    promoCodeId: number;
    rewardPointsUsed: number;
    sum: number;
    transactionId: string;
  }): Order {
    const order = new Order(orderData);
    return order;
  }
}
