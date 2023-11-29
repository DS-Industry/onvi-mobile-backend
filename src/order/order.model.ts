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

  private constructor(
    bayNumber: number,
    carWashId: number,
    card: any,
    createdAt: Date,
    discountAmount: number,
    excecutionError: string,
    id: number,
    orderStatus: any,
    promoCodeId: number,
    rewardPointsUsed: number,
    sum: number,
    transactionId: string,
  ) {
    this.bayNumber = bayNumber;
    this.carWashId = carWashId;
    this.card = card;
    this.createdAt = createdAt;
    this.discountAmount = discountAmount;
    this.excecutionError = excecutionError;
    this.id = id;
    this.orderStatus = orderStatus;
    this.promoCodeId = promoCodeId;
    this.rewardPointsUsed = rewardPointsUsed;
    this.sum = sum;
    this.transactionId = transactionId;
  }

  public static create(orderData: IOrderProps): Order {
    return new Order(
      orderData.bayNumber,
      orderData.carWashId,
      orderData.card,
      orderData.createdAt,
      orderData.discountAmount,
      orderData.excecutionError,
      orderData.id,
      orderData.orderStatus,
      orderData.promoCodeId,
      orderData.rewardPointsUsed,
      orderData.sum,
      orderData.transactionId,
    );
  }
}
