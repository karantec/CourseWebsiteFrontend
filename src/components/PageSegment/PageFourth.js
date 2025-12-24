import React from "react";

const StudyPlanTable = () => {
  const studyPlan = [
    {
      id: 1,
      topic: "Hashing",
      subtopic: "(Prefix/Suffix Sum/structure In-depth knowledge and tricks)",
      steps: [
        {
          title: "Written Tutorial",
          description: "(First do this)",
          link: "https://www.desiqna.in/hashing+find+frequency+of+each+number+in+the+array",
          priority: 1,
        },
        {
          title: "Hashing Videos",
          description: "(Second do this for OA + CP + Interview prep)",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 2,
        },
        {
          title: "Hashing Practice Question List",
          description: "(Third do this for Only Interview prep)",
          link: "https://docs.google.com/document/d/1NzfS0sHasRwIZ94CA3oL6ymzmnabn1vTpSTJiIAFDEM/edit",
          priority: 3,
        },
        {
          title: "Hashing Theory for Interviews",
          description: "(Fourth do this for Only Interview prep)",
          link: "https://docs.google.com/document/d/1zKoi25NjOLL97qlpWzI7D3FTfoRFgUSRno8liAk8odM/edit",
          priority: 4,
        },
      ],
    },
    {
      id: 2,
      topic: "Hashing",
      subtopic: "[Fundamentals Building]",
      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
      ],
    },
    {
      id: 3,
      topic: "Hashing mixed",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 4,
      topic: "Hashing Mixed With Prefix Sum",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 5,
      topic: "Hashing Frequency Concept",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 5,
      topic: "Hashing Range Update Query",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 5,
      topic: "Hashing Kadane Algorithm",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 5,
      topic: "Hashing Trick Concept",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 5,
      topic: "Hashing Mathematical Concept",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 6,
      topic: "Hashing Mixed wih Prefix +Suffix+binary Search",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 7,
      topic: "",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },

    {
      id: 8,
      topic: "Hashing Miscellaneous",
      subtopic: "",
      steps: [
        {
          title: "Same link",
          description: "",
          priority: 1,
        },
      ],
    },
    {
      id: 9,
      topic: "Two Pointers",
      subtopic: "[Fundamentals Building]",
      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },

        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 2,
        },
      ],
    },
    {
      id: 10,
      topic: "Sliding Window",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },

        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 2,
        },
      ],
    },

    {
      id: 11,
      topic: "implementation+observation",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
      ],
    },

    {
      id: 12,
      topic: "String",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 1,
        },
      ],
    },
    {
      id: 13,
      topic: "Binary Search",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 1,
        },
      ],
    },
    {
      id: 14,
      topic: "Linked List",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 1,
        },
      ],
    },

    {
      id: 15,
      topic: "Array Warm-up",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
      ],
    },
    {
      id: 16,
      topic: "Searching + Sorting",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 1,
        },
      ],
    },

    {
      id: 17,
      topic: "heap",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 1,
        },
      ],
    },
    {
      id: 17,
      topic: "Greedy",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1n6sJngGMtNKCWyl80wj9H79VGb9AhUygjy7sBWpAqnY/edit?tab=t.0",
          priority: 2,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 3,
        },
      ],
    },

    {
      id: 18,
      topic: "Stack and Queue",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1n6sJngGMtNKCWyl80wj9H79VGb9AhUygjy7sBWpAqnY/edit?tab=t.0",
          priority: 2,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 3,
        },
      ],
    },
    {
      id: 20,
      topic: "Recursion and Backtracking",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
      ],
    },
    {
      id: 21,
      topic: "Binary Tree",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 2,
        },
      ],
    },
    {
      id: 22,
      topic: "Binary Search Tree",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 2,
        },
      ],
    },
    {
      id: 23,
      topic: "Dynamic Programming",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1eOPwuTEbpeTy_XfobFN109OZHz-S8Hgvxh2CixABYF8/edit",
          priority: 2,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 3,
        },
      ],
    },
    {
      id: 24,
      topic: "Graph and General Trees",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1bFmHKJDJtxO0U1t1gsr0UVWLBwssbICwBGo3llwzG6k/edit",
          priority: 2,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 3,
        },
      ],
    },

    {
      id: 25,
      topic: "Trie",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 2,
        },
      ],
    },
    {
      id: 26,
      topic: "Bit Manipulation",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 2,
        },
      ],
    },
    {
      id: 27,
      topic: "Maths and Number Theory",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1ox7meTB0RfuO7VQ7EUc7prKVimZetas0Y2mn4eF9XxE/edit?tab=t.0",
          priority: 1,
        },
      ],
    },
    {
      id: 28,
      topic: "Kumar K interview Sheet",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/spreadsheets/d/1Cbzz94wljkGSHJ3XS0xXvbdLKz0L2yGr/edit?gid=451760203#gid=451760203",
          priority: 1,
        },
      ],
    },
    {
      id: 29,
      topic: "Contest Course",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1K4spCUSfy0lu2pCDL6kr9IRLRpU2H-BBE0NRVV8yme4/edit",
          priority: 1,
        },
      ],
    },
    {
      id: 30,
      topic: "DSA Questions Topic wise Sheet",

      steps: [
        {
          title: "Link",
          description: "",
          link: "https://docs.google.com/document/d/1JkMpSAkzpOeBwrjCHEMH9QBvHwo_EuaVb-_0fRusThA/edit",
          priority: 1,
        },
      ],
    },
  ];

  const getLinkColor = (priority) => {
    const colors = {
      1: "text-blue-600 hover:text-blue-800",
      2: "text-green-600 hover:text-green-800",
      3: "text-purple-600 hover:text-purple-800",
      4: "text-orange-600 hover:text-orange-800",
    };
    return colors[priority] || "text-blue-600 hover:text-blue-800";
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      1: "bg-blue-100 text-blue-800",
      2: "bg-green-100 text-green-800",
      3: "bg-purple-100 text-purple-800",
      4: "bg-orange-100 text-orange-800",
    };
    return badges[priority] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Now .. do topics in the given Manner :
        </h1>
        <p className="text-lg text-gray-700 italic">
          (Go from left → right for each topic)
        </p>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="px-4 py-3 text-left font-bold text-gray-900 border-r border-gray-300 w-16">
                #
              </th>
              <th className="px-4 py-3 text-left font-bold text-gray-900 border-r border-gray-300 w-80">
                Topic
              </th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 border-r border-gray-300 w-48">
                Step 1
              </th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 border-r border-gray-300 w-48">
                Step 2
              </th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 border-r border-gray-300 w-48">
                Step 3
              </th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 w-48">
                Step 4
              </th>
            </tr>
          </thead>
          <tbody>
            {studyPlan.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-300 hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-6 border-r border-gray-300 align-top">
                  <span className="text-lg font-bold text-gray-900">
                    {item.id})
                  </span>
                </td>

                <td className="px-4 py-6 border-r border-gray-300 align-top">
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-gray-900">
                      {item.topic}
                    </div>
                    {item.subtopic && (
                      <div className="text-sm text-gray-700 leading-relaxed">
                        {item.subtopic}
                      </div>
                    )}
                  </div>
                </td>

                {/* Create 4 columns for steps */}
                {[1, 2, 3, 4].map((stepNum) => {
                  const step = item.steps.find((s) => s.priority === stepNum);
                  return (
                    <td
                      key={stepNum}
                      className={`px-4 py-6 align-top text-center ${
                        stepNum < 4 ? "border-r border-gray-300" : ""
                      }`}
                    >
                      {step ? (
                        <div className="space-y-2">
                          <div>
                            <a
                              href={step.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`font-medium underline transition-colors duration-200 ${getLinkColor(
                                step.priority
                              )}`}
                            >
                              {step.title}
                            </a>
                          </div>

                          {step.description && (
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {step.description}
                            </div>
                          )}

                          <div>
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(
                                step.priority
                              )}`}
                            >
                              Priority {step.priority}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-400 text-sm">-</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* Empty rows to match the original table structure */}
            {[4, 5, 6, 7, 8, 9, 10].map((rowNum) => (
              <tr key={rowNum} className="border-b border-gray-300 h-20">
                <td className="px-4 py-6 border-r border-gray-300 align-top">
                  <span className="text-lg font-bold text-gray-900">
                    {rowNum})
                  </span>
                </td>
                <td className="px-4 py-6 border-r border-gray-300"></td>
                <td className="px-4 py-6 border-r border-gray-300 text-center">
                  <div className="text-gray-400 text-sm">-</div>
                </td>
                <td className="px-4 py-6 border-r border-gray-300 text-center">
                  <div className="text-gray-400 text-sm">-</div>
                </td>
                <td className="px-4 py-6 border-r border-gray-300 text-center">
                  <div className="text-gray-400 text-sm">-</div>
                </td>
                <td className="px-4 py-6 text-center">
                  <div className="text-gray-400 text-sm">-</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Instructions Panel */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-800 mb-3">
          Study Instructions:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-blue-700">
          <div>
            <strong>Step 1 - Written Tutorial:</strong> Start with theory and
            concepts
          </div>
          <div>
            <strong>Step 2 - Videos:</strong> Visual learning for OA + CP +
            Interview prep
          </div>
          <div>
            <strong>Step 3 - Practice:</strong> Solve problems for interview
            preparation
          </div>
          <div>
            <strong>Step 4 - Theory:</strong> Deep dive for advanced interview
            topics
          </div>
        </div>
      </div>

      {/* Add New Topic Form */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          Quick Actions:
        </h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors duration-200">
            Add New Topic
          </button>
          <button className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition-colors duration-200">
            Mark Complete
          </button>
          <button className="px-3 py-1 bg-purple-500 text-white text-xs rounded hover:bg-purple-600 transition-colors duration-200">
            Export Plan
          </button>
          <button className="px-3 py-1 bg-orange-500 text-white text-xs rounded hover:bg-orange-600 transition-colors duration-200">
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanTable;
