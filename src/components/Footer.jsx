const getCurrentYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
};

const Footer = () => {
  return (
    <div className="bg-primary/80 py-12 w-full  fixed bottom-0">
      <div>
        <p className="text-white text-center">
          Copyright &copy; E-commerce Shop {getCurrentYear()}. All rights
          Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
