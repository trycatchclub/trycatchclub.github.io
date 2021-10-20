import "./landing.scss";
import AppBar from "../containers/AppBar";
import Hero from "../containers/Hero";
import Description from "../containers/Description";
import AboutUs from "../containers/AboutUs";
import Timeline from "../containers/Timeline";
import Try from "../containers/Try";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <AppBar />
      <Hero />
      <Description />
      <AboutUs />
      <Timeline />
      <Try />
    </div>
  );
}
