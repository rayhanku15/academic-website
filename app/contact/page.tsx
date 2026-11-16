import type { Metadata } from "next";
import PageHeader from "../_components/PageHeader";
import { profile } from "../_data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Md. Sayeed Abu Rayhan at Indiana State University.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        lead="Email is the best way to reach me. I am glad to hear about postdoctoral openings, collaborations and questions about my work."
      />

      <p className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-accent-soft px-4 py-1.5 text-[0.92rem] font-medium text-accent-deep">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ember" />
        {profile.availability}
      </p>

      <dl className="grid max-w-[52rem] gap-x-12 gap-y-9 sm:grid-cols-2">
        <div>
          <dt className="label">Email</dt>
          <dd className="mt-2 space-y-1">
            <p><a className="link" href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p><a className="link" href={`mailto:${profile.altEmail}`}>{profile.altEmail}</a></p>
          </dd>
        </div>
        <div>
          <dt className="label">Phone</dt>
          <dd className="mt-2"><a className="link" href={profile.phoneHref}>{profile.phone}</a></dd>
        </div>
        <div>
          <dt className="label">Address</dt>
          <dd className="mt-2">
            Department of Biology<br />
            Indiana State University<br />
            Terre Haute, Indiana 47809, USA
          </dd>
        </div>
        <div>
          <dt className="label">Profiles</dt>
          <dd className="mt-2 space-y-1">
            <p><a className="link" href={profile.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a></p>
            <p><a className="link" href={profile.orcid} target="_blank" rel="noopener noreferrer">ORCID</a></p>
            <p><a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </dd>
        </div>
      </dl>

      <p className="mt-12">
        <a className="btn btn-primary" href={profile.cv}>
          Download CV <span className="text-white/70">PDF</span>
        </a>
      </p>
    </>
  );
}
