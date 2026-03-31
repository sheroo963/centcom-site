import { Helmet } from "react-helmet-async";

const cookieSections = [
  {
    title: "Introduction",
    content:
      "This Cookie Policy explains how Centcom Systems uses cookies and similar technologies on this website. It applies to visitors in the United Kingdom and is intended to help you understand what cookies are, why they may be used and how you can manage them.",
  },
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small text files stored on your computer, phone or other device when you visit a website. They help websites function properly, remember preferences and, in some cases, provide information about how the site is used.",
  },
  {
    title: "What Are Scripts?",
    content:
      "Scripts are small pieces of code that help the website function correctly and interactively. They may run on our servers or on your device to support features and improve the user experience.",
  },
  {
    title: "What Are Web Beacons?",
    content:
      "Web beacons, sometimes called pixel tags, are small invisible elements placed on a page or in communications to help measure activity such as page visits or interactions.",
  },
  {
    title: "How We Use Cookies",
    content: (
      <div className="space-y-4">
        <p>
          We may use the following categories of cookies or similar technologies on this website:
        </p>
        <div>
          <p className="font-semibold text-white">Technical or Functional Cookies</p>
          <p>
            These help essential parts of the website work properly and remember basic preferences.
            They are generally used to support the operation of the site.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Statistics Cookies</p>
          <p>
            These help us understand how visitors use the website so we can improve performance,
            content and usability.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Marketing or Tracking Cookies</p>
          <p>
            These may be used to track browsing behaviour or support relevant advertising and
            marketing activity where applicable.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Third-Party Cookies",
    content:
      "Some cookies may be placed by third-party services that support website functionality, analytics, security or embedded content. Where relevant, those providers are responsible for how they process information collected through their own technologies.",
  },
  {
    title: "Consent",
    content:
      "When you first visit the website, you may be shown a cookie notice or preference tool. By accepting or saving your preferences, you consent to the categories of cookies you have selected. Essential cookies may still be used where they are necessary for the website to function.",
  },
  {
    title: "Managing Cookies",
    content:
      "You can manage or delete cookies through your browser settings. Most browsers allow you to block cookies, delete stored cookies or be notified when cookies are placed. Please note that disabling some cookies may affect how parts of the website function.",
  },
  {
    title: "Your Rights",
    content:
      "You may have rights in relation to any personal data processed through cookies or related technologies, including the right to request access, correction or deletion where applicable. You may also have the right to object to certain processing or withdraw consent where consent has been relied on.",
  },
  {
    title: "Updates to This Policy",
    content:
      "Centcom Systems may update this Cookie Policy from time to time to reflect changes in legal requirements, technology or how the website operates. Any updates will be published on this page.",
  },
];

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Helmet>
        <title>Cookie Policy | Centcom Systems</title>
        <meta
          name="description"
          content="Read the Centcom Systems Cookie Policy to understand how cookies and similar technologies may be used on this website and how you can manage them."
        />
      </Helmet>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Cookie Policy
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Cookie Policy</h1>
        <p className="mt-5 leading-8 text-slate-300">
          This Cookie Policy was last updated on 31 March 2026 and explains how Centcom Systems
          uses cookies and similar technologies on this website.
        </p>

        <div className="mt-8 space-y-6">
          {cookieSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <div className="mt-2 leading-7 text-slate-300">{section.content}</div>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2 leading-7 text-slate-300">
              If you have any questions about this Cookie Policy, please contact{" "}
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
