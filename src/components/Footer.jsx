import { useState, useEffect } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const getCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Listen for window resize as well
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  // Use a dynamic class for the transition effect
  const footerClass = showFooter ? 'h-28 mt-40' : 'h-0 -bottom-10 ';

  return (
    <div className={`fixed bottom-0 w-full bg-gray-800 transition-all duration-700 ${footerClass}`}>
      <div className="text-white text-center flex items-center justify-center h-full">
        <p className="">
          Copyright &copy; E-commerce Shop {getCurrentYear()}. All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
