const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        {/* Email and Phone */}
        <p className="mb-2">
          📧 <a href="mailto:gideonwork20@gmail.com" className="hover:text-blue-400 transition">gideonwork20@gmail.com</a>
        </p>
        <p>
          📞 <a href="tel:+251970166752" className="hover:text-green-400 transition">+251 980277582</a>
        </p>

        {/* Copyright */}
        <p className="text-sm opacity-80 mt-4">
          © {new Date().getFullYear()} Gideon Cameron. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
