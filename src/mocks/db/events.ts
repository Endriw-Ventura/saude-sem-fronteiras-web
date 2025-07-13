import { users } from "./users";

export const events = [
  {
    id: 1,
    patientId: 1,
    doctorId: 3,
    moment: "2025-07-20T09:00:00",
  },
  {
    id: 2,
    patientId: 2,
    doctorId: 3,
    moment: "2025-07-20T10:00:00",
  },
];

export const populatedEvents = events.map((event) => {
  const patient = users.find((user) => user.id === event.patientId);
  const doctor = users.find((user) => user.id === event.doctorId);

  return {
    ...event,
    patient,
    doctor,
  };
});
