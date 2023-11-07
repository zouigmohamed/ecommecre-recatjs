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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  return (
    <div className={`fixed bottom-0 w-full bg-gray-800 transition-all duration-700 ${showFooter ? 'h-28' : 'h-0 -bottom-72'}`}>
      <div className="text-white text-center flex items-center justify-center h-full">
        <p className="">
          Copyright &copy; E-commerce Shop {getCurrentYear()}. All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
