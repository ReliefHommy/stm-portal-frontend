import en from "./dictionaries/en";
import sv from "./dictionaries/sv";
import th from "./dictionaries/th";

export type Locale = "en" | "sv" | "th";

const dictionaries = {
  en,
  sv,
  th,
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
