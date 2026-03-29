import { useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    jobRole: "",
    mobile: "",
    email: "",
    comment: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const serviceCategories = [
    {
      title: "Microsoft Cloud & Modern Workplace",
      description:
        "Modern Microsoft cloud services designed to improve collaboration, security, automation and device management.",
      items: [
        "Microsoft 365",
        "Azure",
        "Intune",
        "Compliance",
        "Security",
        "SharePoint",
        "Power Apps",
        "Power Automate",
        "Microsoft 365 Tenant to Tenant Migration",
      ],
      link: "/microsoft-intune-support",
    },
    {
      title: "IT Support & Cloud Transformation",
      description:
        "End-to-end support services for businesses and education, from daily helpdesk needs to infrastructure and cloud migration projects.",
      items: [
        "Remote and Onsite Support",
        "On Prem Migration to the Cloud",
        "Google Workspace",
        "Backup and Disaster Recovery",
        "Apple Mac and iPad Support",
        "Hardware Repairs",
      ],
      link: "/managed-it-support",
    },
    {
      title: "Networks, Connectivity & Infrastructure",
      description:
        "Reliable infrastructure services covering networking, connectivity, structured cabling and communications systems.",
      items: [
        "VoIP Phone Systems",
        "Wireless Systems",
        "Network Support",
        "Network Switches",
        "Structured Cabling Copper and Fibre",
      ],
      link: "/managed-it-support",
    },
    {
      title: "Development & Specialist Solutions",
      description:
        "Custom digital solutions and specialist systems to support operational efficiency, security and business growth.",
      items: [
        "Website Development",
        "Web App Development",
        "iOS Development",
        "Android Development",
        "CCTV Systems",
      ],
      link: "/managed-it-support",
    },
  ];

  const sectors = [
    {
      title: "IT Support for Schools & Academies",
      description:
        "We support primary schools, secondary schools and multi-academy trusts across the UK with Microsoft Intune, safeguarding compliance, network management and day-to-day IT helpdesk services.",
      link: "/it-support-for-schools",
    },
    {
      title: "IT Support for SMEs & Businesses",
      description:
        "From startups to established firms, we provide fully managed IT support including cybersecurity, cloud migration, Microsoft 365 and proactive monitoring.",
      link: "/managed-it-support",
    },
    {
      title: "IT Support for Multi-Site Organisations",
      description:
        "Centralised IT management across multiple locations with consistent performance, security and connectivity.",
      link: "/managed-it-support",
    },
  ];

  const testimonials = [
    {
      quote:
        "Centcom Systems transformed our school's IT infrastructure. Their Microsoft Intune deployment was seamless and their ongoing support is outstanding.",
      name: "Head of IT",
      company: "Multi-Academy Trust, London",
    },
    {
      quote:
        "We switched to Centcom after years of poor IT support. Response times are excellent and they truly understand our business needs.",
      name: "Managing Director",
      company: "Financial Services Firm, Slough",
    },
    {
      quote:
        "Their cybersecurity audit identified critical vulnerabilities we didn’t know existed. We achieved Cyber Essentials certification within weeks.",
      name: "Operations Manager",
      company: "Healthcare Provider, Berkshire",
    },
  ];

  const faqs = [
    {
      question: "What does managed IT support include?",
      answer:
        "Managed IT support typically includes helpdesk services, monitoring, patching, user support, cybersecurity, backup, cloud administration and infrastructure management.",
    },
    {
      question: "How much does IT support cost in the UK?",
      answer:
        "Costs vary based on the number of users, devices, sites and security requirements. We usually recommend a quick consultation so the support model matches your organisation properly.",
    },
    {
      question: "Do you support schools and academies?",
      answer:
        "Yes. We support schools, academies and education groups with day-to-day support, device management, safeguarding-aware IT operations and infrastructure projects.",
    },
    {
      question: "What is Microsoft Intune used for?",
      answer:
        "Microsoft Intune helps organisations manage devices, applications, compliance policies and security controls across Windows, Apple and mobile endpoints.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We support organisations in Slough, Berkshire, London and across the UK through a blend of remote and onsite services.",
    },
    {
      question: "What is the difference between Cyber Essentials and ISO 27001?",
      answer:
        "Cyber Essentials is a baseline security certification focused on core controls, while ISO 27001 is a broader information security management standard with more comprehensive governance requirements.",
    },
    {
      question: "How quickly do you respond to IT issues?",
      answer:
        "Our response times depend on the support agreement and priority level, but we focus on fast acknowledgement and efficient resolution.",
    },
    {
      question: "Do you support Apple Mac environments?",
      answer:
        "Yes. We support Apple Mac environments alongside Microsoft and cloud-based ecosystems.",
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus(
      "Thank you. Your enquiry has been recorded. Connect this form to your backend or email service to receive submissions."
    );
    setFormData({
      name: "",
      jobRole: "",
      mobile: "",
      email: "",
      comment: "",
    });
  };

  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Award-Winning Managed IT Support in the UK
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
  Managed IT Support in Slough, London & Across the UK for Businesses & Schools
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Proactive, reliable IT services for businesses and education. From Microsoft cloud
              technologies and cybersecurity to support, infrastructure and development services, we
              help organisations stay secure, productive and ready to grow.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400">
              Centcom Systems provides managed IT support in Slough, Berkshire, London and across
              the UK. We specialise in supporting schools, multi-academy trusts and businesses with
              proactive IT management, Microsoft 365, Azure, Intune, cloud migration,
              cybersecurity, infrastructure services and dependable day-to-day support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-400 px-6 py-4 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Get a Free IT Audit
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 px-6 py-4 text-center font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            We deliver a broad range of IT, cloud, security, infrastructure, communications and
            development services for businesses and education across Slough, London and the UK.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <h3 className="text-2xl font-semibold">{category.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{category.description}</p>

              <ul className="mt-5 space-y-3 text-slate-300">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={category.link}
                className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="why-us" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Why Centcom
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why Choose Centcom Systems</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We deliver award-winning managed IT support across the business and education
                sectors in Slough, London and throughout the UK, with expertise spanning Microsoft
                cloud technologies, Apple environments, cybersecurity, infrastructure and
                development services.
              </p>
              <p className="mt-5 leading-7 text-slate-400">
                Our approach is practical, responsive and security-focused. Whether you need
                day-to-day IT support, cloud administration, project delivery, migration services,
                network infrastructure, automation or custom development, we provide experienced
                engineers and dependable communication throughout.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Certified", "Award-Winning IT Support"],
                ["< 30 min", "Rapid Response Times"],
                ["Business & Education", "Sectors Supported"],
                ["Cloud, Security & Support", "Specialist Expertise"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
                >
                  <div className="text-2xl font-bold text-cyan-300">{value}</div>
                  <div className="mt-2 text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Who We Help
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Industries We Support</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Trusted by schools, businesses and multi-site organisations across Slough, London and
            the wider UK.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold">{sector.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{sector.description}</p>
              <Link
                to={sector.link}
                className="mt-6 inline-flex text-sm font-semibold text-cyan-300"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Trusted by Businesses & Schools Across the UK
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Supporting over 5,000 users across the education and business sectors.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name + testimonial.company}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6"
              >
                <p className="leading-7 text-slate-200">“{testimonial.quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Common questions about our managed IT support services in Slough, London and across the
            UK.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contact Our IT Experts
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Book a free IT consultation today
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              No obligation, no jargon, just honest advice from experienced engineers in Slough,
              London and across the UK.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <p className="text-lg font-semibold text-white">Centcom Systems</p>
              <p>Supporting businesses and education across Slough, London & the UK</p>
              <p>Slough, Berkshire, United Kingdom</p>
              <p>
                <a href="tel:+442034882534" className="transition hover:text-cyan-300">
                  +44 (0) 203 4882 534
                </a>
              </p>
              <p>
                <a href="mailto:support@centcom.co.uk" className="transition hover:text-cyan-300">
                  support@centcom.co.uk
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
            <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Complete the form below and we will get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="jobRole"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Job Role
                </label>
                <input
                  id="jobRole"
                  name="jobRole"
                  type="text"
                  value={formData.jobRole}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  placeholder="Your job title"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="mb-2 block text-sm font-medium text-slate-200">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  placeholder="Your mobile number"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  placeholder="Tell us about your requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-cyan-400 px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Submit
              </button>

              {formStatus ? (
                <p className="text-sm leading-6 text-cyan-300">{formStatus}</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}