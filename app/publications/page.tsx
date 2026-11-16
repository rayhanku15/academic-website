import type { Metadata } from "next";
import PageHeader, { Section } from "../_components/PageHeader";
import { profile } from "../_data/profile";

export const metadata: Metadata = {
  title: "Publications and presentations",
  description:
    "Peer-reviewed papers, manuscripts in preparation and conference presentations by Md. Sayeed Abu Rayhan.",
  alternates: { canonical: "/publications" },
};

const Me = ({ children }: { children: React.ReactNode }) => <strong className="font-semibold">{children}</strong>;

const AUTHORS = (
  <>
    <Me>Rayhan MSA</Me>, Islam S, Farmer AJ, Ahmad SM, Schwab KR.
  </>
);

type Talk = { year: string; kind: string; title: React.ReactNode; where: string; authors?: React.ReactNode };

const talks: Talk[] = [
  {
    year: "2026",
    kind: "Poster",
    title: (
      <>
        Polycomb (Pc) and trithorax (trx) regulation of Hox activity mediates cardiac cell lineage development
        and patterning within the <em>Drosophila</em> embryonic heart tube
      </>
    ),
    where: "Midwest Drosophila Conference, Monticello, IL",
    authors: (
      <>
        <Me>Rayhan MSA</Me> et al.
      </>
    ),
  },
  {
    year: "2026",
    kind: "Poster",
    title: <>Polycomb (Pc) and Polycomb group (PcG) genes repress trithorax-mediated Hox expression and cardiac patterning</>,
    where: "141st Annual Meeting of the Indiana Academy of Science, Indianapolis, IN",
  },
  {
    year: "2025",
    kind: "Abstract",
    title: (
      <>
        Polycomb (Pc) and Polycomb group genes regulate cardiac patterning by repressing trithorax-mediated Hox
        expression in the embryonic heart tube
      </>
    ),
    where: "66th Annual Drosophila Research Conference, San Diego, CA. Abstract published in the conference proceedings",
  },
  {
    year: "2025",
    kind: "Poster",
    title: (
      <>
        Polycomb (Pc) and Polycomb group genes (PcG) regulate cardiac patterning by repressing trithorax
        (trx)-mediated Hox expression in the embryonic heart tube
      </>
    ),
    where: "Midwest Drosophila Conference, Monticello, IL",
  },
  {
    year: "2025",
    kind: "Talk",
    title: <>Polycomb group genes repress trithorax-mediated Hox expression and cardiac patterning</>,
    where: "140th Annual Meeting of the Indiana Academy of Science, Indianapolis, IN",
  },
  {
    year: "2024",
    kind: "Talk",
    title: (
      <>
        Polycomb group genes regulate cardiac patterning by repressing trithorax-mediated <em>abdominal-A</em>{" "}
        expression
      </>
    ),
    where: "139th Annual Meeting of the Indiana Academy of Science, Indianapolis, IN",
  },
  {
    year: "2024",
    kind: "Poster",
    title: (
      <>
        Polycomb group genes regulate cardiac patterning by repressing trithorax-mediated <em>abdominal-A</em>{" "}
        expression
      </>
    ),
    where: "Midwest Drosophila Conference, Monticello, IL",
  },
  {
    year: "2023",
    kind: "Poster",
    title: (
      <>
        Polycomb group genes are required for Hox expression and cardiac patterning of the <em>Drosophila</em>{" "}
        heart tube
      </>
    ),
    where: "Midwest Drosophila Conference, Monticello, IL",
  },
  {
    year: "2023",
    kind: "Co-author",
    title: (
      <>
        Polycomb patterns the anterior embryonic dorsal vessel by repressing <em>abdominal-A</em> expression
      </>
    ),
    where: "Annual Meeting of the Indiana Academy of Science",
    authors: (
      <>
        Islam S, <Me>Rayhan MSA</Me>, Farmer AJ, Ahmad SM, Schwab KR.
      </>
    ),
  },
  {
    year: "2022",
    kind: "Co-author",
    title: (
      <>
        Polycomb patterns the anterior embryonic dorsal vessel by repressing <em>abdominal-A</em> expression
      </>
    ),
    where: "Midwest Drosophila Conference",
    authors: (
      <>
        Islam S, <Me>Rayhan MSA</Me>, Farmer AJ, Ahmad SM, Schwab KR.
      </>
    ),
  },
  {
    year: "2019",
    kind: "Talk",
    title: (
      <>
        Identification and comparative analysis of heat shock protein genes <em>Hsp70</em> and <em>Hsp90</em>{" "}
        from gill transcriptomes of three Australian crayfish
      </>
    ),
    where: "8th Biennial Fisheries Conference, Dhaka, Bangladesh",
    authors: (
      <>
        <Me>Rayhan MSA</Me>, Bose PK, Sarower MG, Ali MY.
      </>
    ),
  },
];

