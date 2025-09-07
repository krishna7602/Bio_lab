import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DirectorMessage from "../components/DirectorMessage";

import WhatsNew from "../components/WhatsNew";
import Gallery from "../components/Gallery";
import UsefulLinks from "../components/UsefulLinks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import People from "../components/People.jsx";
import Publications from "../components/Publications.jsx";
import ResearchAreas from "../components/ResearchAreas";
import ImpinfoCrousal from "../components/ImpinfoCrousal.jsx";

export default function Home() {
// List of all components used in this file:
// Navbar, Hero, DirectorMessage, SecretaryMessage, WhatsNew, Gallery, UsefulLinks, Contact, Footer

return (
    <>
        <Navbar />
        <Hero />
        <ImpinfoCrousal/>
        <DirectorMessage />
        <People/>
        <ResearchAreas/>
        <Publications/>
        <WhatsNew />
        <Gallery />
        <UsefulLinks />
        <Contact />
        <Footer />
    </>
);
}
