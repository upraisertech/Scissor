import Logo from "@/assets/logo_black.svg";

const Footer = () => {
  return (
    <footer className="before:-top-120 before:-left-420 mx-auto mt-[12em] flex w-full items-center justify-start pb-32 before:absolute before:z-[-1] before:content-Footer">
      <div className="justify-content mx-auto mt-[-9em] flex gap-16 md:flex">
        <div className="mt-16 md:mt-0">
          <span className="flex gap-2">
            <img alt="logo" src={Logo} /> |
            <span className="font-bold text-black">SCISSOR</span>
          </span>
        </div>

        <div className="mt-16 md:mt-0">
          <div className="mt-16 md:mt-0">
            <h4 className="font-bold">Why Scissor ?</h4>
            <p className="my-2">Scissor 101</p>
            <p>Integrations & API</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold">Resources</h4>
            <p className="my-2">Blog</p>
            <p className="my-2">Resource Library</p>
            <p className="my-2">Developers</p>
            <p className="my-2">App Connectors</p>
            <p className="my-2">Support</p>
            <p className="my-2">Trust Center</p>
            <p className="my-2">Browser Extension</p>
            <p>Mobile App</p>
          </div>
        </div>

        <div className="mt-16 md:mt-0">
          <div className="mt-16 md:mt-0">
            <h4 className="font-bold">Solutions</h4>
            <p className="my-2">Social Media</p>
            <p className="my-2">Digital Marketing</p>
            <p className="my-2">Customer Service</p>
            <p>For Developers</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold">Features</h4>
            <p className="my-2">Branded Links</p>
            <p className="my-2">Mobile Links</p>
            <p className="my-2">Campaign</p>
            <p className="my-2">Management & Analytics</p>
            <p>QR Code generation</p>
          </div>
        </div>

        <div className="mt-16 md:mt-0">
          <div className="mt-16 md:mt-0">
            <h4 className="font-bold">Products</h4>
            <p className="my-2">Link Management</p>
            <p className="my-2">QR Codes</p>
            <p>Link-in-bio</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold">Legal</h4>
            <p className="my-2">Privacy Policy</p>
            <p className="my-2">Cookie Policy</p>
            <p className="my-2">Terms of Service</p>
            <p className="my-2">Acceptable Use Policy</p>
            <p>Code of Conduct</p>
          </div>
        </div>

        <div className="mt-16 md:mt-0">
          <h4 className="font-bold">Company</h4>
          <p className="my-2">About Scissor</p>
          <p className="my-2">Careers</p>
          <p className="my-2">Partners</p>
          <p className="my-2">Press</p>
          <p className="my-2">Contact</p>
          <p>Reviews</p>
          <p className="mt-[11em] ml-[-9em]">Term of Service Security ⓒ Scissor 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
