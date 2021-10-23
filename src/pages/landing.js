import "./landing.scss";
import AppBar from "../containers/AppBar";
import Hero from "../containers/Hero";
import Description from "../containers/Description";
import AboutUs from "../containers/AboutUs";
import Timeline from "../containers/Timeline";
import Try from "../containers/Try";
import Footer from "../containers/Footer";
import Ask from "../containers/Ask";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <AppBar />
      <Hero />
      <Description />
      <AboutUs />
      <Timeline />
      <Try />
      <Ask />
      <Footer />
    </div>
  );
}
