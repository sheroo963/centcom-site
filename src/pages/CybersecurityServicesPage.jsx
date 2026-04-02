import { Helmet } from "react-helmet-async";

export default function CybersecurityServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Helmet>
        <title>Cybersecurity & Compliance Services in the UK | Centcom Systems</title>
        <meta
          name="description"
          content="Cybersecurity and compliance services in London, Slough and the UK, including Cyber Essentials support, Microsoft security, risk reduction and security best practices."
        />
        <link rel="canonical" href="https://www.centcom.co.uk/cybersecurity-services" />
        <meta property="og:url" content="https://www.centcom.co.uk/cybersecurity-services" />
      </Helmet>

      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Security & Compliance
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Cybersecurity & Compliance Services in the UK
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Centcom Systems provides cybersecurity and compliance services for businesses, schools
          and multi-site organisations across Slough, London and the UK. We help organisations
          reduce risk, strengthen security and meet modern compliance requirements.
        </p>

        <p className="mt-4 leading-7 text-slate-400">
          Our approach focuses on practical, real-world protection across endpoints, networks,
          cloud systems and user behaviour, ensuring your organisation remains secure, compliant
          and resilient.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold">Cybersecurity Protection</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Endpoint Protection</li>
            <li>Threat Detection & Response</li>
            <li>Network Security</li>
            <li>Email & Phishing Protection</li>
            <li>Security Monitoring</li>
          </ul>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold">Compliance & Standards</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Cyber Essentials Preparation</li>
            <li>ISO 27001 Readiness</li>
            <li>Security Policies & Documentation</li>
            <li>Risk Assessments</li>
            <li>Compliance Gap Analysis</li>
          </ul>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold">Microsoft Security</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Microsoft Defender</li>
            <li>Conditional Access</li>
            <li>Identity Protection</li>
            <li>Intune Security Policies</li>
            <li>Secure Device Management</li>
          </ul>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold">User Awareness & Risk Reduction</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Security Awareness Training</li>
            <li>Phishing Simulations</li>
            <li>Access Control Best Practices</li>
            <li>Password & MFA Policies</li>
            <li>Ongoing Security Guidance</li>
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold">Why Cybersecurity Matters</h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-300">
          Cyber threats are constantly evolving, and organisations of all sizes are targets. A
          strong security posture is no longer optional - it is essential. Our services are
          designed to reduce vulnerabilities, protect sensitive data and ensure business
          continuity.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "Reduce Risk of Cyber Attacks",
            "Protect Business & Student Data",
            "Meet Compliance Requirements",
            "Improve Security Visibility",
            "Strengthen User Awareness",
            "Ensure Business Continuity",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 text-center">
        <h2 className="text-3xl font-bold">Strengthen your security today</h2>
        <p className="mt-4 text-slate-300">
          Speak to our team about cybersecurity, compliance and risk reduction tailored to your
          organisation.
        </p>

        <a
          href="/#contact"
          className="mt-6 inline-block rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
        >
          Book a Security Consultation
        </a>
      </div>
    </section>
  );
}
