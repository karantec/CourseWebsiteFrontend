import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Code,
  Brain,
  Users,
  Layers,
  FileText,
  Database,
  Map,
} from "lucide-react";

// Import your existing components
import CourseInfo from "../components/PageSegment/PageFirst";
import RevisionTable from "../components/PageSegment/Revision";
import DSAStepByStepPlan from "../components/PageSegment/CodingPlan";
import InterviewPrep from "../components/PageSegment/Interview";
import FullStackDevelopment from "../components/PageSegment/PageSecond";
import InterviewResources from "../components/PageSegment/PageThird";
import DataStructuresTable from "../components/PageSegment/PageFourth";
import DSAStudyPlan from "../components/PageSegment/DSAPlan";

const Home = () => {
  const [expandedChapters, setExpandedChapters] = useState({});

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const chapters = [
    {
      id: "course-overview",
      title: "Chapter 1: 851 Hour Course Link + Grand Prizes",
      icon: <BookOpen className="w-5 h-5" />,
      description:
        "Get started with your learning journey and understand the course structure",
      component: <CourseInfo />,
    },
    {
      id: "revision-fundamentals",
      title: "Chapter 2: Linkedin + Resume +Job Referral Support",
      icon: <FileText className="w-5 h-5" />,
      description: "Essential revision techniques and study materials",
      component: <RevisionTable />,
    },
    {
      id: "coding-practice",
      title: "Chapter 5: Beginner DSA Plan",
      icon: <Code className="w-5 h-5" />,
      description: "Structured approach to coding problems and solutions",
      component: <DSAStepByStepPlan />,
    },
    {
      id: "dsa-study-plan",
      title: "Chapter 3: Beginner DSA Plan",
      icon: <Map className="w-5 h-5" />,
      description: "Comprehensive study plan for mastering DSA concepts",
      component: <DSAStudyPlan />,
    },
    {
      id: "data-structures",
      title: "Chapter 4: Pro DSA Plan",
      icon: <Database className="w-5 h-5" />,
      description: "Complete reference guide for all data structures",
      component: <DataStructuresTable />,
    },

    {
      id: "interview-preparation",
      title: "Chapter 6: Technical Interview Preparation",
      icon: <Brain className="w-5 h-5" />,
      description: "Master the art of technical interviews",
      component: <InterviewPrep />,
    },
    {
      id: "fullstack-development",
      title: "Chapter 7: Full Stack Development Guide",
      icon: <Layers className="w-5 h-5" />,
      description: "Complete guide to full stack development technologies",
      component: <FullStackDevelopment />,
    },
    {
      id: "interview-resources",
      title: "Chapter 8: Interview Resources & Materials",
      icon: <Users className="w-5 h-5" />,
      description: "Additional resources and materials for interview success",
      component: <InterviewResources />,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Book Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="w-12 h-12 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold uppercase text-gray-800">
            Main course navigation website
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive guide covering everything from fundamentals to
          advanced topics in programming, DSA and interview preparation. <br />
          <span className="text-red-600 font-bold">
            {" "}
            (The Course; Training and Mentoring of this program are the most
            efficient in the whole country ; if you work daily exactly as per
            personalized schedule given by Kumar K in 1-1 Mentoring with faith
            in God no force in this world can stop you)
          </span>
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-blue-600" />
          Table of Contents
        </h2>
        <div className="grid gap-2">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className="flex items-center py-2 px-3 rounded hover:bg-gray-50 cursor-pointer"
            >
              {chapter.icon}
              <span className="ml-3 text-gray-700 hover:text-blue-600 transition-colors">
                {chapter.title}
              </span>
              <div className="ml-auto text-sm text-gray-500">
                Page {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <div className="space-y-6">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Chapter Header */}
            <div
              className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              onClick={() => toggleChapter(chapter.id)}
            >
              <div className="flex items-center">
                {chapter.icon}
                <div className="ml-3">
                  <h2 className="text-xl font-semibold">{chapter.title}</h2>
                  <p className="text-blue-100 text-sm mt-1">
                    {chapter.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {expandedChapters[chapter.id] ? (
                  <ChevronDown className="w-6 h-6 transform transition-transform duration-200" />
                ) : (
                  <ChevronRight className="w-6 h-6 transform transition-transform duration-200" />
                )}
              </div>
            </div>

            {/* Chapter Content */}
            {expandedChapters[chapter.id] && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  {chapter.component}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 py-8 border-t border-gray-200">
        <p className="text-gray-600">
          📚 Happy Learning! Remember to practice consistently and stay curious.
        </p>
      </div>
    </div>
  );
};

export default Home;
