import { Helmet } from "react-helmet-async";

export default function MicrosoftIntunePage() {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Helmet>
          <title>Microsoft 365, Azure & Intune Support in the UK | Centcom Systems</title>
          <meta
            name="description"
            content="Expert Microsoft 365, Azure and Intune support in London, Slough and across the UK for businesses, schools and multi-site organisations."
          />
          <link rel="canonical" href="https://www.centcom.co.uk/microsoft-intune-support" />
          <meta property="og:url" content="https://www.centcom.co.uk/microsoft-intune-support" />
        </Helmet>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Microsoft Cloud & Modern Workplace
          </p>
  
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Microsoft 365, Azure & Intune Support in the UK
          </h1>
  
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Centcom Systems delivers expert Microsoft cloud services including
            Microsoft 365, Azure and Intune for businesses, schools and
            multi-site organisations across Slough, London and the UK.
          </p>
  
          <p className="mt-4 leading-7 text-slate-400">
            We help organisations modernise their IT environments, improve
            security, manage devices effectively and enable secure remote
            working through a fully integrated Microsoft ecosystem.
          </p>
        </div>
  
        {/* Core Services */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Microsoft 365 Services</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Microsoft 365 Setup & Configuration</li>
              <li>Exchange Online & Email Migration</li>
              <li>SharePoint & OneDrive</li>
              <li>Teams Collaboration</li>
              <li>Tenant-to-Tenant Migration</li>
            </ul>
          </div>
  
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Microsoft Intune</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Device Management (Windows, Apple, Mobile)</li>
              <li>Endpoint Security & Compliance Policies</li>
              <li>Application Deployment</li>
              <li>BYOD & Corporate Device Management</li>
              <li>Autopilot & Zero-Touch Deployment</li>
            </ul>
          </div>
  
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Azure Cloud Services</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Azure Infrastructure Setup</li>
              <li>Virtual Machines & Networking</li>
              <li>Identity & Access Management</li>
              <li>Cloud Migration & Modernisation</li>
              <li>Hybrid Cloud Solutions</li>
            </ul>
          </div>
  
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Security & Compliance</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Microsoft Security & Compliance Centre</li>
              <li>Conditional Access Policies</li>
              <li>Data Loss Prevention (DLP)</li>
              <li>Identity Protection</li>
              <li>Security Baselines & Best Practices</li>
            </ul>
          </div>
        </div>
  
        {/* Why Choose */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold">Why Choose Centcom Systems?</h2>
  
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Experienced Microsoft Cloud Specialists",
              "Support for Schools, SMEs & Enterprises",
              "Security-First Approach",
              "End-to-End Deployment & Support",
              "UK-Based Service with Rapid Response",
              "Scalable Solutions for Growth",
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
  
        {/* CTA */}
        <div className="mt-20 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Ready to modernise your IT environment?
          </h2>
          <p className="mt-4 text-slate-300">
            Speak to our team about Microsoft 365, Azure and Intune solutions
            tailored to your organisation.
          </p>
  
          <a
            href="/#contact"
            className="mt-6 inline-block rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    );
  }
