import React, { useState } from "react";

const DSAStepByStepPlan = () => {
  const [completedItems, setCompletedItems] = useState(new Set());
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const toggleComplete = (stepIndex, itemIndex) => {
    const key = `${stepIndex}-${itemIndex}`;
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(key)) {
      newCompleted.delete(key);
    } else {
      newCompleted.add(key);
    }
    setCompletedItems(newCompleted);
  };

  const languages = ["C++", "Java", "Python"];

  const steps = [
    {
      title: "Baby Step",
      description: "We Assume, You are new to coding and know nothing",
      note: "Please write code for all the questions and videos taught in the course; it is not a movie; don't just watch video; write code for it as well; run and test in the compiler",
      items: [
        {
          type: "Baby Step",
          task: "First, do this",
        },
        {
          type: "Python",
          task: "Link",
          link: "https://docs.google.com/document/d/1p0pHkkN_Pez2mnUBgz9c0Tq-lyy3DgTuaVB7l4w9Fls/edit?usp=sharing",
        },
        {
          type: "C++",
          task: "Link",
          link: "https://docs.google.com/document/d/1JihVUiL8YKlI4FpdaEXdjTg7G9H94CJmgcw1RdSQ5ZM/edit?usp=sharing",
        },
        {
          type: "Java",
          task: "Link",
          link: "https://docs.google.com/document/d/1tEjKB5msG8fzp15AcRu4O0yJgM-acM3K2pjA2Lwqwto/edit",
        },
      ],
    },
    {
      title: "Step 0",
      description: "Second, do this",
      items: [
        {
          type: "Python",
          task: "Link",
          link: "https://docs.google.com/document/d/1ACvGGDuzAdcSaupLK2n01hFnJlGi0hWoLYqBVS0KJmc/edit",
        },
        {
          type: "C++",
          task: "Link",
          link: "https://docs.google.com/document/d/1YnngmvZaoHJtZhy7wAcQpmHQPvhp0aNsyAi8kzVofDU/edit",
        },
        {
          type: "Java",
          task: "Link",
          link: "https://docs.google.com/document/d/1GJmXtVhgOD2nKF92PlRnUNlc4piRT0OyBX2L-Cd1KDs/edit",
        },
      ],
    },
    {
      title: "Step1",
      description: "Third, do this",
      items: [
        {
          type: "Python",
          task: "Link",
          link: "https://docs.google.com/document/d/1P_7364VlECaZbjCa8jEoXYbCClP0LDewcIaoJf-cDCI/edit",
        },
        {
          type: "C++",
          task: "Link",
          link: "https://docs.google.com/document/d/1A95uqkh78f71Iqwe5ANKujpVrhbeGvjK0fIZBF_K7gM/edit",
        },
        {
          type: "Java",
          task: "Link",
          link: "https://docs.google.com/document/d/1X_FZE3GrB7BOLtsLhaNGJcL9Gy7xGTCjmd2Bmc88INo/edit",
        },
      ],
    },

    {
      title: "Step2",
      description: "Fourth",
      items: [
        {
          type: "Python",
          task: "Link",
          link: "https://www.hackerearth.com/practice/notes/standard-template-library/",
        },
        {
          type: "C++",
          task: "Link",
          link: "https://docs.google.com/document/d/1A95uqkh78f71Iqwe5ANKujpVrhbeGvjK0fIZBF_K7gM/edit",
        },
        {
          type: "Java",
          task: "Link",
          link: "https://docs.google.com/document/d/1X_FZE3GrB7BOLtsLhaNGJcL9Gy7xGTCjmd2Bmc88INo/edit",
        },
      ],
    },

    {
      title: "Step3",
      description: "Fifth",
      items: [
        {
          type: "Question1",
          task: "Link",
          link: "https://leetcode.com/contest/weekly-contest-318/problems/apply-operations-to-an-array/",
        },
        {
          type: "Question2",
          task: "Link",
          link: "https://leetcode.com/contest/weekly-contest-316/problems/determine-if-two-events-have-conflict/",
        },
      ],
    },

    {
      title: "Step4",
      description: "Pre-Requisites for DSA",
      items: [
        {
          type: "Pro Plan Prerequisite",
          task: "Link",
          link: "http://videsiqna.in",
        },
      ],
    },
  ];

  const totalItems = steps.reduce((sum, step) => sum + step.items.length, 0);
  const completedCount = completedItems.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <h1 className="text-6xl font-bold text-red-600 mb-4">DSA</h1>
            <h2 className="text-3xl font-bold text-red-700 mb-6">
              (BEGINNER CODING PLAN)
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                🎯 Compulsory Video Roadmap + Mindset for Beginner in DSA/Coding
              </h3>
              <a
                href="https://drive.google.com/file/d/1SoBnpeMUBvbi6-E3pgcKtt3HG4r69ec0/view?usp=sharing"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 text-xl"
              >
                📖 Link
              </a>
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              💻 Select Your Programming Language
            </h3>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg mb-6">
              <p className="font-semibold text-lg">
                Select any one (C++/Java/Py) and start doing the course :-&gt;
                Baby step -&gt; step0 -&gt; step1 -&gt; step2 -&gt; step3 -&gt;
                step4 -&gt; PRO DSA Plan!
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedLanguage === lang
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-red-400 hover:text-red-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            {selectedLanguage && (
              <div className="mt-6 text-center">
                <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                  ✅ {selectedLanguage} Selected - Let's Start Coding!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Overview */}

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, stepIndex) => (
            <div
              key={stepIndex}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            >
              {/* Step Header */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{step.title}</h2>
                    <p className="text-xl opacity-90">{step.description}</p>
                  </div>
                  <div className="text-6xl opacity-50">
                    {stepIndex === 0 ? "👶" : stepIndex === 1 ? "🚀" : "💪"}
                  </div>
                </div>
                {step.note && (
                  <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-yellow-100 font-medium">
                      ⚠️ <strong>Important:</strong> {step.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Step Content */}
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="px-4 py-3 text-left font-semibold text-gray-800 w-16">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">
                          Language/Type
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">
                          Task
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">
                          Action
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {step.items.map((item, itemIndex) => {
                        const key = `${stepIndex}-${itemIndex}`;
                        const isCompleted = completedItems.has(key);
                        const isHighlighted =
                          selectedLanguage && item.type === selectedLanguage;

                        return (
                          <tr
                            key={itemIndex}
                            className={`border-b border-gray-200 transition-colors ${
                              isCompleted
                                ? "bg-green-50"
                                : isHighlighted
                                ? "bg-red-50 hover:bg-red-100"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <td className="px-4 py-4">
                              <button
                                onClick={() =>
                                  toggleComplete(stepIndex, itemIndex)
                                }
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                                  isCompleted
                                    ? "bg-green-500 border-green-500 text-white"
                                    : "border-gray-300 hover:border-green-400"
                                }`}
                              >
                                {isCompleted && "✓"}
                              </button>
                            </td>
                            <td className="px-4 py-4">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                  item.type === "Baby Step"
                                    ? "bg-purple-100 text-purple-800"
                                    : item.type === "Python"
                                    ? "bg-blue-100 text-blue-800"
                                    : item.type === "C++"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-orange-100 text-orange-800"
                                } ${
                                  isHighlighted ? "ring-2 ring-red-400" : ""
                                }`}
                              >
                                {item.type}
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <span
                                className={`font-medium ${
                                  isCompleted
                                    ? "line-through text-gray-500"
                                    : "text-gray-800"
                                }`}
                              >
                                {item.task}
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <a
                                href={item.link}
                                className={`inline-block px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                                  isHighlighted
                                    ? "bg-red-500 hover:bg-red-600 text-white"
                                    : "bg-blue-500 hover:bg-blue-600 text-white"
                                }`}
                              >
                                🔗 Access
                              </a>
                            </td>
                            <td className="px-4 py-4">
                              <input
                                type="text"
                                placeholder="Add your notes..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps Preview */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default DSAStepByStepPlan;
