export const website =
  /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]{2,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
export const link =
  /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]{2,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)+$/
export const double = /^\d+(\.\d{1,2})?$/

export default {
  website,
  double
}
