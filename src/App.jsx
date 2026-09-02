import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Impact } from './sections/Impact';
import { Skills } from './sections/Skills';
import { HealthWash } from './sections/HealthWash';
import { MealDev } from './sections/MealDev';
import { Education } from './sections/Education';
import { Trainings } from './sections/Trainings';
import { Leadership } from './sections/Leadership';
import { Contact } from './sections/Contact';

const sectionIds = [
  'hero',
  'about',
  'experience',
  'impact',
  'skills',
  'health-wash',
  'meal-dev',
  'education',
  'trainings',
  'leadership',
  'contact'
];

export function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Impact />
        <Skills />
        <HealthWash />
        <MealDev />
        <Education />
        <Trainings />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
