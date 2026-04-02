import { Helmet } from "react-helmet-async";

export default function ManagedITSupportPage() {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Helmet>
          <title>Managed IT Support in London, Slough & the UK | Centcom Systems</title>
          <meta
            name="description"
            content="Reliable managed IT support in London, Slough and across the UK for businesses, schools and multi-site organisations, including cloud, infrastructure and security support."
          />
          <link rel="canonical" href="https://www.centcom.co.uk/managed-it-support" />
          <meta property="og:url" content="https://www.centcom.co.uk/managed-it-support" />
        </Helmet>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Service
          </p>
  
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Managed IT Support in Slough, London & Across the UK
          </h1>
  
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Centcom Systems provides reliable, proactive managed IT support for
            businesses, schools and multi-site organisations across Slough,
            London and the UK. We combine day-to-day IT support with cloud,
            infrastructure and security expertise to keep your organisation
            running efficiently and securely.
          </p>
  
          <p className="mt-4 leading-7 text-slate-400">
            Whether you need full outsourced IT support or additional support for
            your internal team, we deliver structured service, rapid response and
            experienced engineers who understand your environment.
          </p>
        </div>
  
        {/* Services Breakdown */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">IT Support Services</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Remote IT Support</li>
              <li>Onsite IT Support</li>
              <li>Rapid Response Helpdesk</li>
              <li>User Support & Troubleshooting</li>
              <li>Hardware Support & Repairs</li>
              <li>Apple Mac & iPad Support</li>
            </ul>
          </div>
  
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Cloud & Infrastructure</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>On-Prem to Cloud Migration</li>
              <li>Microsoft 365 & Google Workspace</li>
              <li>Azure Infrastructure</li>
              <li>Backup & Disaster Recovery</li>
              <li>Server & Network Management</li>
            </ul>
          </div>
  
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Network & Connectivity</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Network Design & Support</li>
              <li>Wireless Systems</li>
              <li>Network Switches</li>
              <li>Structured Cabling (Copper & Fibre)</li>
              <li>VoIP Phone Systems</li>
            </ul>
          </div>
  
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Security & Compliance</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Cybersecurity Protection</li>
              <li>Compliance & Security Controls</li>
              <li>Endpoint Management (Intune)</li>
              <li>Security Best Practices</li>
              <li>Risk Reduction</li>
            </ul>
          </div>
        </div>
  
        {/* CTA */}
        <div className="mt-20 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Looking for reliable IT support?
          </h2>
          <p className="mt-4 text-slate-300">
            Speak to our team today for a free consultation and see how we can
            support your organisation.
          </p>
  
          <a
            href="/#contact"
            className="mt-6 inline-block rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Get a Free IT Audit
          </a>
        </div>
      </section>
    );
  }
