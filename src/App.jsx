import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ManagedITSupportPage from "./pages/ManagedITSupportPage";
import CybersecurityServicesPage from "./pages/CybersecurityServicesPage";
import MicrosoftIntunePage from "./pages/MicrosoftIntunePage";
import ITSupportForSchoolsPage from "./pages/ITSupportForSchoolsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="managed-it-support" element={<ManagedITSupportPage />} />
        <Route path="cybersecurity-services" element={<CybersecurityServicesPage />} />
        <Route path="microsoft-intune-support" element={<MicrosoftIntunePage />} />
        <Route path="it-support-for-schools" element={<ITSupportForSchoolsPage />} />
      </Route>
    </Routes>
  );
}