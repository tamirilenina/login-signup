import Footer from "../components/Footer"
import Header from "../components/Header"
const Home = () => {
    return (
        <>
            <Header/>
             <section className="bg-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to My Website --Online Quiz
          </h1>
          <p className="text-lg mb-6">
           <h2>Instagram</h2>
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-600">
                Optimized and fast performance React apps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p className="text-gray-600">
                Works perfectly on mobile, tablet & desktop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
              <p className="text-gray-600">
                Clean and professional design using Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>

        
            <Footer/>
        </>
    )
}
export default Home