import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons
import { Link } from "react-scroll"; // for smooth scrolling
import { FaRobot, FaChartLine, FaCogs, FaShieldAlt } from "react-icons/fa"; // Import icons

const features = [
  {
    icon: <FaRobot size={64} />,
    headline: "AI-Powered Automation",
    description: "Leverage AI to automate your workflows and enhance productivity.",
  },
  {
    icon: <FaChartLine size={64} />,
    headline: "Advanced Analytics",
    description: "Gain insights with advanced analytics and data-driven decisions.",
  },
  {
    icon: <FaCogs size={64} />,
    headline: "Customizable Solutions",
    description: "Tailor solutions to meet your specific business needs.",
  },
  {
    icon: <FaShieldAlt size={64} />,
    headline: "Robust Security",
    description: "Ensure data security with our robust security measures.",
  },
];

const benefits = [
  {
    headline: "Seamless Integration",
    description: "Integrate Webinnofy with your existing systems effortlessly.",
    videoUrl: "https://www.example.com/video1.mp4",
  },
  {
    headline: "Enhanced Customer Experience",
    description: "Provide a personalized experience for your customers.",
    videoUrl: "https://www.example.com/video2.mp4",
  },
  {
    headline: "Scalable Solutions",
    description: "Scale your operations with our robust and flexible solutions.",
    videoUrl: "https://www.example.com/video3.mp4",
  },
  {
    headline: "Data-Driven Insights",
    description: "Make informed decisions with our advanced analytics.",
    videoUrl: "https://www.example.com/video4.mp4",
  },
];

const Index = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-gray-900">Webinnofy</div>
          <nav className="flex space-x-8">
            {["Features", "Pricing", "Testimonials", "Resources", "Contact"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={800}
                className="text-lg font-semibold text-gray-800 hover:text-purple-600 hover:underline hover:underline-offset-4 transition-all duration-200"
                activeClass="text-purple-600 underline underline-offset-4"
              >
                {section}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="pt-20">
        <section
          id="hero"
          className="relative h-screen hero-section"
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-4 animate-fadeIn">Webinnofy: Unlock the Power of AI for Conversational Commerce</h1>
            <p className="text-lg md:text-2xl font-light mb-8 animate-fadeIn delay-500">Transform your customer interactions, automate your workflows, and unlock unprecedented growth.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md animate-pulse">Request a Demo</button>
          </div>
        </section>
        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-navy-500 to-blue-500 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{feature.headline}</h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="benefits" className="py-20 bg-gray-200">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Benefits</h2>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 p-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{benefit.headline}</h3>
                  <p className="text-lg text-gray-700 mb-4">{benefit.description}</p>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="relative w-full h-64 bg-black">
                    <video className="absolute inset-0 w-full h-full object-cover" controls>
                      <source src={benefit.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="pricing" className="py-20 bg-gray-200">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Webinnofy Basic</h3>
                <ul className="mb-6">
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> GPT-3.5-turbo
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> 10 AI Agents
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> Voice Assistant Capabilities
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> Exceptional Customer Support
                  </li>
                </ul>
                <div className="text-center mb-6">
                  <span className="text-4xl font-black">$599</span>
                </div>
                <div className="text-center">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md">Buy Now</button>
                </div>
              </div>
              <div className="bg-purple-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Webinnofy Pro</h3>
                <ul className="mb-6">
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> GPT-4, Gemini Advanced, Opus, Llama 3, and other cutting-edge models
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> 100 AI Agents
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> Advanced Thinking Methods
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> Positive Emotion Prompting
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> Voice Assistant Capabilities
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span> Exceptional Customer Support
                  </li>
                </ul>
                <div className="text-center mb-6">
                  <span className="text-4xl font-black">$7999</span>
                </div>
                <div className="text-center">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="h-screen bg-gray-300 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Testimonials Section</h2>
        </section>
        <section id="resources" className="h-screen bg-gray-400 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Resources Section</h2>
        </section>
        <section id="contact" className="h-screen bg-gray-500 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </section>
      </main>
    </div>
  );
};

export default Index;