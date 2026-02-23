import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Services() {
  const services = [
    {
      id: 1,
      title: "Daily Practice Quizzes",
      description:
        "Attempt daily quizzes from various categories to improve your knowledge and track your performance.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Live Timed Tests",
      description:
        "Experience real exam environments with countdown timers and instant score evaluation.",
      icon: "⏳",
    },
    {
      id: 3,
      title: "Performance Analytics",
      description:
        "Get detailed reports and insights about your strengths and weak areas.",
      icon: "📊",
    },
    {
      id: 4,
      title: "Leaderboard System",
      description:
        "Compete with other users and see your ranking on the leaderboard.",
      icon: "🏆",
    },
    {
      id: 5,
      title: "Category-wise Quizzes",
      description:
        "Choose quizzes from different categories like GK, Technology, Aptitude, and more.",
      icon: "📚",
    },
    {
      id: 6,
      title: "Instant Results",
      description:
        "Get immediate feedback with correct answers and explanations.",
      icon: "⚡",
    },
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 mb-10">
            Explore the powerful features of our Online Quiz Platform designed
            to help you learn and compete smarter.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;