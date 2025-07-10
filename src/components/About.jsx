
import { useState, useEffect } from 'react';

const timelineData = [
  {
    title: 'Postdoc — NORCE Research',
    time: '2024–Present',
    icon: 'academic-cap'
  },
  {
    title: 'Affiliated Researcher — Bjerknes Centre',
    time: '2024–Present',
    icon: 'academic-cap'
  },
  {
    title: 'Executive Committee — YESS',
    time: 'March 2025',
    icon: 'user-group'
  },
  {
    title: 'Regional Rep — YESS',
    time: 'April 2024 – April 2025',
    icon: 'user-group'
  },
  {
    title: 'Expert Reviewer — IPCC',
    time: '2020–2021',
    icon: 'document-text'
  },
  {
    title: 'Graduate Student — IITM',
    time: '2015–2017',
    icon: 'academic-cap'
  },
  {
    title: 'PhD — Hokkaido University',
    time: '2007',
    icon: 'academic-cap'
  },
  {
    title: 'MSc — Pune University',
    time: '2002',
    icon: 'academic-cap'
  },
  {
    title: 'BSc Physics — Delhi University',
    time: '2000',
    icon: 'academic-cap'
  },
];

export default function About() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="max-w-3xl mx-auto p-8 font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img src="/XYZ.png" alt="Pratik Kad" className="w-20 h-20 rounded-full border-4 border-blue-600" />
          <h1 className="text-3xl font-bold">About Me</h1>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setDark(!dark)}
          className="text-2xl"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </header>

      <nav className="mb-8">
        <a href="/" className="mr-4 text-blue-600 hover:underline">Home</a>
        <a href="/research" className="mr-4 text-blue-600 hover:underline">Research</a>
        <a href="/publications" className="mr-4 text-blue-600 hover:underline">Publications</a>
        <a href="/about" className="text-blue-600 hover:underline">About</a>
      </nav>

      <p className="mb-4">
        I'm a Postdoc at NORCE Research in Bergen, Norway, affiliated with the Bjerknes Centre for Climate Research.
        I explore weather and climate processes — from mountain meteorology to oceanography and biodiversity.
      </p>

      <p className="mb-8">
        Outside work, I enjoy hiking, birdwatching, and chess. I also serve on the Executive Committee of the Young Earth System Scientists (YESS) community.
      </p>

      <h2 className="text-2xl font-bold text-blue-600 mb-4">CV Timeline</h2>

      <div className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-8">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white">
              {/* Icon can be replaced with Heroicons or any SVG */}
              🎓
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.time}</p>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        Pratik Kad © 2024 All Rights Reserved
      </footer>
    </div>
  );
}
