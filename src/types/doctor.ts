
export default interface Doctor {
  name: string;
  surname: string;
  crm: string;
  password: string;
  initialHour: string;
  finalHour: string;
  weekDays: string;
  specialty: Specialty;
  price: string;
}