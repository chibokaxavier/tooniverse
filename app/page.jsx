import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  );
}
