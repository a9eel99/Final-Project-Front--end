import Hero from "./componants/Hero";
import Courses from "./componants/Courses";
import Topics from "./componants/Topics";
import Discover from "./componants/Discover";
import Top_Courses from "./componants/Top_Courses";
import Achievement from "./componants/Achievement";
import Video from "./componants/Video";
import Company from "./componants/Company";
import Newsletter from "./componants/Newsletter";
import Blogs from "./componants/Blogs";
import Plan from "./componants/Plan";
import Online_Learning from "./componants/Online_Learning";

export default function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <Topics />
      <Discover />
      <Top_Courses />
      <Achievement />
      <Video />
      <Company />
      <Online_Learning img={"/image/about5.png"} />
      <Plan />
      <Newsletter />
      <Blogs />
    </div>
  );
}
