import { salon } from "@/data/salon";

export const dayNamesByIndex = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
] as const;

const SLOT_MINUTES = 30;

function parseTimeToMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes: number) {
  const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${mins}`;
}

export function getDayName(dateIso: string) {
  const [year, month, day] = dateIso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return dayNamesByIndex[date.getDay()];
}

export function formatDateLabel(dateIso: string) {
  if (!dateIso) return "";

  const [year, month, day] = dateIso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const label = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function getSlotsForDate(dateIso: string): string[] {
  if (!dateIso) return [];

  const dayName = getDayName(dateIso);
  const hoursEntry = salon.hours.find((item) => item.day === dayName);

  if (!hoursEntry || hoursEntry.time === "Fermé") return [];

  const [openLabel, closeLabel] = hoursEntry.time.split("–");
  const open = parseTimeToMinutes(openLabel);
  const close = parseTimeToMinutes(closeLabel);

  const slots: string[] = [];
  for (
    let minutes = open;
    minutes + SLOT_MINUTES <= close;
    minutes += SLOT_MINUTES
  ) {
    slots.push(minutesToTime(minutes));
  }

  return slots;
}
