import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons
import { Link } from "react-scroll"; // for smooth scrolling

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
        <section id="features" className="h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Features Section</h2>
        </section>
        <section id="pricing" className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Pricing Section</h2>
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