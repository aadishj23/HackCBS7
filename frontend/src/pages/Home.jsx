import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import dna from '../assets/doctor.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);
  const imageContainer = useRef(null);
  const ratingCard = useRef(null);
  const featuresContainer = useRef(null);
  const featureItem = useRef(null);
  const numberRefs = useRef([]);

  const steps = [
    { id: 1, title: 'Research', description: 'Conduct thorough research to understand the problem.' },
    { id: 2, title: 'Plan', description: 'Create a detailed plan to address the problem.' },
    { id: 3, title: 'Execute', description: 'Implement the plan with precision and care.' }
  ];

  const features = [
    { title: 'Feature 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem Lorem ipsum dolor sit amet consect ' },
    { title: 'Feature 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem Lorem ipsum dolor sit amet consect' },
    { title: 'Feature 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem Lorem ipsum dolor sit amet consect' }
  ];

  const stats = [
    { number: 20, label: 'Years of Experience' },
    { number: 173, label: 'Projects Done' },
    { number: 1500, label: 'Trusted Clients' },
    { number: 52, label: 'Expert Team' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const numbers = numberRefs.current;

    numbers.forEach((number, index) => {
      const targetNumber = stats[index].number;

      gsap.to(number, {
        innerHTML: targetNumber,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          onEnter: () => gsap.to(number, {
            innerHTML: targetNumber,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out"
          })
        }
      });
    });
  }, []);

  return (
    <div className='bg-black'>
      <Navbar />

      {/* First Section */}
      <div className="h-screen relative mb-32">
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazY2MGJiZW9vZGF1ZnF0ZWRnNTU4cnQyOXZ3cXU2enI1dDl5aTNzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfa8EZ9dQAHzF4e06/giphy.webp")`, opacity: 0.5 }}></div>
        <div className="container mx-auto px-4 h-full flex space-x-[12rem] items-center relative">
          <div className="w-1/2 ml-[-3rem]">
            <h1 className="text-8xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-blue-100 to-gray-500 text-transparent bg-clip-text animate-gradient">WELCOME TO LABEASY</h1>
            <p className="text-white text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores placeat harum adipisci veniam earum labore cum corrupti sed ut sequi ipsa quas fugiat voluptatum unde, atque deleniti vitae modi laboriosam? Quo, nulla, expedita officiis accusantium hic nesciunt natus minus dolorem libero tempora rerum repellat, neque blanditiis. Sunt corrupti in inventore itaque quo.
            </p>
            <button className="mt-14 px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 via-blue-300 to-gray-500 text-white 
            transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 ">
              Know More
            </button>
          </div>
          <div className="w-1/3 h-3/5 flex border-2 border-white rounded-full justify-center bg-center bg-cover" style={{ backgroundImage: `url(${dna})` }}>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 mb-32" ref={sectionRef}>
        <div className="text-center mb-10">
          <h2 className="text-lg sm:text-xl text-blue-400 mb-2 gsap-title" ref={titleRef}>Our Process</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gsap-subtitle" ref={subtitleRef}>Step-by-<span className="text-blue-500">Step to Achieving</span> Your Goals</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="p-8 border border-gray-700 rounded-lg text-center transition-all duration-300 transform hover:border-blue-500 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm gsap-card relative mt-10"
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{step.description}</p>
              <div className="absolute top-0 left-0 text-white text-8xl font-bold z-[-1]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>{index + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Image and Overlapping Rating Card */}
          <div className="relative w-full lg:w-1/2 p-6" ref={imageContainer}>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Business Meeting"
              className="rounded-lg w-full object-cover"
            />
            {/* Overlapping Rating Card */}
            <div className="absolute bottom-0 left-0 sm:bottom-[-30px] sm:left-[-20px] bg-black p-4 sm:p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300 max-w-[80%] sm:max-w-[250px]" ref={ratingCard}>
              <h3 className="text-2xl sm:text-3xl font-bold">4.9</h3>
              <div className="flex items-center mb-1 sm:mb-2">
                <span className="text-blue-400 text-sm sm:text-base mr-1 sm:mr-2">★★★★★</span>
              </div>
              <p className="text-xs sm:text-sm">
                Client Ratings
              </p>
              <p className="text-gray-400 text-xs hidden sm:block">
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="w-full lg:w-1/2 space-y-8 mt-12 lg:mt-0 p-6" ref={featuresContainer}>
            <div className="text-blue-400 uppercase mb-4 text-sm" ref={titleRef}>
              Why Choose Us
            </div>
            <h1 className="text-4xl font-bold mb-6" ref={subtitleRef}>
              Empowering Your Health to Thrive
            </h1>
            <p className="text-gray-400 mb-8">
              Scelerisque placerat fames aliquam tortor augue interdum quisque proin. Justo ornare commodo cursus; sodales magnis nam.
            </p>
            <ul className="space-y-6" ref={titleRef}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4" ref={featureItem}>
                  <div className="text-3xl text-blue-400">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{feature.title} </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <div ref={sectionRef} className="bg-[url('https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?t=st=1726913187~exp=1726916787~hmac=4b9ef068bb436e5223621b0f35904d262046d4a4738fb40f11f3ed2143e68b68&w=1480')] bg-cover bg-center text-white py-16 px-4 sm:px-6 lg:px-8 relative before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-30 before:backdrop-blur-sm mb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-9">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-600 bg-opacity-20 rounded-xl shadow-xl p-6 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 backdrop-filter backdrop-blur-lg border border-blue-300 border-opacity-30">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-white">
              <span ref={el => numberRefs.current[index] = el}>0</span>
              {stat.number > 100 ? '+' : ''}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-center text-blue-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Fifth Section */}
    <section className="relative bg-black py-12 px-4 sm:px-6 lg:px-8 mb-32">
      {/* Background image */}
      <div className="bg-blue-500 bg-opacity-80 rounded-xl shadow-xl w-full max-w-7xl mx-auto overflow-hidden">
        {/* Replace with your actual image */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder for your image
            alt="Background"
            className="w-full object-cover h-[300px] lg:h-[400px]"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-8 rounded-xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-center">
              <span className="text-blue-400">Unlock Your Potential</span>, Reach Out <br /> and Transform Your Business!
            </h2>
            <p className="text-white text-center mb-6 max-w-md mx-auto">
              Commodo facilisis egestas maximus volutpat iaculis maecenas augue tortor aptent. Effictur interdum laoreet ullamcorper des velit purus praesent conubia magna.
            </p>
            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default Home;
