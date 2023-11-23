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

export class Card {
  constructor() {}
}
