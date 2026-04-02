import { useState } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import serviceCloudImage from "../assets/service-cloud.jpg";
import serviceSupportImage from "../assets/service-support.jpg";
import serviceNetworkImage from "../assets/service-network.jpg";
import serviceDevelopmentImage from "../assets/service-development.jpg";
import { submitContactForm } from "../utils/submitContactForm";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    comment: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = [
    {
      title: "Microsoft Cloud & Modern Workplace",
      image: serviceCloudImage,
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
      image: serviceSupportImage,
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
      image: serviceNetworkImage,
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
      image: serviceDevelopmentImage,
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
        "Their cybersecurity audit identified critical vulnerabilities we didn't know existed. We achieved Cyber Essentials certification within weeks.",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending your enquiry...");

    try {
      const data = await submitContactForm(event.target, {
        subject: "New homepage enquiry from centcom.co.uk",
        fromName: "Centcom Systems Homepage Contact Form",
      });

      if (data.success) {
        setFormStatus("Thank you. Your enquiry has been sent successfully.");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          comment: "",
        });
        event.target.reset();
      } else {
        setFormStatus("Sorry, there was a problem sending your enquiry. Please try again.");
      }
    } catch (error) {
      setFormStatus("Sorry, there was a problem sending your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Managed IT Support in London, Slough & Berkshire | Centcom Systems</title>
        <meta
          name="description"
          content="Centcom Systems provides managed IT support in London, Slough and Berkshire, including Microsoft 365, Azure, Intune, cybersecurity, cloud services and support for businesses and schools."
        />
        <link rel="canonical" href="https://www.centcom.co.uk/" />
        <meta property="og:url" content="https://www.centcom.co.uk/" />
      </Helmet>

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <img
          src="https://commons.wikimedia.org/wiki/Special:Redirect/file/London_Skyline_(125508655).jpeg"
          alt="London skyline representing Centcom Systems managed IT support services"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(2,6,23,0.8)_38%,rgba(2,6,23,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              Managed IT Support in London, Slough and Berkshire
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-6xl xl:text-7xl">
              Managed IT support in London, Slough and Berkshire for businesses and schools.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Centcom Systems provides premium managed IT support, Microsoft 365 services,
              cybersecurity, cloud solutions and responsive technical support across London,
              Slough, Berkshire and the wider UK.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              We help organisations reduce downtime, strengthen security and modernise
              infrastructure with dependable day-to-day support, strategic guidance and scalable
              cloud-first IT services.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact-us"
                className="rounded-2xl bg-cyan-300 px-6 py-4 text-center font-semibold text-slate-950 shadow-[0_18px_60px_rgba(34,211,238,0.28)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Book a Free IT Consultation
              </Link>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                Explore Our IT Services
              </a>
            </div>

            <div className="mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["20+", "Years supporting businesses, schools and growing organisations"],
                ["98%", "Client satisfaction focus across managed IT support services"],
                ["24/7", "Monitoring and responsive support for critical business systems"],
                ["4.9/5", "Average review rating"],
              ].map(([value, label]) => (
                <div key={label} className="border-l-4 border-cyan-300/80 pl-5">
                  <div className="text-5xl font-semibold leading-none text-cyan-200 md:text-6xl">
                    {value}
                  </div>
                  <div className="mt-4 max-w-xs text-base leading-7 text-slate-200">{label}</div>
                </div>
              ))}
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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-sm">
                  Our Services
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{category.description}</p>

                <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-white/8 bg-slate-900/60 px-4 py-3"
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
                <p className="leading-7 text-slate-200">"{testimonial.quote}"</p>
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
              <input type="hidden" name="botcheck" className="hidden" />

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
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60"
                  placeholder="Tell us about your requirements"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-cyan-400 px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                {isSubmitting ? "Sending..." : "Submit"}
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
