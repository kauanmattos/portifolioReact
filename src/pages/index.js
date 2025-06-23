//Home

import Menu from "@/components/menu/menu"
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import ProjectsData from "@/components/projects/projects";

function Home() {
  return (
    <div>
      <Menu></Menu>
      <Hero></Hero>
      <ProjectsData></ProjectsData>
      <Footer></Footer>
   </div>
    
  );
}

export default Home;
