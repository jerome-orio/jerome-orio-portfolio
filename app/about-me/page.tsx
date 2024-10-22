
import VerticalTabss from '@/components/VerticalTabs';
import AboutMe from '@/app/about-me/AboutMe';
import Experience from '@/app/about-me/Experience';
import Skills from '@/app/about-me/Skills';
import Education from '@/app/about-me/Education';

type Tabs = {
  id: string;
  label: string;
  content: React.ReactNode; // Include content directly in the tab definition
};

const tabs: Tabs[] = [
  { id: 'tab1', label: 'About Me', content: <AboutMe /> },
  { id: 'tab2', label: 'Experience', content: <Experience /> },
  { id: 'tab3', label: 'Skills', content: <Skills /> },
  { id: 'tab4', label: 'Education', content: <Education /> },
]

const AboutMePage = () => {
  return (
    <>
      <div className="hero-overlay container mx-auto p-4 md:px-20 md:py-10 bg-opacity-45 animate-fadeIn">
        <VerticalTabss tabs={tabs} />
      </div>
    </>
    );
};

export default AboutMePage;
