export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Welcome to Chat Creator</h1>
              <p className="text-xl mb-6">Create and customize chatbots for your website in just a few steps!</p>
              <a href="/config" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
                Get Started
              </a>
            </div>
          </section>
    
          {/* Features Section */}
          <section className="py-20 bg-white text-gray-900">
            <div className="container mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold">Why Choose Us?</h2>
              <p className="text-xl text-gray-600 mt-4">We offer the best tools to create and manage your chatbots.</p>
            </div>
            
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {/* Feature 1 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl">
                <img className="mx-auto mb-6" src="/images/customizable.svg" alt="Customizable" />
                <h3 className="text-2xl font-bold mb-4">Fully Customizable</h3>
                <p className="text-gray-700">Easily customize your chatbot’s look, behavior, and integration to suit your needs.</p>
              </div>
    
              {/* Feature 2 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl">
                <img className="mx-auto mb-6" src="/images/easy-to-use.svg" alt="Easy to Use" />
                <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
                <p className="text-gray-700">Our intuitive interface allows anyone to create a chatbot without coding skills.</p>
              </div>
    
              {/* Feature 3 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl">
                <img className="mx-auto mb-6" src="/images/support.svg" alt="Support" />
                <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-700">We provide round-the-clock support to ensure your chatbot works smoothly.</p>
              </div>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Create Your Chatbot?</h2>
              <p className="text-xl mb-6">Join thousands of users who trust us with their chatbot needs.</p>
              <a href="/signup" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                Sign Up Now
              </a>
            </div>
          </section>
        </div>
      );
}