import React from "react";

const CourseInfo = () => {
  const achievements = [
    {
      title: "Student who cracks >=15 LPA",
      description: "gets ultimate prize 👑 and special felicitations",
      rewards: "💰 💵 💰 💵 💵 💰",
    },
    {
      title:
        "Student who brings good rank in coding contest or gets good rating",
      description: "gets super prize 👑 and special felicitations",
      rewards: "💰 💵 💰 💵 💵 💰",
    },
    {
      title: "Student who cracks >=11LPA",
      description: "gets big prize and special felicitation",
      rewards: "💰 💵 💰 💵 💵 💰",
    },
    {
      title: "Student who cracks >=8LPA",
      description: "gets felicitation",
      rewards: "💰 💵 💰 💵 💵 💰",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-red-600 font-bold text-lg mb-4 leading-relaxed">
              (The Course:Training and Mentoring of this program are the most
              efficient in the whole country : if you work daily exactly as per
              personalized schedule given by Kumar K in 1-1 Mentoring with faith
              in God no force in this world can stop you)
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold py-4 px-8 rounded-2xl mb-6 shadow-lg">
              NOV
            </div>

            <div className="text-2xl font-semibold text-gray-800 mb-8 italic">
              "The Best Way To Get What You Want Is By Deserving It"
            </div>

            {/* Course Link */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-6 shadow-lg">
              <div className="text-lg font-medium mb-3">
                🎯 851 hour course link for hard level DSA + OA + CP
              </div>
              <a
                href="https://docs.google.com/document/d/1Ik0Y0gtpwt-rCSzfdU2SdcwxYryDQ-gUkjpDyNonmZg/edit?tab=t.0"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
              >
                Access Course Link
              </a>
            </div>

            {/* Contact Links */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-inner">
              <div className="text-lg font-medium text-gray-800 mb-3">
                📞 Connect with Kumar K sir
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.instagram.com/kumark_desiqna/"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md"
                >
                  Link1
                </a>
                <a
                  href="https://www.youtube.com/@kumarkdsa"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md"
                >
                  Link2
                </a>
                <a
                  href="https://x.com/KaranKu37565867"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md"
                >
                  Link3
                </a>
                <a
                  href="https://www.instagram.com/desiqna_official/"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md"
                >
                  Link4
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Prizes Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              🏆 Achievement Rewards
            </h2>
            <p className="text-xl text-gray-600">
              We have created new prizes in mentoring:-
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start mb-4">
                    <div className="text-2xl mr-3">⭐</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 underline decoration-purple-400 decoration-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-200 to-green-200 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">{achievement.rewards}</div>
                    <div className="text-sm font-medium text-gray-700">
                      Rewards & Recognition
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl font-semibold mb-4">
              📊 So accordingly report to Kumar K (+91 88793 55057) when you
              achieve the milestone 🤩🔥💪🏻💪🏻 so that we can give you prizes 🤩🤩
            </div>
            <div className="flex justify-center space-x-4 text-3xl">
              <span className="animate-bounce">🎯</span>
              <span className="animate-bounce delay-100">🚀</span>
              <span className="animate-bounce delay-200">⭐</span>
              <span className="animate-bounce delay-300">🏆</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="fixed top-20 left-10 animate-float opacity-20">
          <div className="text-6xl">💎</div>
        </div>
        <div
          className="fixed top-32 right-10 animate-float opacity-20"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-6xl">🎯</div>
        </div>
        <div
          className="fixed bottom-32 left-20 animate-float opacity-20"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-6xl">🚀</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CourseInfo;
