import React from "react";
import StudyPlanTable from "../PageSegment/PageFourth";
const DSAStudyPlan = () => {
  const roadmapNodes = [
    {
      id: 1,
      text: "Arrays & Strings",
      x: 200,
      y: 50,
      color: "bg-pink-100 border-pink-300 text-pink-800",
    },
    {
      id: 2,
      text: "Two Pointers",
      x: 350,
      y: 80,
      color: "bg-blue-100 border-blue-300 text-blue-800",
    },
    {
      id: 3,
      text: "Sliding Window",
      x: 100,
      y: 120,
      color: "bg-green-100 border-green-300 text-green-800",
    },
    {
      id: 4,
      text: "Binary Search",
      x: 300,
      y: 150,
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    },
    {
      id: 5,
      text: "Hashing",
      x: 50,
      y: 200,
      color: "bg-purple-100 border-purple-300 text-purple-800",
    },
    {
      id: 6,
      text: "Linked Lists",
      x: 200,
      y: 220,
      color: "bg-indigo-100 border-indigo-300 text-indigo-800",
    },
    {
      id: 7,
      text: "Stacks & Queues",
      x: 380,
      y: 200,
      color: "bg-red-100 border-red-300 text-red-800",
    },
    {
      id: 8,
      text: "Trees",
      x: 150,
      y: 280,
      color: "bg-teal-100 border-teal-300 text-teal-800",
    },
    {
      id: 9,
      text: "Graphs",
      x: 300,
      y: 300,
      color: "bg-orange-100 border-orange-300 text-orange-800",
    },
    {
      id: 10,
      text: "Dynamic Programming",
      x: 100,
      y: 350,
      color: "bg-cyan-100 border-cyan-300 text-cyan-800",
    },
    {
      id: 11,
      text: "Greedy",
      x: 280,
      y: 370,
      color: "bg-lime-100 border-lime-300 text-lime-800",
    },
    {
      id: 12,
      text: "Backtracking",
      x: 200,
      y: 420,
      color: "bg-rose-100 border-rose-300 text-rose-800",
    },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 8 },
    { from: 6, to: 7 },
    { from: 7, to: 9 },
    { from: 8, to: 10 },
    { from: 9, to: 11 },
    { from: 10, to: 12 },
    { from: 11, to: 12 },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">[Beginner DSA plan over]</p>
          <p className="text-sm text-gray-700 mb-4">
            Please do this summary before starting the real DSA plan →
            <a
              href="http://videsiqna.in"
              className="text-blue-600 underline hover:text-blue-800 ml-1"
            >
              Link (optional)
            </a>
          </p>
        </div>

        {/* PRO DSA PLAN Section */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            PRO DSA PLAN :->
          </h1>
          <h2 className="text-xl font-semibold text-red-700 mb-4">
            (Hard Level DSA + OA + CP)
          </h2>

          <div className="bg-white border border-red-300 rounded-md p-4 mb-4">
            <p className="text-red-800 font-medium mb-2">
              Watch this video to understand the best roadmap for PRO DSA PLAN
            </p>
            <p className="text-red-700 font-semibold">DSA + OA + CP -></p>
          </div>

          {/* Links Section */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <span className="text-red-600 mr-2">-></span>
              <a
                href="https://drive.google.com/file/d/16_arKkdOu7SkVeQ_6C7lux3lK-tlP3oU/view?usp=sharing"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                Link 1
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-2">-></span>
              <a
                href="https://drive.google.com/file/d/1TJNiXYBMSNVsBR5foj8_hMlMQcKixlif/view"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                Link 2
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-2">-></span>
              <a
                href="https://docs.google.com/document/d/1BELhqWnCV8NDUrrSzgOLadw52luSX0Zo8RS6nKWD6Jk/edit?tab=t.0"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                Doc
              </a>
            </div>

            <div className="flex items-center">
              <span className="text-red-600 mr-2">-></span>
              <a
                href="https://drive.google.com/file/d/1wwetU56GjlIeNRa__VeRrzdFoEItdxUa/view?usp=sharing"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                Guide 1
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-2">-></span>
              <a
                href="https://drive.google.com/file/d/1iEyCxG_PzwBs5Kb6JTRha0RDmZmTnB6n/view?usp=sharing"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                Guide 2
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-2">-></span>
              <a
                href="https://drive.google.com/file/d/1V2vpzwZrixIj4F5YILn8AODwbsc4Y13V/view?usp=sharing"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                Guide 3
              </a>
            </div>
          </div>

          {/* Specific Roadmap Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-red-700 mb-2">
              Specific Roadmap for OA :->
              <a
                href="https://www.youtube.com/watch?v=I6FKSXOEUPs&ab_channel=KumarK%5BAmazon%5D"
                className="text-blue-600 underline hover:text-blue-800 ml-1"
              >
                Link
              </a>
            </h3>
          </div>
        </div>

        {/* Roadmap Visualization */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-6">
          <div className="relative h-96 overflow-hidden">
            {/* SVG for connections */}
            <svg className="absolute inset-0 w-full h-full z-0">
              {connections.map((conn, index) => {
                const fromNode = roadmapNodes.find((n) => n.id === conn.from);
                const toNode = roadmapNodes.find((n) => n.id === conn.to);
                if (fromNode && toNode) {
                  return (
                    <line
                      key={index}
                      x1={fromNode.x + 40}
                      y1={fromNode.y + 15}
                      x2={toNode.x + 40}
                      y2={toNode.y + 15}
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  );
                }
                return null;
              })}
            </svg>

            {/* Topic Nodes */}
            {roadmapNodes.map((node) => (
              <div
                key={node.id}
                className={`absolute z-10 px-3 py-2 rounded-lg border-2 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-sm font-medium ${node.color}`}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {node.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-sm text-gray-700">
            Please do this summary before starting the real DSA plan →
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 ml-1"
            >
              Link
            </a>
          </p>
        </div>

        {/* Action Buttons */}

        {/* Progress Tracker */}
        <div className="mt-8 bg-gray-100 rounded-lg p-4"></div>
      </div>
      <StudyPlanTable />
    </>
  );
};

export default DSAStudyPlan;
