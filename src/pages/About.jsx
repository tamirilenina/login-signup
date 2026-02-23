import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 px-6 py-12">
      
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          About QuizMaster
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          QuizMaster is a modern and interactive online quiz platform designed 
          to test your knowledge, improve learning, and make education fun. 
          Whether you're a student, professional, or quiz enthusiast, our platform 
          provides engaging quizzes across multiple categories.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              📚 Multiple Categories
            </h3>
            <p className="text-gray-600">
              Explore quizzes in technology, science, history, sports, and more.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              🏆 Leaderboard
            </h3>
            <p className="text-gray-600">
              Compete with others and climb the leaderboard with top scores.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              ⚡ Instant Results
            </h3>
            <p className="text-gray-600">
              Get immediate feedback and track your performance instantly.
            </p>
          </div>

        </div>

        {/* Mission Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our mission is to make learning engaging, competitive, and accessible 
            for everyone. We believe that quizzes are not just tests — they are 
            powerful tools for growth, self-improvement, and fun.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
