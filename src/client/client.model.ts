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

export class Client {
  constructor() {}
}
