import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [currentReviewSet, setCurrentReviewSet] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Auto-rotate reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewSet((prev) => (prev + 1) % Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate hero slides every 4 seconds (only when not hovering)
  useEffect(() => {
    if (isHoveringHero) return; // Stop auto-rotation when hovering

    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHoveringHero]);

  const heroSlides = [
    {
      image: "https://cdn.shortpixel.ai/spai/ret_img/www.buildtech4u.com/wp-content/uploads/2024/12/House-plans-Vastu.webp",
      title: "Vastu Compliant Properties",
      subtitle: "Harmonious Living Spaces",
      description: "Every property is designed with scientific Vastu principles to ensure positive energy flow, prosperity, and wellbeing for your family.",
      features: ["Positive Energy Flow", "Directional Optimization", "Health & Prosperity", "Balanced Living"]
    },
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnYWwlMjBkb2N1bWVudHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "Complete Legal Assurance",
      subtitle: "100% Legal Transparency",
      description: "Rigorous legal verification and transparent documentation process ensuring your investment is completely secure and hassle-free.",
      features: ["Document Verification", "Title Clearance", "Approval Compliance", "Legal Support"]
    },
    {
      image: "https://varahaventure.com/wp-content/uploads/2025/08/209-1024x614.jpg",
      title: "Strategic Plot Ventures",
      subtitle: "Smart Land Division",
      description: "Expertly planned plot divisions with modern infrastructure, optimal space utilization, and high investment returns.",
      features: ["Optimal Layout", "Infrastructure Ready", "High Appreciation", "Custom Sizing"]
    },
    {
      image: "https://findbhk.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ffindbhk-29272.appspot.com%2Fo%2FprojectGallery%252F4aWyx7f2gG3u02L4Z2l3_.jpg%3Falt%3Dmedia%26token%3D1030a97e-b666-4da7-8c2d-dd8529c49e4c&w=1536&q=75",
      title: "Premium Land Quality",
      subtitle: "Why Our Land Stands Out",
      description: "Superior soil quality, strategic locations, and comprehensive development make our properties the best investment choice.",
      features: ["Premium Soil Quality", "Prime Locations", "Full Development", "Best ROI"]
    }
  ];

  const features = [
    {
      icon: <i className='fas fa-gavel text-blue-500 text-2xl'></i>,
      title: "Legal Assurance",
      description: "Every property undergoes rigorous legal verification with complete document transparency"
    },
    {
      icon: <i className='fas fa-compass text-green-500 text-2xl'></i>,
      title: "Vastu Compliance",
      description: "Scientific Vastu principles integrated with modern architectural excellence"
    },
    {
      icon: <i className='fas fa-award text-yellow-500 text-2xl'></i>,
      title: "Quality Promise",
      description: "Premium construction materials and uncompromised building standards"
    },
    {
      icon: <i className='fas fa-shield-alt text-blue-500 text-2xl'></i>,
      title: "Investment Security",
      description: "Properties designed to appreciate and safeguard your financial future"
    }
  ];

  const services = [
    {
      title: "Vastu Consultation",
      description: "Expert Vastu analysis and implementation for harmonious living spaces",
      icon: <i className='fas fa-home text-blue-500 text-4xl'></i>,
      features: ["Site Analysis", "Design Optimization", "Energy Flow", "Remedial Solutions"]
    },
    {
      title: "Plot Development",
      description: "Strategic plot division and development with modern infrastructure",
      icon: <i className='fas fa-ruler-combined text-blue-500 text-4xl'></i>,
      features: ["Layout Planning", "Infrastructure", "Plot Division", "Development"]
    }
  ];

  const values = [
    {
      title: "Ethical Foundation",
      description: "Built on the principle of 'Dharmo Rakshati Rakshitah' - righteousness protects the protector",
      icon: <i className='fas fa-seedling text-orange-500 text-2xl'></i>
    },
    {
      title: "Client-Centric Approach",
      description: "Every decision is made with our clients' best interests at heart",
      icon: <i className='fas fa-handshake text-orange-500 text-2xl'></i>
    },
    {
      title: "Innovation & Tradition",
      description: "Blending modern technology with time-tested construction wisdom",
      icon: <i className='fas fa-lightbulb text-orange-500 text-2xl'></i>
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Anand Elite Residency",
      rating: 5,
      comment: "Anand Realtyy delivered exactly what they promised. The legal documentation was completely transparent and the Vastu-compliant design has brought positive energy to our home.",
      avatar: <i className='fas fa-user-tie text-blue-600 text-2xl'></i>,
      date: "January 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Vastu Harmony Villas",
      rating: 5,
      comment: "From the first meeting to handover, the team was professional and responsive. Our villa was completed before time with exceptional quality.",
      avatar: <i className='fas fa-user-graduate text-blue-600 text-2xl'></i>,
      date: "December 2023"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Business Hub Tower",
      rating: 5,
      comment: "As a commercial investor, I appreciate Anand Realtyy's attention to detail and commitment to quality. The commercial space has excellent ROI potential.",
      avatar: <i className='fas fa-user-tie text-blue-600 text-2xl'></i>,
      date: "November 2023"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "Green Valley Apartments",
      rating: 5,
      comment: "The eco-friendly features and green spaces in our apartment complex are wonderful. Anand Realtyy truly cares about sustainable living.",
      avatar: <i className='fas fa-user-graduate text-blue-600 text-2xl'></i>,
      date: "October 2023"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Multiple Properties",
      rating: 5,
      comment: "I've invested in 3 properties with Anand Realtyy over the years. Their consistent quality, ethical practices keep me coming back.",
      avatar: <i className='fas fa-user-tie text-blue-600 text-2xl'></i>,
      date: "September 2023"
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "Anand Elite Residency",
      rating: 5,
      comment: "The attention to detail in construction quality is remarkable. Every corner of our apartment reflects superior craftsmanship.",
      avatar: <i className='fas fa-user-nurse text-blue-600 text-2xl'></i>,
      date: "August 2023"
    }
  ];

  // Get current set of reviews based on screen size
  const getCurrentReviews = () => {
    const isMobile = window.innerWidth < 768;
    const reviewsPerView = isMobile ? 1 : 3;
    return reviews.slice(currentReviewSet * reviewsPerView, currentReviewSet * reviewsPerView + reviewsPerView);
  };

  const [currentReviews, setCurrentReviews] = useState(getCurrentReviews());

  // Update reviews when window resizes or review set changes
  useEffect(() => {
    const handleResize = () => {
      setCurrentReviews(getCurrentReviews());
    };

    window.addEventListener('resize', handleResize);
    setCurrentReviews(getCurrentReviews());

    return () => window.removeEventListener('resize', handleResize);
  }, [currentReviewSet]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const heroVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  };

  const reviewVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            <i className="fas fa-star"></i>
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Updated Hero Carousel Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Carousel Container */}
            <div 
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
              onMouseEnter={() => setIsHoveringHero(true)}
              onMouseLeave={() => setIsHoveringHero(false)}
            >
              <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[500px]">
                {/* Image Slider */}
                <div className="relative h-48 md:h-64 lg:h-auto lg:w-1/2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHeroSlide}
                      variants={heroVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${heroSlides[currentHeroSlide].image})`
                      }}
                    >
                      <div className="absolute inset-0 bg-black/30"></div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                  >
                    <i className="fas fa-chevron-left text-gray-700 text-sm md:text-base"></i>
                  </button>
                  <button
                    onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                  >
                    <i className="fas fa-chevron-right text-gray-700 text-sm md:text-base"></i>
                  </button>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentHeroSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentHeroSlide ? 'bg-orange-500' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHeroSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-center lg:text-left"
                    >
                      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-800 mb-2 md:mb-3 leading-tight">
                        {heroSlides[currentHeroSlide].title}
                      </h1>
                      
                      <p className="text-base md:text-lg text-orange-600 font-semibold mb-2 md:mb-3 leading-tight">
                        {heroSlides[currentHeroSlide].subtitle}
                      </p>
                      
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                        {heroSlides[currentHeroSlide].description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4 md:mb-6">
                        {heroSlides[currentHeroSlide].features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs md:text-sm text-gray-700">
                            <span className="text-green-500 mr-1"><i className="fas fa-check-circle"></i></span>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center lg:justify-start">
                        <Link 
                          to="/projects" 
                          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base text-center"
                        >
                          <i className="fas fa-building mr-2"></i>View Projects
                        </Link>
                        <Link 
                          to="/contact" 
                          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base text-center"
                        >
                          <i className="fas fa-calendar-alt mr-2"></i>Free Consultation
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Brand Tagline */}
                  <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                    <p className="text-xs md:text-sm text-gray-500 text-center lg:text-left leading-tight">
                      <span className="text-orange-500 font-semibold"><i className="fas fa-quote-left mr-1"></i>"Dharmo Rakshati Rakshitah"<i className="fas fa-quote-right ml-1"></i></span> - Building Trust, Delivering Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
                Welcome to Anand Realtyy
              </h2>
              <div className="w-16 md:w-20 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
                Established with a vision to redefine real estate through ethical practices and uncompromised quality, 
                Anand Realtyy has been creating dream spaces for over 27 years. We believe that everyone deserves a home 
                that embodies trust, quality, and lasting value - from first-time homebuyers to seasoned investors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4">
                  Our Founding Principle
                </h3>
                <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  <i className="fas fa-quote-left text-orange-500 mr-2"></i> 
                  This ancient wisdom forms the bedrock of our operations. 
                  We've demonstrated that when you uphold righteousness and ethical practices, success follows naturally.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  From humble beginnings to becoming a trusted name in real estate, our journey has been guided by 
                  this principle, ensuring that every project we undertake benefits all stakeholders - our clients, 
                  partners, and the community.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg mx-2"
              >
                <h4 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">
                  Why We're Different
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-file-contract text-orange-500 mr-2 md:mr-3 mt-1"></i>
                    <span className="text-gray-700 text-sm md:text-base">Complete legal transparency in all transactions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-compass text-orange-500 mr-2 md:mr-3 mt-1"></i>
                    <span className="text-gray-700 text-sm md:text-base">Vastu-compliant designs for harmonious living</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-hard-hat text-orange-500 mr-2 md:mr-3 mt-1"></i>
                    <span className="text-gray-700 text-sm md:text-base">Premium quality construction that stands the test of time</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-headset text-orange-500 mr-2 md:mr-3 mt-1"></i>
                    <span className="text-gray-700 text-sm md:text-base">Customer-centric approach with lifelong support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              The Anand Realtyy Advantage
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Experience the difference that comes with trusted real estate development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 rounded-xl shadow-md border border-blue-100 text-center"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2 md:mb-3 leading-tight">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel - Responsive (1 on mobile, 3 on desktop) */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Join 500+ happy families who trust Anand Realtyy for their dream homes
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-2">
            {/* Review Carousel - Responsive Layout */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewSet}
                  variants={reviewVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`grid gap-4 md:gap-6 ${
                    window.innerWidth < 768 ? 'grid-cols-1' : 'grid-cols-3'
                  }`}
                >
                  {currentReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                      <StarRating rating={review.rating} />
                      <blockquote className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed min-h-[80px] md:min-h-[96px]">
                        <i className="fas fa-quote-left text-blue-200 mr-1 text-sm"></i>
                        {review.comment}
                        <i className="fas fa-quote-right text-blue-200 ml-1 text-sm"></i>
                      </blockquote>
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="text-2xl md:text-3xl">{review.avatar}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</div>
                          <div className="text-xs text-gray-600"><i className="fas fa-map-marker-alt mr-1"></i>{review.location}</div>
                          <div className="text-xs text-gray-500"><i className="fas fa-calendar-alt mr-1"></i>{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                {[...Array(Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewSet(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentReviewSet ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Reviews Summary */}
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-1 md:mb-2">
                  <i className="fas fa-home mr-2"></i>500+
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">Happy Families</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 md:mb-2">
                  <i className="fas fa-star mr-2"></i>4.9/5
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1 md:mb-2">
                  <i className="fas fa-thumbs-up mr-2"></i>98%
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">Recommendation Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - FIXED ALIGNMENT */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Our Specialized Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive real estate solutions tailored to your specific needs and requirements
            </p>
          </motion.div>

          {/* Fixed Grid Layout - Changed from 3 columns to 2 columns for better alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="p-6 md:p-8">
                  <div className="text-5xl md:text-6xl mb-4 md:mb-6 text-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4 text-center leading-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm md:text-base group-hover:text-gray-800 transition-colors">
                        <span className="text-orange-500 mr-2 md:mr-3 text-lg"><i className="fas fa-check-circle"></i></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
             Our Guiding Principles
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-2">
              The values that drive every decision and action at Anand Realtyy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 md:p-6"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-orange-500">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2 md:mb-3 leading-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Join thousands of satisfied families who have made Anand Realtyy their trusted partner in real estate. 
              Let's build your legacy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                <i className="fas fa-calendar-check mr-2"></i>Schedule Free Consultation
              </Link>
              <Link 
                to="/projects" 
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base"
              >
                <i className="fas fa-search mr-2"></i>Browse All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;