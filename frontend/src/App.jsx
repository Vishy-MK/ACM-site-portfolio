import "./App.css";
import { NavBar } from "@/components/nav-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const KnowUs = React.lazy(() => import("@/pages/KnowUs"));
const Announcements = React.lazy(() => import("./pages/Announcements"));
const DomainsPage = React.lazy(() => import("./pages/DomainsPage"));
const RootLayout = React.lazy(() => import("./layouts/RootLayout"));
const CodingPage = React.lazy(() => import("./pages/domains/coding"));
const AIMLPage = React.lazy(() => import("./pages/domains/ai-ml"));
const ResearchPage = React.lazy(() => import("./pages/domains/research"));
const WebDevPage = React.lazy(() => import("./pages/domains/webdev"));
const AppDevPage = React.lazy(() => import("./pages/domains/appdev"));
const DesignPage = React.lazy(() => import("./pages/domains/design"));
const AdminLogin = React.lazy(() => import("./pages/adminLogin"));
const Footer = React.lazy(() => import("./components/Footer"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

const CodingResourcesPage = React.lazy(() =>
  import("./pages/domains copy/coding")
);
const AIMLResourcesPage = React.lazy(() =>
  import("./pages/domains copy/ai-ml")
);
const ResearchResourcesPage = React.lazy(() =>
  import("./pages/domains copy/research")
);
const WebDevResourcesPage = React.lazy(() =>
  import("./pages/domains copy/webdev")
);
const AppDevResourcesPage = React.lazy(() =>
  import("./pages/domains copy/appdev")
);
const DesignResourcesPage = React.lazy(() =>
  import("./pages/domains copy/design")
);
const RootLayoutResources = React.lazy(() =>
  import("./layouts/RootLayoutResources")
);
const LandingPageAnimation = React.lazy(() =>
  import("./pages/LandingPageAnimation")
);
import { useEffect, useState } from "react";

function App() {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const onStart = () => setShowFooter(false);
    const onComplete = () => setShowFooter(true);

    window.addEventListener("landingAnimationStart", onStart);
    window.addEventListener("landingAnimationComplete", onComplete);

    return () => {
      window.removeEventListener("landingAnimationStart", onStart);
      window.removeEventListener("landingAnimationComplete", onComplete);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="p-8 z-10 bg-opacity-75 bg-white backdrop-blur-md fixed top-0 left-0 right-0">
          <NavBar />
        </div>

        <main className="mt-20">
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<LandingPageAnimation />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/know-us" element={<KnowUs />} />
              <Route path="/the-hub" element={<DomainsPage />} />
              <Route path="/domains/*" element={<RootLayout />}>
                <Route path="ai-ml" element={<AIMLPage />} />
                <Route path="coding" element={<CodingPage />} />
                <Route path="research" element={<ResearchPage />} />
                <Route path="webdev" element={<WebDevPage />} />
                <Route path="appdev" element={<AppDevPage />} />
                <Route path="design" element={<DesignPage />} />
              </Route>
              <Route path="/resources/*" element={<RootLayoutResources />}>
                <Route path="ai-ml" element={<AIMLResourcesPage />} />
                <Route path="coding" element={<CodingResourcesPage />} />
                <Route path="research" element={<ResearchResourcesPage />} />
                <Route path="webdev" element={<WebDevResourcesPage />} />
                <Route path="appdev" element={<AppDevResourcesPage />} />
                <Route path="design" element={<DesignResourcesPage />} />
              </Route>
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {showFooter && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
