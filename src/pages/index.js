import Hero from "../components/Home/Hero";
import What from "../components/Home/What";
import Advantages from "../components/Home/Advantages";
import Gallery from "../components/Home/Gallery";
import Contacts from "../components/Home/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
        <What />
        <Advantages />
      <Gallery />
        <Contacts />
    </>
  )
}
