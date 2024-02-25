import { useRouter } from "next/router";
import dictionary from "../dictionary.json";

export type Locale = keyof typeof dictionary;
export type Text = keyof (typeof dictionary)[Locale];

export default function useTranslate(l?: Locale) {
  const { locale } = useRouter();
  return (text: Text) =>
    l ? dictionary[l][text] : dictionary[locale as Locale][text];
}
