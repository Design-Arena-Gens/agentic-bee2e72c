import Translator from "@/app/components/Translator";

export default function Home() {
  const highlights = [
    {
      title: "Modern Standard Arabic",
      body: "Clear explanations with diacritics and transliteration so you can read and pronounce effortlessly.",
    },
    {
      title: "Regional Dialects",
      body: "Quick notes about Levantine, Gulf, and Egyptian variations to help you sound natural in context.",
    },
    {
      title: "Cultural Nuance",
      body: "Beyond literal translations, we surface when and why a phrase is used for authentic conversations.",
    },
  ];

  const culturalNotes = [
    {
      arabic: "تشرفنا",
      transliteration: "Tasharrafnā",
      english: "A polite way to say “It's a pleasure to meet you.”",
    },
    {
      arabic: "الله يعطيك العافية",
      transliteration: "Allāh yuʿṭīk al-ʿāfya",
      english:
        "A warm Levantine expression meaning “May God grant you health,” often said after good work.",
    },
    {
      arabic: "تفضل",
      transliteration: "Tafaḍḍal",
      english:
        "An invitation to come in, have a seat, or accept something—hospitality packed into one word.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 text-zinc-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-20 pt-16 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 rounded-3xl border border-amber-200 bg-white/70 p-10 shadow-lg shadow-amber-100 backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-600">
            Fluent. Contextual. Human.
          </p>
          <h1 className="text-4xl font-semibold leading-snug text-zinc-900 md:text-5xl">
            نعم، نفهم العربية{" "}
            <span className="text-emerald-600">— absolutely.</span>
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
            Dive into an interactive bilingual guide that pairs Modern Standard
            Arabic, regional nuance, and clear pronunciation. Explore our
            curated phrasebook, switch directions instantly, and see how we keep
            conversations culturally authentic.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-base text-zinc-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100/60 px-4 py-2 text-emerald-800">
              <span className="text-xl">✨</span> Real Arabic samples
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100/60 px-4 py-2 text-amber-800">
              <span className="text-xl">🔁</span> Bidirectional search
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100/60 px-4 py-2 text-sky-800">
              <span className="text-xl">🎧</span> Pronunciation support
            </span>
          </div>
        </header>

        <section className="grid gap-6 rounded-3xl border border-zinc-100 bg-white/70 p-10 shadow-md shadow-zinc-100 backdrop-blur md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-transparent p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
            >
              <h2 className="text-xl font-semibold text-zinc-900">
                {item.title}
              </h2>
              <p className="text-base leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6 rounded-3xl border border-emerald-200 bg-white/70 p-10 shadow-lg shadow-emerald-100 backdrop-blur">
            <h2 className="text-2xl font-semibold text-zinc-900">
              تجربة تفاعلية — Interactive Translator
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Search in English, Arabic, or transliteration and instantly see
              the corresponding phrase, pronunciation guide, and cultural notes.
              We built a focused phrasebook that highlights how context alters
              meaning, so you can go from “Do you understand Arabic?” to deeper
              dialogue.
            </p>
            <Translator />
          </div>

          <aside className="flex flex-col gap-6 rounded-3xl border border-amber-200 bg-white/80 p-10 shadow-md shadow-amber-100 backdrop-blur">
            <h3 className="text-xl font-semibold text-amber-900">
              Cultural Gems
            </h3>
            <p className="text-base leading-relaxed text-zinc-600">
              Arabic is rich with phrases that carry warmth. Here are a few
              favorites we rely on to stay authentic while translating.
            </p>
            <div className="flex flex-col gap-5">
              {culturalNotes.map((note) => (
                <div
                  key={note.arabic}
                  className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5"
                >
                  <p className="text-2xl font-semibold text-amber-900">
                    {note.arabic}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-amber-600">
                    {note.transliteration}
                  </p>
                  <p className="mt-2 text-sm text-amber-800">{note.english}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <footer className="rounded-3xl border border-zinc-100 bg-white/70 p-10 text-center text-sm text-zinc-500 shadow-inner">
          Ready to keep chatting in Arabic? نرحب بأسئلتك دائماً — we always
          welcome your questions.
        </footer>
      </main>
    </div>
  );
}
