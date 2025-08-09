import React, { useState, useEffect } from "react";
// react-router-dom is required for navigation. The preview environment may not have
// the necessary Router context, which can cause a runtime error.
// In a full application, ensure <Login /> is rendered inside a <BrowserRouter>.
import { useNavigate } from "react-router-dom";

// --- CSS for Animations ---
// In a real project, this would go in your main CSS file (e.g., index.css).
// I'm including it here to keep the component self-contained for this demo.
const AnimationStyles = () => (
  <style>{`
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slide-in-down {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slide-in-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes zoom-in {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
    .animate-slide-in-down { animation: slide-in-down 0.6s ease-out forwards; }
    .animate-slide-in-up { animation: slide-in-up 0.6s ease-out forwards; }
    .animate-zoom-in { animation: zoom-in 0.4s ease-out forwards; }
  `}</style>
);


// --- Reusable Components ---

// A more dynamic and visually interesting slider.
const Slider = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      title: "REAL-TIME RATINGS",
      description: "Track your progress with live updates and detailed performance analytics after every match.",
    },
    {
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      title: "COMPETE GLOBALLY",
      description: "Challenge mathletes from around the world and climb the international leaderboards.",
    },
    {
      img: "https://placehold.co/600x400/1D232A/3B82F6?text=Join+Tournaments",
      title: "JOIN TOURNAMENTS",
      description: "Participate in weekly and monthly tournaments to win prizes and earn recognition.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-xl shadow-2xl overflow-hidden bg-gray-700/50 backdrop-blur-sm border border-gray-600/50">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 p-6 text-center">
            <img src={slide.img} alt={slide.title} className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1D232A/FF0000?text=Image+Failed'; }} />
            <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
            <p className="text-gray-300">{slide.description}</p>
          </div>
        ))}
      </div>
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === i ? 'bg-blue-500' : 'bg-gray-500'}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

// A cool, animated modal for Login/Signup.
const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 animate-zoom-in"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-white">Welcome!</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email or Username</label>
                        <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input type="password" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg">
                        Login / Signup
                    </button>
                </form>
            </div>
        </div>
    );
};


// The main Login component with all enhancements.
const Login = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function clickHandler() {
    navigate("/dashboard");
  }

  return (
    <>
      <AnimationStyles />
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div 
          className="min-h-screen flex items-center justify-center p-4 font-sans bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')"}}
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
        <main className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center animate-fade-in">
          <div className="w-full md:w-1/2 p-8 lg:p-12 text-center md:text-left">
            <div className="flex items-center gap-x-3 mb-4 justify-center md:justify-start animate-slide-in-down">
              <span className="text-3xl font-bold text-white">MATIKS</span>
              <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-4 animate-slide-in-down" style={{animationDelay: '100ms'}}>
              MAKING MATH A <span className="text-blue-500">SPORT</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 animate-slide-in-down" style={{animationDelay: '200ms'}}>
              Matiks is a community for mathletes, turning math into an
              accessible, exciting sport for everyone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-slide-in-up" style={{animationDelay: '300ms'}}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
              >
                Login / Signup
              </button>
              <button
                onClick={clickHandler}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Play as Guest
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 animate-fade-in" style={{animationDelay: '400ms'}}>
            <Slider />
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
