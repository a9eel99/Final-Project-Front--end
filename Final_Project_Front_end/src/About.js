import AboutUsHero from "./componants/AboutUsHero";
import Courses from "./componants/Courses";
import Discover from "./componants/Discover";
import Best_Features from "./componants/Best_Features";
import Achievement from "./componants/Achievement";
import Company from "./componants/Company";
import Instructors from "./componants/Instructors";
import FAQ from "./componants/FAQ";



export default function About() {
  return (
    <div className="contenars">
      <AboutUsHero title={"About Us"} />
      <Courses />
      <Discover />
      <Best_Features />
      <Achievement />
      <Instructors />
      <FAQ />
      <Company />
    </div>
  );
}
