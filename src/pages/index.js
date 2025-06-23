//Home

import Menu from "@/components/menu/menu"
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import ProjectsData from "@/components/projects/projects";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";

function Home() {
  return (
    <div>
      <Menu/>
      <Hero/>
      <ProjectsData/>
      <About />
      <Contact />
      <Footer/>
   </div>
    
  );
}

export default Home;
