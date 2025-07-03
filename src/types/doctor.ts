export interface Doctor {
  name: string;
  surname: string;
  crm: string;
  password: string;
  email: string;
  initialHour: string;
  finalHour: string;
  specialtyId: number;
  price: number;
  WeekdaysDTO: {
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
  };
}

export interface SimpleDoctor {
  id: number;
  name: string;
  surname: string;
  email: string;
  price: number;
}

export const defaultDoctor: Doctor = {
  name: "",
  surname: "",
  crm: "",
  password: "",
  email: "",
  initialHour: "",
  finalHour: "",
  specialtyId: 0,
  price: 0,
  WeekdaysDTO: {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  },
};
