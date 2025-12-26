'use client';

import { useMemo, useState } from "react";

type Direction = "en-ar" | "ar-en";

type Phrase = {
  english: string;
  arabic: string;
  transliteration: string;
  note: string;
};

const PHRASES: Phrase[] = [
  {
    english: "Do you understand Arabic?",
    arabic: "هل تفهم العربية؟",
    transliteration: "Hal tafhamu al-ʿarabiyya?",
    note: "A polite Modern Standard Arabic question—perfect conversation opener.",
  },
  {
    english: "Yes, I understand Arabic very well.",
    arabic: "نعم، أفهم العربية جيداً.",
    transliteration: "Naʿam, afhamu al-ʿarabiyya jayyidan.",
    note: "Emphasize “jayyidan” to convey confidence in your skills.",
  },
  {
    english: "A little, but I'm learning every day.",
    arabic: "قليلاً، لكنني أتعلم كل يوم.",
    transliteration: "Qalīlan, lakinnī ataʿallamu kulla yawm.",
    note: "Add a smile and you instantly sound encouraging and humble.",
  },
  {
    english: "Can you repeat that slowly?",
    arabic: "هل يمكنك أن تكرر ذلك ببطء؟",
    transliteration: "Hal yumkinuka an tukarrira dhālika bibuṭ’?",
    note: "Useful across dialects—showing care for clarity is always appreciated.",
  },
  {
    english: "What's the difference in the Levant?",
    arabic: "ما الفرق في الشام؟",
    transliteration: "Mā al-farq fī ash-Shām?",
    note: "Great when comparing dialects; “ash-Shām” references the Levant region.",
  },
  {
    english: "Welcome! Come in.",
    arabic: "أهلاً وسهلاً! تفضل.",
    transliteration: "Ahlan wa sahlan! Tafaḍḍal.",
    note: "Hospitality bundled in two warm expressions used across the Arab world.",
  },
  {
    english: "Would you like coffee or tea?",
    arabic: "هل تود القهوة أم الشاي؟",
    transliteration: "Hal tawaddu al-qahwa am ash-shāy?",
    note: "In the Gulf you might hear “gahwa” for the traditional cardamom coffee.",
  },
  {
    english: "Thank you, that's perfect.",
    arabic: "شكراً، هذا ممتاز.",
    transliteration: "Shukran, hādhā mumtāz.",
    note: "Pair with a nod; appreciation is central to Arabic etiquette.",
  },
];

const getPlaceholder = (direction: Direction) =>
  direction === "en-ar"
    ? "Type in English…"
    : "اكتب بالعربية أو بالكتابة اللاتينية…";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

export default function Translator() {
  const [direction, setDirection] = useState<Direction>("en-ar");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) {
      return PHRASES.slice(0, 5);
    }

    const normalizedQuery = normalize(query);

    return PHRASES.filter((phrase) => {
      if (direction === "en-ar") {
        return normalize(phrase.english).includes(normalizedQuery);
      }

      return (
        normalize(phrase.arabic).includes(normalizedQuery) ||
        normalize(phrase.transliteration).includes(normalizedQuery)
      );
    });
  }, [direction, query]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
            direction === "en-ar"
              ? "border-emerald-400 bg-emerald-500/90 text-white shadow-lg shadow-emerald-200"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-emerald-300 hover:text-emerald-600"
          }`}
          onClick={() => setDirection("en-ar")}
        >
          English → العربية
        </button>
        <button
          type="button"
          className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
            direction === "ar-en"
              ? "border-emerald-400 bg-emerald-500/90 text-white shadow-lg shadow-emerald-200"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-emerald-300 hover:text-emerald-600"
          }`}
          onClick={() => setDirection("ar-en")}
        >
          العربية → English
        </button>
      </div>

      <label className="flex flex-col gap-2 text-sm text-zinc-500">
        <span>Search the phrasebook</span>
        <input
          className="w-full rounded-2xl border border-zinc-200 bg-white/70 px-5 py-3 text-base text-zinc-700 shadow-inner shadow-zinc-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
          placeholder={getPlaceholder(direction)}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <div className="grid gap-4">
        {results.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-zinc-200 bg-white/50 px-5 py-6 text-center text-sm text-zinc-500">
            No match yet—try general words like “hello” or “شكراً”.
          </p>
        ) : (
          results.map((phrase) => (
            <article
              key={`${phrase.english}-${phrase.arabic}`}
              className="flex flex-col gap-3 rounded-2xl border border-transparent bg-emerald-50/60 px-5 py-5 transition hover:border-emerald-200 hover:bg-emerald-50"
            >
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-emerald-900">
                  {direction === "en-ar" ? phrase.english : phrase.arabic}
                </p>
                <p className="text-base text-emerald-600">
                  {direction === "en-ar" ? phrase.arabic : phrase.english}
                </p>
              </div>
              <p className="text-sm uppercase tracking-wide text-emerald-700/80">
                {phrase.transliteration}
              </p>
              <p className="text-sm leading-relaxed text-emerald-700/90">
                {phrase.note}
              </p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
