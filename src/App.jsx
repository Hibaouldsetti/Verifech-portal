import React, { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import ChatbotWithButton from "./chatbot/ChatbotWithButton";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Features } from "./components/features";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Services } from "./components/services";
import JsonData from "./data/data.json";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} data2={landingPageData.Features2}/>
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} data2={landingPageData.Services2} />
      {/* <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
      <ChatbotWithButton />
    </div>
  );
};

export default App;
