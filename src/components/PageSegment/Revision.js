import React, { useState } from "react";

const RevisionTable = () => {
  const [completedItems, setCompletedItems] = useState(new Set());

  const toggleComplete = (index) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedItems(newCompleted);
  };

  const tableData = [
    {
      title: "How to explain the project in Interview",

      action: "Read this article",
      link: "https://docs.google.com/document/d/1TtsjlKdSGZ0fM9JgbdBkv_QtPNZJKhTagL6MYpBWSCw/edit",
      type: "article",
    },
    {
      title: "Resume Guide",
      action: "Read this article and watch the video",
      link: "https://docs.google.com/document/d/1YpcIhEoVBAnV27Yxhe4mfjSrepfOeIkBFYd05kuU-yA/edit?tab=t.0",
      type: "article-video",
    },
    {
      title: "LinkedIn Guide",
      action: "Read this article",
      link: "https://docs.google.com/document/d/13ql7XU9MMTX5tEkK_cv9P0cj6Bc86LxhmpfVYl6K61Q/edit?tab=t.0",
      type: "article",
    },

    {
      title: "Rules to get Job Referrals from our Cohort",
      action: "Read this article",
      link: "https://docs.google.com/document/d/1Sh11g-fxruouymnoFg5T9wK2iCuTo155k5RhPSMWOLU/edit?tab=t.0",
      type: "article",
    },
    {
      title: "Referral Document",
      action: "Read this article",
      link: "https://docs.google.com/document/d/1wbNuCxGoh4CzljkFD_kKHqWhRM5dXEK7B9a8S8Zy-eQ/edit?usp=sharing",
      type: "article",
    },
    {
      title: "Coding Interview Prep/Etiquette Video",
      action: "Watch this video",
      link: "https://drive.google.com/file/d/1UcZasHMtK4fhErvVamKA6Cb3fuDuBMJV/view",
      type: "video",
    },
    {
      title: "SDE Intern @ITJOBXS",
      action: "Read the article",
      link: "https://docs.google.com/document/d/1p6cYauYBEiDzMMe2Y3D1N6r98BgpxP0LIiY_R1-LxOw/edit?usp=sharing",
      type: "article",
    },
    {
      title: "Coding Strategy Video",
      action: "Watch this video",
      link: "https://drive.google.com/file/d/135T0fcU69kZX9q5TBNFWAd8FF8OU8nEL/view?usp=sharing",
      type: "video",
    },
    {
      title: "Non Coding Session",
      action: "Watch this video",
      link: "https://drive.google.com/file/d/1UoD3JAYOfRCKIGQZqHrR0xv1B7gDTbHo/view?usp=sharing",
      type: "video",
    },
    {
      title: "Understand your coding plan",
      action: "Watch this video",
      link: "https://drive.google.com/file/d/18XMT-L9L3TNOJoMtJmlbVbPPH_W7DjgF/view",
      type: "video",
    },
    {
      title: "CS Fundamentals Course",
      action: "Watch the videos and articles",
      link: "https://docs.google.com/document/d/1XlU6gHf-g_N_SChtS4A9zgzIRW6D1fbdpaDs_AiTxPI/edit?usp=sharing",
      type: "course",
    },
    {
      title: "51 hour Off Campus course",
      action: "Watch all the videos and read all the articles",
      link: "https://docs.google.com/document/d/11t52uRJE8r9Vq8rR_Tq79GYj1iHU7X-LviHbnJPselg/edit?tab=t.0",
      type: "course",
    },
  ];

  const githubProfiles = [
    {
      url: "https://github.com/om851",
    },
    {
      url: "https://github.com/Anton003",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "article":
        return "📄";
      case "video":
        return "🎥";
      case "article-video":
        return "📄🎥";
      case "course":
        return "🎓";
      default:
        return "📚";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "article":
        return "bg-blue-100 text-blue-800";
      case "video":
        return "bg-red-100 text-red-800";
      case "article-video":
        return "bg-purple-100 text-purple-800";
      case "course":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              📋This is how you maintain Revision Document
            </h1>
            <p className="text-xl text-gray-600"></p>
            <div className="mt-4">
              <a
                href="https://docs.google.com/document/d/1OBJgMnOeVFjVrwy3jmaTinkT9xZaINADN_lhLhlkTEI/edit"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🎯 Desi QnA Earn Cash Back Program🎉🥳
              </a>
            </div>
          </div>
        </div>

        {/* Progress Bar */}

        {/* Main Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Resource
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Action Required
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Access</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => {
                  const isCompleted = completedItems.has(index);
                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-blue-50/50 transition-colors ${
                        isCompleted ? "bg-green-50/50" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleComplete(index)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                            isCompleted
                              ? "bg-green-500 border-green-500 text-white"
                              : "border-gray-300 hover:border-green-400"
                          }`}
                        >
                          {isCompleted && "✓"}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className={`font-medium ${
                            isCompleted
                              ? "line-through text-gray-500"
                              : "text-gray-800"
                          }`}
                        >
                          <span className="text-xl mr-2">
                            {getIcon(item.type)}
                          </span>
                          {item.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`${
                            isCompleted
                              ? "line-through text-gray-500"
                              : "text-gray-600"
                          }`}
                        >
                          {item.action}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                            item.type
                          )}`}
                        >
                          {item.type.replace("-", " & ")}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={item.link}
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105"
                        >
                          Access
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* GitHub Profiles Section */}
        <div className="mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-3xl mr-3">💻</span>
              GitHub Profiles
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 text-white">
                <p className="text-lg mb-4">
                  → GitHub Profile should look like this:→
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {githubProfiles.map((profile, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                    >
                      <a
                        href={profile.url}
                        className="text-blue-300 hover:text-blue-200 font-mono text-lg underline block mb-3 hover:bg-white/5 p-2 rounded transition-all"
                      >
                        {profile.url}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">📞 Need Help?</h3>
                <p className="mb-4">
                  Contact our mentors for any queries or assistance
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="font-semibold">Abhimanyu</p>
                    <p className="text-sm"> 7654536127</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="font-semibold">Bhargab</p>
                    <p className="text-sm"> 8135951869</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionTable;
