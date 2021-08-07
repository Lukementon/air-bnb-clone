const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer">ABOUT</h5>
        <p className="cursor-pointer">How Airbnb works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer">REACT</h5>
        <p className="cursor-pointer">Component based design</p>
        <p className="cursor-pointer">Flex</p>
        <p className="cursor-pointer">Grid</p>
        <p className="cursor-pointer">Image Optimization</p>
        <p className="cursor-pointer">SSR</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer">JAVASCRIPT</h5>
        <p className="cursor-pointer">Static Site Generation</p>
        <p className="cursor-pointer">Fast</p>
        <p className="cursor-pointer">Full Stack</p>
        <p className="cursor-pointer">Next Auth</p>
        <p className="cursor-pointer">Firebase</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer">Airbnb Clone</h5>
        <p className="cursor-pointer">Vercel</p>
        <p className="cursor-pointer">Backend</p>
        <p className="cursor-pointer">Frontend</p>
        <p className="cursor-pointer">Clean Code</p>
        <p className="cursor-pointer">Programming</p>
      </div>
    </div>
  );
};

export default Footer;
