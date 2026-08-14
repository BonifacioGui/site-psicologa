import { professionalContact } from "../site";
import { PageHero } from "./PageHero";

export type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string; items?: string[] }[];
  practice?: { eyebrow: string; title: string; items: string[] };
  notice?: string;
  cta?: string;
};

export function InfoPage({ data }: { data: PageData }) {
  return <main>
    <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
    <section className="content narrow shell prose">
      {data.sections.map((section) => <section key={section.title}>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
        {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
      </section>)}
      {data.practice && <section className="practice-block" aria-labelledby="practice-title">
        <p className="eyebrow">{data.practice.eyebrow}</p>
        <h2 id="practice-title">{data.practice.title}</h2>
        <div className="practice-grid">{data.practice.items.map((item, index) => <article key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item}</h3>
        </article>)}</div>
      </section>}
      {data.notice && <div className="notice">{data.notice}</div>}
      {data.cta && <p><a className="button" href={professionalContact.whatsappHref} target="_blank" rel="noreferrer">{data.cta}</a></p>}
    </section>
  </main>;
}
