// Short dated items shown under "Recent updates" on the home page.
// Add new items at the top. Keep the list to about five or six.
export type NewsItem = { when: string; text: React.ReactNode; upcoming?: boolean };

export const news: NewsItem[] = [
  {
    when: "March 2027",
    upcoming: true,
    text: <>Ph.D. dissertation defense at Indiana State University.</>,
  },
  {
    when: "2026",
    text: (
      <>
        Presented a poster on Polycomb and trithorax regulation of cardiac Hox activity at the Midwest
        Drosophila Conference, Monticello, IL.
      </>
    ),
  },
  {
    when: "2026",
    text: <>Presented a poster at the 141st Annual Meeting of the Indiana Academy of Science, Indianapolis, IN.</>,
  },
  {
    when: "2025",
    text: (
      <>
        Awarded an Indiana Academy of Science Senior Research Grant as principal investigator, to study
        trithorax and Polycomb group regulation of <em>seven up</em> cardiac progenitors.
      </>
    ),
  },
  {
    when: "April 2025",
    text: (
      <>
        Our paper showing that <em>trithorax</em> is an essential regulator of cardiac Hox gene expression was
        published in{" "}
        <a className="link" href="https://doi.org/10.1242/bio.061919" target="_blank" rel="noopener noreferrer">
          Biology Open
        </a>
        .
      </>
    ),
  },
];
