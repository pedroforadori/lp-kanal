import Link from "next/link";
import Apresentation from "../components/apresentation";
import One from "../components/one";
import Two from "../components/two";
import About from "../components/about";
import Video from "../components/video";
import Depoiment from "../components/depoiment";

export default function Index() {
  return (
    <>
      <Apresentation />
      <One />
      <Two />
      <About />
      <Video />
      <Depoiment />
    </>
  )
}
