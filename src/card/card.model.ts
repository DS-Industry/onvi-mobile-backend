interface ICardProps {
  cardId?: number;
  balance: number;
  isLocked?: number;
  dateBegin: Date;
  dateEnd?: Date;
  clientId?: number;
  cardTypeId: any; //need to change to custom type
  devNomer: string;
  isDel?: number;
  cmnCity?: number;
  realBalance: number;
  airBalance: number;
  nomer: string;
  tag?: string;
}

export class Card implements ICardProps {
  airBalance: number;
  balance: number;
  cardId: number;
  cardTypeId: any;
  clientId: number;
  cmnCity: number;
  dateBegin: Date;
  dateEnd: Date;
  devNomer: string;
  isDel: number;
  isLocked: number;
  nomer: string;
  realBalance: number;
  tag: string;

  private constructor(
    airBalance: number,
    balance: number,
    cardId: number,
    cardTypeId: any,
    clientId: number,
    cmnCity: number,
    dateBegin: Date,
    dateEnd: Date,
    devNomer: string,
    isDel: number,
    isLocked: number,
    nomer: string,
    realBalance: number,
    tag: string,
  ) {
    this.airBalance = airBalance;
    this.balance = balance;
    this.cardId = cardId;
    this.cardTypeId = cardTypeId;
    this.clientId = clientId;
    this.cmnCity = cmnCity;
    this.dateBegin = dateBegin;
    this.dateEnd = dateEnd;
    this.devNomer = devNomer;
    this.isDel = isDel;
    this.isLocked = isLocked;
    this.nomer = nomer;
    this.realBalance = realBalance;
    this.tag = tag;
  }

  public static create(cardData: ICardProps): Card {
    return new Card(
      cardData.airBalance,
      cardData.balance,
      cardData.cardId,
      cardData.cardTypeId,
      cardData.clientId,
      cardData.cmnCity,
      cardData.dateBegin,
      cardData.dateEnd,
      cardData.devNomer,
      cardData.isDel,
      cardData.isLocked,
      cardData.nomer,
      cardData.realBalance,
      cardData.tag,
    );
  }

  public static toEntity(card: ICardProps): Card {
    return this.create(card);
  }
}
