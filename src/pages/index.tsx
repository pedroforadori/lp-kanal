import Link from "next/link";
import Apresentation from "../components/apresentation";
import One from "../components/one";
import Two from "../components/two";
import About from "../components/about";
import Video from "../components/video";
import Depoiment from "../components/depoiment";
import Question from "../components/question";
import NewBanker from "../components/new-banker";
import Footer from "../components/footer";
import DepoimentMobile from "../components/depoiment-mobile";

export default function Index() {
  return (
    <>
      <Apresentation />
      <One />
      <Two />
      <About />
      <Video />
      <div className="max-sm:hidden">
        <Depoiment />
      </div>
      <div id="isMobile">
        <DepoimentMobile />
      </div>
      <Question />
      <NewBanker />
      <Footer />
    </>
  )
}
