import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import { useSkylab, SkylabProvider } from "./skylab";

export const App = () => {
  return (
    <SkylabProvider user={{ user_id: "user_id" }}>
      <Main />
    </SkylabProvider>
  );
};

const Main = () => {
  const landingPageData = JsonData;
  const { loaded } = useSkylab();
  return (
    loaded && (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
    )
  );
};

export default App;
