import type { Metadata } from "next";
import PageHeader, { Section } from "../_components/PageHeader";
import { profile } from "../_data/profile";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of Md. Sayeed Abu Rayhan: education, research experience, grants and fellowships, skills and service.",
  alternates: { canonical: "/cv" },
};

function Entry({ when, title, where, children }: { when: string; title: React.ReactNode; where?: string; children?: React.ReactNode }) {
  return (
    <li className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[9.5rem_1fr]">
      <p className="label pt-1">{when}</p>
      <div>
        <p className="font-semibold">{title}</p>
        {where ? <p className="text-muted">{where}</p> : null}
        {children ? <div className="mt-2 max-w-[66ch] space-y-2">{children}</div> : null}
      </div>
    </li>
  );
}

const list = "divide-y divide-line border-y border-line";

export default function CV() {
  return (
    <>
      <PageHeader
        title="Curriculum vitae"
        lead="A summary of my training and record. The PDF has the full version, including references."
      />

      <p className="-mt-2 mb-12">
        <a className="btn btn-primary" href={profile.cv}>
          Download full CV <span className="opacity-70">PDF</span>
        </a>
      </p>

      <Section title="Education">
        <ul className={list}>
          <Entry when="Expected May 2027" title="Ph.D. in Biology" where="Indiana State University, Terre Haute, IN">
            <p>
              Dissertation: Polycomb group and trithorax group regulation of cardiac Hox expression and
              anterior-posterior patterning of the <em>Drosophila</em> embryonic heart tube.
            </p>
            <p>Advisor: Dr. Kristopher R. Schwab. Defense scheduled for March 2027.</p>
          </Entry>
          <Entry when="December 2020" title="M.Sc. in Fish Genetics and Biotechnology" where="Khulna University, Bangladesh" />
          <Entry when="December 2018" title="B.Sc. (Honors) in Fisheries and Marine Resource Technology" where="Khulna University, Bangladesh" />
        </ul>
      </Section>

      <Section title="Research experience">
        <ul className={list}>
          <Entry when="Aug 2022 to present" title="Doctoral Researcher" where="Schwab Lab, Indiana State University">
            <p>
              Showed that Polycomb group genes pattern the anterior dorsal vessel by repressing{" "}
              <em>trithorax</em>-mediated <em>abdominal-A</em> expression, and that disrupting this balance
              disrupts cardiac patterning.
            </p>
            <p>
              Characterized PcG and trxG loss-of-function phenotypes in the embryonic heart tube using{" "}
              <em>Drosophila</em> genetics, multiplexed immunofluorescence and confocal microscopy.
            </p>
            <p>
              Extended the work to <em>seven up</em> (<em>svp</em>) cardiac progenitor cell division and
              patterning under an independent Indiana Academy of Science grant as principal investigator.
            </p>
            <p>Developed and validated transgenic and cloning reagents, and maintain the fly stocks and crossing schemes for the lab&rsquo;s cardiac projects.</p>
          </Entry>
          <Entry when="Feb 2020 to Jun 2022" title="Scientific Officer" where="On-Farm Research Division, Bangladesh Agricultural Research Institute">
            <p>
              Led on-farm research integrating aquaculture technologies into agricultural systems, managed data
              collection, analysis and reporting for national programs, and trained farmers.
            </p>
          </Entry>
          <Entry when="Jan 2019 to Jan 2020" title="Graduate Research Assistant (M.Sc. thesis)" where="Khulna University, Bangladesh">
            <p>
              Determined peak breeding season, size at first maturity and fecundity variation in Hilsa (
              <em>Tenualosa ilisha</em>). The findings supported the national fishing-ban period set by the
              Government of Bangladesh.
            </p>
          </Entry>
          <Entry when="Jan to Dec 2018" title="Undergraduate Researcher and Research Assistant" where="Khulna University, Bangladesh">
            <p>
              Identified, annotated and compared <em>Hsp70</em> and <em>Hsp90</em> genes from gill transcriptomes
              of three freshwater crayfish, and assessed genetic diversity of wild and hatchery stinging catfish
              populations using RAPD markers.
            </p>
          </Entry>
        </ul>
      </Section>

      <Section id="funding" title="Grants, fellowships and awards">
        <ul className={list}>
          <Entry when="2025" title="Indiana Academy of Science Senior Research Grant, $4,986" where="Principal Investigator (with S. Islam; sponsor K. Schwab)">
            <p>
              trithorax group and Polycomb group regulation of <em>seven up</em> (<em>svp</em>) cardiac
              progenitor cell division and patterning.
            </p>
          </Entry>
          <Entry when="2023" title="Indiana Academy of Science Senior Research Grant, $3,000" where="Principal Investigator (sponsor K. Schwab)">
            <p>PcG regulation of cardiac Hox expression and heart patterning.</p>
          </Entry>
          <Entry when="2023 to 2026" title="Rich and Robin Porter Cancer Research Fellowship" where="Indiana State University. Awarded three consecutive years." />
          <Entry when="2022 to 2026" title="Graduate Student Travel Grants" where="College of Graduate and Professional Studies, Indiana State University. Awarded each year." />
          <Entry when="2020" title="National Science and Technology Fellowship" where="Ministry of Science and Technology, Government of Bangladesh" />
          <Entry when="2017 to 2018" title="Undergraduate Student Merit Award and Scholarship" where="Khulna University" />
        </ul>
      </Section>

      <Section title="Technical skills">
        <dl className="grid max-w-[60rem] gap-x-10 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="font-semibold"><em>Drosophila</em> genetics</dt>
            <dd className="text-muted">
              Stock maintenance, complex crossing schemes, loss-of-function and transgenic analysis, embryo
              collection and dissection, balancer and GAL4/UAS systems.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Imaging</dt>
            <dd className="text-muted">
              Confocal microscopy, multiplexed immunofluorescence, whole-mount embryo immunostaining, image
              acquisition and quantification.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Molecular biology</dt>
            <dd className="text-muted">
              Molecular cloning, PCR and RT-PCR, plasmid construction, RAPD genotyping, cell and tissue culture.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Genomics and computational</dt>
            <dd className="text-muted">
              Transcriptome analysis, gene annotation and comparative genomics. R, SPSS, BLAST, MEGA, ClustalW,
              Geneious.
            </dd>
          </div>
        </dl>
      </Section>

      <Section title="Service and memberships">
        <ul className="max-w-[68ch] space-y-2">
          <li>Peer reviewer, <em>Heliyon</em> (Cell Press), 2024.</li>
          <li>Genetics Society of America, member 2024 to 2026.</li>
          <li>American Heart Association, member 2023 to 2025.</li>
          <li>Indiana Academy of Science, member 2023 to 2026.</li>
        </ul>
      </Section>
    </>
  );
}
