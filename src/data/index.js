import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Technical Sales Engineer",
    company_name: "InfasMe",
    date: "2024 - Present",
    details: [
      "",
      "",
      "",
    ],
  },
  {
    title: "Technical Team Lead",
    company_name: "Diqat Al tafaseel",
    date: "2023 - 2024",
    details: [
      "Led and coached a team of 6 to ensure efficiency by providing <span style='color: white;'>in-person</span> training on Google Sheets and Apps Script, reducing errors by double-checking all data entry with another team member.",
      "Generated weekly performance reports summarizing key metrics related to exam entries which becamecrucial reference points used at monthly review meetings with upper managementdiscussing productivity gains achieved.",
      "Coordinated student exam data for a team of 15k+ pupils, prompt and correct result handling and publishing.",
    ],
  },

  {
    title: "Computer Engineer",
    company_name: "University of Technology",
    date: "2020 - 2024",
    details: [
      "Conducted a research on <span style='color: white;'>network security vulnerabilities</span>, contributing to a university-wide initiative on enhancing digital safety.",
      "Completed a project about <span style='color: white;'>Bloom filters</span> and then made a custom-made tool that can identify harmful URLs and scored the highest.",
    ],
  },
];

const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };

