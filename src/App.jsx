import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfWebsitePage from "./pages/TermsOfWebsitePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import ManagedITSupportPage from "./pages/ManagedITSupportPage";
import CybersecurityServicesPage from "./pages/CybersecurityServicesPage";
import MicrosoftIntunePage from "./pages/MicrosoftIntunePage";
import ITSupportForSchoolsPage from "./pages/ITSupportForSchoolsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-website" element={<TermsOfWebsitePage />} />
        <Route path="cookie-policy" element={<CookiePolicyPage />} />
        <Route path="managed-it-support" element={<ManagedITSupportPage />} />
        <Route path="cybersecurity-services" element={<CybersecurityServicesPage />} />
        <Route path="microsoft-intune-support" element={<MicrosoftIntunePage />} />
        <Route path="it-support-for-schools" element={<ITSupportForSchoolsPage />} />
      </Route>
    </Routes>
  );
}
