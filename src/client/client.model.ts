interface IClientProps {
  clientId?: number;
  name: string;
  email?: string;
  phone: string;
  correctPhone: string;
  birthday?: Date;
  insDate?: Date;
  updDate?: Date;
  clientTypeId: any; //need to change to custom type
  isActivated?: number;
  activatedDate?: Date;
  genderId?: any; //need to change to custom type
  refreshToken?: string;
  cards?: any; //need to change to custom type
}

export class Client implements IClientProps {
  activatedDate: Date;
  birthday: Date;
  cards: any;
  clientId: number;
  clientTypeId: any;
  correctPhone: string;
  email: string;
  genderId: any;
  insDate: Date;
  isActivated: number;
  name: string;
  phone: string;
  refreshToken: string;
  updDate: Date;

  private constructor(
    activatedDate: Date,
    birthday: Date,
    cards: any,
    clientId: number,
    clientTypeId: any,
    correctPhone: string,
    email: string,
    genderId: any,
    insDate: Date,
    isActivated: number,
    name: string,
    phone: string,
    refreshToken: string,
    updDate: Date,
  ) {
    this.activatedDate = activatedDate;
    this.birthday = birthday;
    this.cards = cards;
    this.clientId = clientId;
    this.clientTypeId = clientTypeId;
    this.correctPhone = correctPhone;
    this.email = email;
    this.genderId = genderId;
    this.insDate = insDate;
    this.isActivated = isActivated;
    this.name = name;
    this.phone = phone;
    this.refreshToken = refreshToken;
    this.updDate = updDate;
  }

  public static create(clientData: IClientProps): Client {
    return new Client(
      clientData.activatedDate,
      clientData.birthday,
      clientData.cards,
      clientData.clientId,
      clientData.clientTypeId,
      clientData.correctPhone,
      clientData.email,
      clientData.genderId,
      clientData.insDate,
      clientData.isActivated,
      clientData.name,
      clientData.phone,
      clientData.refreshToken,
      clientData.updDate,
    );
  }

  public static toEntity(client: IClientProps): Client {
    return this.create(client);
  }
}
