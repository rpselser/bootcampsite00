import React, { useState } from "react";
import "./homework.css";
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

interface Homework {
  title: string;
  formUrl: string;
  description: string;
}

const homeworkList: Homework[] = [
  {
    title: "Portfolio Website",
    description: "Create a personal portfolio website to showcase your projects.",
    formUrl: "https://forms.gle/abcdefg1234567",
  },
  {
    title: "Flashcard App",
    description: "Build a flashcard app to practice JavaScript.",
    formUrl: "https://forms.gle/xyz987654321",
  },
  {
    title: "Flexbox Frog and CSS Work",
    description: "Complete the Flexbox Frog game and other CSS-related exercises.",
    formUrl: "https://forms.gle/12345678abcdefgh",
  },
  {
    title: "Memory Matching Game and React Docs",
    description: "Develop a memory matching game and read React documentation.",
    formUrl: "https://forms.gle/ijklmnopqrstuv",
  },
  {
    title: "Twitter App Clone",
    description: "Create a clone of Twitter and read more React documentation.",
    formUrl: "https://forms.gle/wxyz0987654321",
  },
];

const Homework: React.FC = () => {
  const [completed, setCompleted] = useState<boolean[]>(new Array(homeworkList.length).fill(false));

  const handleCheckboxChange = (index: number) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };

  const completedCount = completed.filter((isCompleted) => isCompleted).length;
  const totalCount = homeworkList.length;
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div>
      <NavBar
        brandName=""
        imageSrcPath={logo}
        navItems={[
          { name: "Home", path: "/home" },
          { name: "Announcements", path: "/announcements" },
          { name: "Attendance", path: "/attendance" },
          { name: "Resources", path: "/resources" },
          { name: "Homework", path: "/homework" },
        ]}
      />
      <div className="homework-container">
        <div className="homework-list">
          {homeworkList.map((homework, index) => (
            <div className="homework-box" key={index}>
              <input
                type="checkbox"
                id={`homework-${index}`}
                checked={completed[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={`homework-${index}`}>
                <h2 className={`homework-title ${completed[index] ? "completed" : ""}`}>
                  {homework.title}
                </h2>
                <p className="homework-description">{homework.description}</p>
                <a href={homework.formUrl} target="_blank" rel="noopener noreferrer" className="homework-link">
                  Submit Here
                </a>
              </label>
            </div>
          ))}
        </div>
        <div className="status-wheel-container">
          <div className="status-wheel">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="10" fill="none"></circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#4caf50"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - (completionPercentage / 100) * 283}
                transform="rotate(-90 50 50)"
              ></circle>
            </svg>
            <div className="completion-text">{Math.round(completionPercentage)}%</div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Homework;