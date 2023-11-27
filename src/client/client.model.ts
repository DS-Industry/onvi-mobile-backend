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

  private constructor(clientData: {
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
  }) {
    this.activatedDate = clientData.activatedDate;
    this.birthday = clientData.birthday;
    this.cards = clientData.cards;
    this.clientId = clientData.clientId;
    this.clientTypeId = clientData.clientTypeId;
    this.correctPhone = clientData.correctPhone;
    this.email = clientData.email;
    this.genderId = clientData.genderId;
    this.insDate = clientData.insDate;
    this.isActivated = clientData.isActivated;
    this.name = clientData.name;
    this.phone = clientData.phone;
    this.refreshToken = clientData.refreshToken;
    this.updDate = clientData.updDate;
  }

  public static create(clientData: {
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
  }): Client {
    return new Client(clientData);
  }
}
