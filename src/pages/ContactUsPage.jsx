import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { submitContactForm } from "../utils/submitContactForm";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    comment: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        subject: "New Contact Us enquiry from centcom.co.uk",
        fromName: "Centcom Systems Contact Us Page",
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
    <section className="mx-auto max-w-7xl px-6 py-20">
      <Helmet>
        <title>Contact Us | Centcom Systems</title>
        <meta
          name="description"
          content="Contact Centcom Systems for managed IT support, Microsoft 365, cybersecurity and cloud services in London, Slough, Berkshire and across the UK."
        />
        <link rel="canonical" href="https://www.centcom.co.uk/contact-us" />
        <meta property="og:url" content="https://www.centcom.co.uk/contact-us" />
      </Helmet>

      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Contact Us
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Speak to our team about managed IT support
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Centcom Systems supports businesses, schools and multi-site organisations with managed IT
          support, Microsoft 365, cybersecurity, cloud services and infrastructure expertise across
          London, Slough, Berkshire and the UK.
        </p>
      </div>

      <div className="mt-12 grid gap-10 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
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
          <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
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

            {formStatus ? <p className="text-sm leading-6 text-cyan-300">{formStatus}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
