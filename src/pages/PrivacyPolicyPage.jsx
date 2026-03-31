import { Helmet } from "react-helmet-async";

const privacySections = [
  {
    title: "Introduction",
    content:
      "Centcom Systems is committed to protecting personal data, maintaining transparency and handling information responsibly. We recognise the importance of UK data protection law and GDPR principles, and we work to ensure that personal information is processed securely, fairly and lawfully.",
  },
  {
    title: "Our Commitment",
    content:
      "We apply high standards of information security and privacy across our services. We are committed to supporting good data protection practices within our own organisation and, where relevant, helping customers understand the role that secure IT services can play in meeting their own compliance obligations.",
  },
  {
    title: "How We Protect Data",
    content:
      "We use appropriate technical and organisational measures to protect information against unauthorised access, loss, misuse or disclosure. This may include encryption, secure remote access controls, restricted access to systems, cloud-based protection measures and monitored infrastructure designed to safeguard business and customer data.",
  },
  {
    title: "Data Retention",
    content:
      "Centcom Systems retains personal data only for as long as necessary to provide services, respond to enquiries, fulfil contractual obligations and meet legitimate legal, regulatory or business requirements. Retention periods may vary depending on the purpose for which the information was collected.",
  },
  {
    title: "Service Communications",
    content:
      "We may contact customers and enquiries with relevant service-related updates, account information, operational notices or occasional business communications. Where marketing communication is used, recipients can opt out at any time.",
  },
  {
    title: "Data Management and Systems",
    content:
      "We may store and manage customer and enquiry information within secure business systems, including CRM, support, cloud and communication platforms, where this is necessary to deliver services effectively. Access is limited to authorised personnel who need the information to carry out their responsibilities.",
  },
  {
    title: "Microsoft and Cloud Services",
    content:
      "Centcom Systems works extensively with Microsoft technologies and cloud platforms. Where Microsoft or other trusted providers are used as part of service delivery, data handling is supported by their security, compliance and contractual commitments. We promote the use of secure cloud tools and best practices to help protect customer environments.",
  },
  {
    title: "Data Breaches",
    content:
      "We maintain procedures for identifying, reviewing and responding to suspected personal data breaches. Where required, appropriate steps will be taken to assess the issue, limit impact, notify relevant parties and comply with applicable reporting obligations.",
  },
  {
    title: "Your Rights",
    content:
      "You may have the right to request access to personal data we hold about you, ask for inaccurate information to be corrected, request deletion where appropriate, object to certain processing or request restrictions in how information is used. We will consider and respond to requests in line with applicable data protection law.",
  },
  {
    title: "Children's Data",
    content:
      "This website is not intended for children and we do not knowingly collect personal data from children.",
  },
  {
    title: "International Data Handling",
    content:
      "Although Centcom Systems is based in the United Kingdom, we may support customers in different regions. Any handling of personal data will be managed in line with applicable UK data protection standards and appropriate safeguards where required.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Helmet>
        <title>Privacy Policy | Centcom Systems</title>
        <meta
          name="description"
          content="Read the Centcom Systems Privacy Policy to understand how we handle personal information, data protection, retention and privacy-related requests."
        />
      </Helmet>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Privacy Policy
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="mt-5 leading-8 text-slate-300">
          This Privacy Policy explains how Centcom Systems collects, uses, stores and protects
          personal information in connection with this website and our services.
        </p>

        <div className="mt-8 space-y-6">
          {privacySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-2 leading-7 text-slate-300">{section.content}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2 leading-7 text-slate-300">
              If you would like to make a privacy-related request or have questions about how we
              handle personal data, please contact{" "}
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
