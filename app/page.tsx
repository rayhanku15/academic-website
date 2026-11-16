import Image from "next/image";
import Link from "next/link";
import { profile } from "./_data/profile";

export default function Home() {
  return (
    <>
      {/* Introduction */}
      <section className="grid items-start gap-10 md:grid-cols-[1fr_17rem] md:gap-14">
        <div>
          <p className="label">Ph.D. candidate · Developmental genetics</p>
          <h1 className="mt-3 text-[2.5rem] font-semibold leading-[1.08] sm:text-[3.2rem]">{profile.name}</h1>

          <p className="mt-6 max-w-[34ch] font-serif text-[1.55rem] leading-[1.3] text-ink sm:text-[1.7rem]">
            I study how chromatin regulators tell a developing heart which genes to keep on and which to keep off.
          </p>

          <p className="mt-6 max-w-[62ch] text-muted">
            I am a Ph.D. candidate in Dr. Kristopher Schwab&rsquo;s lab at Indiana State University. Using the{" "}
            <em>Drosophila</em> embryonic heart tube, I work out how Polycomb and trithorax group genes set the
            boundaries of Hox gene expression, and how losing that balance mispatterns the heart in ways that
            matter for congenital heart disease.
          </p>

          <p className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-accent-soft px-4 py-1.5 text-[0.92rem] font-medium text-accent-deep">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ember" />
            {profile.availability}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={profile.cv}>
              Download CV <span className="text-white/70">PDF</span>
            </a>
            <a className="btn btn-quiet" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
            <a className="link" href={profile.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a className="link" href={profile.orcid} target="_blank" rel="noopener noreferrer">ORCID</a>
            <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>

        <Image
          src="/images/portrait.jpg"
          alt="Md. Sayeed Abu Rayhan in the lab, wearing a lab coat."
          width={472}
          height={590}
          priority
          sizes="(min-width: 768px) 17rem, 14rem"
          className="w-56 rounded-xl border border-line md:w-full"
        />
      </section>

      {/* Research in brief */}
      <section className="mt-16 border-t border-line pt-12 sm:mt-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-[1.75rem] font-semibold">Research in brief</h2>
          <Link className="link text-[0.95rem]" href="/research">More about my research</Link>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="label">The question</h3>
            <p className="mt-3">
              Polycomb and trithorax group proteins switch genes off and on through chromatin. How do they control
              Hox genes inside a developing organ, and what happens to the organ when they fail?
            </p>
          </div>
          <div>
            <h3 className="label">What I found</h3>
            <p className="mt-3">
              In the fly heart tube, Polycomb group genes keep the Hox gene <em>abdominal-A</em> switched off in
              the anterior heart. Without that repression, the heart is mispatterned. Our 2025 paper shows that{" "}
              <em>trithorax</em> is needed to switch cardiac Hox genes on.
            </p>
          </div>
          <div>
            <h3 className="label">Where I am taking it</h3>
            <p className="mt-3">
              As a postdoc I want to carry these questions into chromatin regulation of organ and neuronal
              identity, in <em>Drosophila</em> and in mammalian systems.
            </p>
          </div>
        </div>
      </section>

      {/* Selected publications */}
      <section className="mt-16 border-t border-line pt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-[1.75rem] font-semibold">Selected publications</h2>
          <Link className="link text-[0.95rem]" href="/publications">All publications and talks</Link>
        </div>

        <ul className="mt-6 divide-y divide-line border-y border-line">
          <li className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[7.5rem_1fr]">
            <p className="label pt-1">In preparation</p>
            <p>
              <strong className="font-semibold">Rayhan MSA</strong>, Islam S, Farmer AJ, Ahmad SM, Schwab KR.
              Polycomb group genes pattern the <em>Drosophila</em> embryonic heart tube by repressing{" "}
              <em>trithorax</em>-mediated Hox expression.
            </p>
          </li>
          <li className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[7.5rem_1fr]">
            <p className="label pt-1">2025</p>
            <p>
              Farmer AJ, Katariya R, Islam S, <strong className="font-semibold">Rayhan MSA</strong>, Inlow MH, Ahmad
              SM, Schwab KR. <em>trithorax</em> is an essential regulator of cardiac Hox gene expression and
              anterior-posterior patterning of the <em>Drosophila</em> embryonic heart tube.{" "}
              <span className="text-muted">Biology Open 14(4): bio061919.</span>{" "}
              <a className="link" href="https://doi.org/10.1242/bio.061919" target="_blank" rel="noopener noreferrer">
                doi:10.1242/bio.061919
              </a>
            </p>
          </li>
          <li className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[7.5rem_1fr]">
            <p className="label pt-1">2023</p>
            <p>
              <strong className="font-semibold">Abu Rayhan MS</strong>, Rahman MS, Bose PK, Sarower MG, Ali MY.
              Estimating peak breeding season, size at first maturity and variation in fecundity and egg-size at
              different sizes of Hilsa (<em>Tenualosa ilisha</em>).{" "}
              <span className="text-muted">Heliyon 9(9): e19420.</span>{" "}
              <a className="link" href="https://doi.org/10.1016/j.heliyon.2023.e19420" target="_blank" rel="noopener noreferrer">
                doi:10.1016/j.heliyon.2023.e19420
              </a>
            </p>
          </li>
        </ul>
      </section>

      {/* At a glance */}
      <section className="mt-16 border-t border-line pt-12">
        <h2 className="text-[1.75rem] font-semibold">At a glance</h2>
        <dl className="mt-6 grid gap-x-12 gap-y-7 sm:grid-cols-2">
          <div>
            <dt className="label">Education</dt>
            <dd className="mt-2">
              Ph.D. in Biology, Indiana State University, expected May 2027. Dissertation defense scheduled for
              March 2027.
            </dd>
          </div>
          <div>
            <dt className="label">Funding</dt>
            <dd className="mt-2">
              Two Indiana Academy of Science research grants as principal investigator, and the Rich and Robin
              Porter Cancer Research Fellowship for three consecutive years.
            </dd>
          </div>
          <div>
            <dt className="label">Methods</dt>
            <dd className="mt-2">
              <em>Drosophila</em> genetics, whole-mount embryo immunostaining, multiplexed immunofluorescence,
              confocal microscopy and molecular cloning.
            </dd>
          </div>
          <div>
            <dt className="label">Teaching</dt>
            <dd className="mt-2">
              Eight semesters teaching Human Anatomy and Human Physiology laboratories, and mentoring
              undergraduate and high-school researchers.
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
