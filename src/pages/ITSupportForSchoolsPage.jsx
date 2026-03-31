import { Helmet } from "react-helmet-async";

export default function ITSupportForSchoolsPage() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Helmet>
          <title>IT Support for Schools & Academies | Centcom Systems</title>
          <meta
            name="description"
            content="IT support for schools, academies and trusts, including Microsoft Intune, safeguarding-aware infrastructure, networking and cloud services."
          />
        </Helmet>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Sector</p>
        <h1 className="mt-3 text-4xl font-bold">IT Support for Schools & Academies</h1>
        <p className="mt-6 leading-8 text-slate-300">
          We support primary schools, secondary schools, academies and trusts with day-to-day IT
          support, Microsoft Intune, safeguarding-aware infrastructure, networking and cloud
          services.
        </p>
        <p className="mt-4 leading-8 text-slate-300">
          Centcom Systems understands the operational needs of education environments, including user
          support, device management, resilience, connectivity and dependable response times for both
          staff and students.
        </p>
      </section>
    );
  }
