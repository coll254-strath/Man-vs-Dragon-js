import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Dev | Frontend Developer</title>
        <meta name="description" content="Portfolio of Alex, a frontend developer specializing in creating modern web experiences" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}