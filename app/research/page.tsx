import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader, { Section } from "../_components/PageHeader";

export const metadata: Metadata = {
  title: "Research",
  description:
    "How Polycomb and trithorax group genes control Hox expression to pattern the Drosophila embryonic heart tube, and what that means for congenital heart defects.",
  alternates: { canonical: "/research" },
};

export default function Research() {
  return (
    <>
      <PageHeader
        title="Research"
        lead="How does a developing heart keep the right genes on in the right place, and what goes wrong when it cannot?"
      />

      <Section title="Why the heart, and why Hox genes">
        <div className="prose-block">
          <p>
            Congenital heart defects are among the most common birth defects in the United States, where an
            estimated 2.4 million people of all ages live with one. Sequencing studies of patients keep finding
            damaging mutations in genes that modify chromatin, which suggests that the heart depends on these
            regulators to keep its developmental genes correctly expressed.
          </p>
          <p>
            Several of those genes are the human counterparts of two families first found in the fruit fly: the
            trithorax group (trxG), which keeps genes active, and the Polycomb group (PcG), which keeps them
            silent. The two families work against each other to control Hox genes, and Hox genes are needed for
            heart development in both flies and mice. Mutations in single Hox genes can cause heart defects too.
            Patients with HOXA1 syndrome, for example, have congenital heart defects of varying severity.
          </p>
          <p>
            What is still not understood is how trxG and PcG genes shape the heart through their control of Hox
            genes. That is the question my research addresses.
          </p>
        </div>
      </Section>

      <Section title="The model: the fly heart tube">
        <div className="prose-block">
          <p>
            The <em>Drosophila</em> embryonic heart, called the dorsal vessel, is a simple tube made of two rows
            of cardiac cells. Hox genes pattern it from front to back, dividing it into an anterior aorta and a
            posterior heart, with <em>abdominal-A</em> (<em>abd-A</em>) expressed in the posterior heart. Because
            the tube is simple, and because fly genetics lets me remove one regulator at a time, it is a good
            place to see what each chromatin regulator does to Hox expression in a real organ.
          </p>
        </div>
        <figure className="mt-7 max-w-[47rem]">
          <Image
            src="/banner.png"
            alt="Confocal micrograph of a Drosophila embryonic heart tube showing two rows of cardiac cell nuclei."
            width={752}
            height={224}
            sizes="(min-width: 800px) 47rem, 100vw"
            className="w-full rounded-lg bg-night"
          />
          <figcaption className="mt-2 text-[0.9rem] text-muted">
            The <em>Drosophila</em> embryonic heart tube, imaged by confocal microscopy.
          </figcaption>
        </figure>
      </Section>

      <Section title="What I have found">
        <ul className="max-w-[68ch] space-y-4">
          <li className="border-l-2 border-accent pl-5">
            <strong className="font-semibold">Polycomb keeps the anterior heart free of <em>abd-A</em>.</strong>{" "}
            Polycomb group genes pattern the anterior dorsal vessel by repressing <em>trithorax</em>-mediated{" "}
            <em>abd-A</em> expression. When that repression is lost, the heart tube is mispatterned. I am first
            author on this work, which is in preparation for submission.
          </li>
          <li className="border-l-2 border-accent pl-5">
            <strong className="font-semibold"><em>trithorax</em> switches cardiac Hox genes on.</strong> As a
            co-author on our lab&rsquo;s 2025 paper in <em>Biology Open</em>, I helped show that{" "}
            <em>trithorax</em> is an essential regulator of cardiac Hox expression and anterior-posterior
            patterning of the heart tube.{" "}
            <a className="link" href="https://doi.org/10.1242/bio.061919" target="_blank" rel="noopener noreferrer">
              Read the paper
            </a>
            .
          </li>
          <li className="border-l-2 border-accent pl-5">
            <strong className="font-semibold">The same regulators in dividing cardiac progenitors.</strong> With
            an Indiana Academy of Science grant on which I am principal investigator, I am extending the project
            to trithorax and Polycomb group regulation of <em>seven up</em> (<em>svp</em>) cardiac progenitor
            cell division and patterning.
          </li>
        </ul>
      </Section>

      <Section title="Approaches">
        <ul className="grid max-w-[60rem] gap-x-10 gap-y-5 sm:grid-cols-2">
          <li>
            <p className="font-semibold"><em>Drosophila</em> genetics</p>
            <p className="text-muted">
              Complex crossing schemes, loss-of-function and transgenic analysis, balancer and GAL4/UAS systems,
              embryo collection and dissection.
            </p>
          </li>
          <li>
            <p className="font-semibold">Imaging</p>
            <p className="text-muted">
              Whole-mount embryo immunostaining, multiplexed immunofluorescence, confocal microscopy, image
              acquisition and quantification.
            </p>
          </li>
          <li>
            <p className="font-semibold">Molecular biology</p>
            <p className="text-muted">
              Molecular cloning and plasmid construction, PCR and RT-PCR, transgenic reagent development, cell
              and tissue culture.
            </p>
          </li>
          <li>
            <p className="font-semibold">Genomics and analysis</p>
            <p className="text-muted">
              Transcriptome analysis, gene annotation and comparative genomics, with R, BLAST, MEGA and Geneious.
            </p>
          </li>
        </ul>
      </Section>

      <Section title="Where I am heading">
        <div className="prose-block">
          <p>
            The question running through my Ph.D. is how a cell keeps a gene expression state once it is set. As
            a postdoc I want to take that question further, into chromatin regulation of organ and neuronal
            identity, in <em>Drosophila</em> and in mammalian systems. I am looking for a position starting in
            summer 2027.{" "}
            <Link className="link" href="/contact">Get in touch</Link>.
          </p>
        </div>
      </Section>

      <Section title="Earlier work">
        <div className="prose-block">
          <p>
            Before my Ph.D. I trained in fish genetics at Khulna University in Bangladesh. My M.Sc. research
            worked out the peak breeding season, size at first maturity and fecundity of Hilsa (
            <em>Tenualosa ilisha</em>), the national fish, and the findings supported the fishing-ban period set
            by the Government of Bangladesh (
            <a className="link" href="https://doi.org/10.1016/j.heliyon.2023.e19420" target="_blank" rel="noopener noreferrer">
              <em>Heliyon</em>, 2023
            </a>
            ). As an undergraduate I annotated and compared heat shock protein genes from crayfish gill
            transcriptomes and measured genetic diversity in catfish populations. I then spent two years as a
            Scientific Officer at the Bangladesh Agricultural Research Institute, running on-farm research and
            training farmers.
          </p>
        </div>
      </Section>

      <section className="mt-14 grid gap-6 sm:grid-cols-3">
        <figure>
          <Image src="/images/bench.jpg" alt="Sayeed pipetting at the lab bench." width={761} height={702}
            sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <figcaption className="mt-2 text-[0.9rem] text-muted">At the bench.</figcaption>
        </figure>
        <figure>
          <Image src="/images/poster-session.jpg" alt="Sayeed explaining a poster to conference attendees." width={1280} height={960}
            sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <figcaption className="mt-2 text-[0.9rem] text-muted">Presenting at a conference poster session.</figcaption>
        </figure>
        <figure>
          <Image src="/images/poster.jpg" alt="Sayeed standing beside a research poster." width={1600} height={1057}
            sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <figcaption className="mt-2 text-[0.9rem] text-muted">
            With our poster on Polycomb patterning of the anterior heart tube.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
