
const Footer = () => {
    return (
      <div className="bg-[#f2f2f2]">
        <footer className="footer p-10 text-base-content w-[1140px] mx-auto">
          <aside>
            <img
              className="w-24"
              src="https://i.ibb.co/WtVHj01/7ad01839e2bbf81b9ed32f6fd1b54d62-removebg-preview.png"
              alt=""
            />
            <h2 className="font-bold text-[#f31312] text-3xl">TechnoMinds</h2>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <div className="divider"></div>
        <aside className="footer-center p-4 bg-[#f2f2f2] text-base-content">
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <span className="text-[#f31312] font-bold">TechnoMinds LTD</span>
          </p>
        </aside>
      </div>
    );
};

export default Footer;