const row = "grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[7.5rem_1fr]";

export default function Publications() {
  return (
    <>
      <PageHeader
        title="Publications"
        lead={
          <>
            Papers, manuscripts and conference presentations. My name appears as Rayhan MSA or Abu Rayhan MS.
            Citation counts are on{" "}
            <a className="link" href={profile.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>.
          </>
        }
      />

      <Section title="Peer-reviewed papers">
        <ul className="divide-y divide-line border-y border-line">
          <li className={row}>
            <p className="label pt-1">2025</p>
            <p>
              Farmer AJ, Katariya R, Islam S, <Me>Rayhan MSA</Me>, Inlow MH, Ahmad SM, Schwab KR.{" "}
              <em>trithorax</em> is an essential regulator of cardiac Hox gene expression and anterior-posterior
              patterning of the <em>Drosophila</em> embryonic heart tube.{" "}
              <span className="text-muted">Biology Open 14(4): bio061919.</span>{" "}
              <a className="link" href="https://doi.org/10.1242/bio.061919" target="_blank" rel="noopener noreferrer">
                doi:10.1242/bio.061919
              </a>
            </p>
          </li>
          <li className={row}>
            <p className="label pt-1">2023</p>
            <p>
              <Me>Abu Rayhan MS</Me>, Rahman MS, Bose PK, Sarower MG, Ali MY. Estimating peak breeding season, size
              at first maturity and variation in fecundity and egg-size at different sizes of Hilsa (
              <em>Tenualosa ilisha</em>). <span className="text-muted">Heliyon 9(9): e19420.</span>{" "}
              <a className="link" href="https://doi.org/10.1016/j.heliyon.2023.e19420" target="_blank" rel="noopener noreferrer">
                doi:10.1016/j.heliyon.2023.e19420
              </a>
            </p>
          </li>
        </ul>
      </Section>

      <Section title="In preparation and under review">
        <ul className="divide-y divide-line border-y border-line">
          <li className={row}>
            <p className="label pt-1">In preparation</p>
            <p>
              {AUTHORS} Polycomb group genes pattern the <em>Drosophila</em> embryonic heart tube by repressing{" "}
              <em>trithorax</em>-mediated Hox expression.{" "}
              <span className="text-muted">A preprint will be posted on bioRxiv at submission.</span>
            </p>
          </li>
          <li className={row}>
            <p className="label pt-1">In revision</p>
            <p>
              Ali MY, <Me>Rayhan MSA</Me>, Rahman MB. Identification and comparative analysis of heat shock
              protein genes <em>Hsp70</em> and <em>Hsp90</em> from gill transcriptomes of three Australian
              crayfish. <span className="text-muted">Egyptian Journal of Aquatic Biology and Fisheries.</span>
            </p>
          </li>
          <li className={row}>
            <p className="label pt-1">In preparation</p>
            <p>
              Raqib A, <Me>Rayhan MSA</Me>, Sarower MG, Ali MY. Developing a rapid and low-cost protocol for
              counting and measuring eggs of Hilsa fish (<em>Tenualosa ilisha</em>).
            </p>
          </li>
        </ul>
      </Section>

      <Section id="presentations" title="Conference presentations">
        <ul className="divide-y divide-line border-y border-line">
          {talks.map((t, i) => (
            <li key={i} className={row}>
              <p className="label pt-1">
                {t.year} <span className="font-medium normal-case tracking-normal">· {t.kind}</span>
              </p>
              <p>
                {t.authors ?? AUTHORS} {t.title}. <span className="text-muted">{t.where}.</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
