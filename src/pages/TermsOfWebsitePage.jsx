import { Helmet } from "react-helmet-async";

const termsSections = [
  {
    title: "Introduction",
    content:
      "Welcome to Centcom Systems, an IT consultancy and managed services provider focused on delivering reliable IT support, cybersecurity, cloud solutions and technical services. By accessing this website and using our services, you agree to these Terms of Website. Please read them carefully.",
  },
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using this website, you confirm that you accept these terms and agree to comply with them. If you do not agree with these terms, you should not use this website or our services.",
  },
  {
    title: "Services Provided",
    content:
      "Centcom Systems provides information about our managed IT support, cloud, cybersecurity, infrastructure and related technical services. Any service details shown on this website are provided for general information and may be updated or changed from time to time.",
  },
  {
    title: "Use of Website and Services",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>You must use this website and our services only for lawful purposes.</li>
        <li>
          If you are given account or access information, you are responsible for keeping it
          confidential and for activities carried out under your access.
        </li>
        <li>
          You must not misuse this website by introducing viruses, trojans, worms or any other
          malicious or harmful material.
        </li>
      </ul>
    ),
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All content on this website, including text, graphics, logos, images, layouts and software, belongs to Centcom Systems or its licensors unless otherwise stated. This content is protected by applicable copyright and intellectual property laws and must not be copied, reproduced or reused without permission.",
  },
  {
    title: "Site Availability",
    content:
      "We aim to keep this website available and functioning at all times. However, Centcom Systems does not guarantee uninterrupted access and may suspend, withdraw or restrict availability without notice for maintenance, repairs, upgrades or events outside our control.",
  },
  {
    title: "Accuracy of Information",
    content:
      "We make reasonable efforts to keep the information on this website accurate and up to date. However, we do not guarantee that all content will always be complete, current or free from errors. The information provided on this website is for general guidance only and should not be treated as professional advice. You should verify any information before relying on it.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Centcom Systems will not be liable for any direct, indirect, incidental, consequential or punitive loss or damage arising from the use of, or inability to use, this website or any services described on it.",
  },
  {
    title: "Indemnity",
    content:
      "You agree to indemnify and hold harmless Centcom Systems, its officers, employees and representatives against claims, liabilities, damages, losses, costs and expenses arising from your breach of these terms or misuse of this website.",
  },
  {
    title: "Changes to These Terms",
    content:
      "Centcom Systems may update these Terms of Website from time to time. Any significant changes will be published on this page, and your continued use of the website after any changes are posted will constitute your acceptance of the revised terms.",
  },
  {
    title: "Governing Law",
    content:
      "These terms and any disputes connected with this website or our services shall be governed by and interpreted in accordance with the laws of England and Wales.",
  },
];

export default function TermsOfWebsitePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Helmet>
        <title>Terms of Website | Centcom Systems</title>
        <meta
          name="description"
          content="Read the Centcom Systems Terms of Website covering use of this website, intellectual property, liability, site availability and governing law."
        />
        <link rel="canonical" href="https://www.centcom.co.uk/terms-of-website" />
        <meta property="og:url" content="https://www.centcom.co.uk/terms-of-website" />
      </Helmet>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Terms of Website
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Terms of Website</h1>
        <p className="mt-5 leading-8 text-slate-300">
          These terms explain how you may use the Centcom Systems website and the information
          available on it.
        </p>

        <div className="mt-8 space-y-6">
          {termsSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <div className="mt-2 leading-7 text-slate-300">{section.content}</div>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2 leading-7 text-slate-300">
              If you have any questions about these terms, please contact{" "}
              <a href="mailto:support@centcom.co.uk" className="text-cyan-300 hover:text-cyan-200">
                support@centcom.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
