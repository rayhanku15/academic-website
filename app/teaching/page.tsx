import type { Metadata } from "next";
import PageHeader, { Section } from "../_components/PageHeader";

export const metadata: Metadata = {
  title: "Teaching and mentoring",
  description:
    "Teaching and mentoring experience of Md. Sayeed Abu Rayhan: Human Anatomy and Human Physiology laboratories at Indiana State University, and research mentoring.",
  alternates: { canonical: "/teaching" },
};

export default function Teaching() {
  return (
    <>
      <PageHeader
        title="Teaching and mentoring"
        lead="I teach so that students leave with a strong conceptual understanding, and with the curiosity and critical thinking to keep building on it."
      />

      <Section title="Laboratory teaching">
        <div className="max-w-[68ch]">
          <p className="font-semibold">Graduate Teaching Assistant, Indiana State University</p>
          <p className="text-muted">August 2022 to present</p>
          <ul className="mt-4 space-y-3">
            <li className="border-l-2 border-accent pl-5">
              <strong className="font-semibold">Human Anatomy laboratory (BIO-231L)</strong> and{" "}
              <strong className="font-semibold">Human Physiology laboratory (BIO-241L)</strong>, taught across
              eight semesters to about 70 undergraduates each semester.
            </li>
            <li className="border-l-2 border-accent pl-5">
              I deliver the lab instruction, run the practical assessments and hold review sessions.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Research mentoring">
        <p className="max-w-[68ch]">
          In the Schwab Lab I mentor undergraduate and high-school students through their first research
          projects in molecular biology and genetics. That covers experimental design, fly husbandry and
          genetics, embryo dissection, immunostaining and confocal imaging.
        </p>
      </Section>

      <Section title="Training outside the university">
        <p className="max-w-[68ch]">
          As a Scientific Officer at the Bangladesh Agricultural Research Institute (2020 to 2022), I delivered
          training for farmers in aquaculture and fish disease management as part of the institute&rsquo;s
          on-farm research programs.
        </p>
      </Section>
    </>
  );
}
