import LogoText from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-100">
      <div className="keep-content-center py-16">
        <div className="flex flex-col gap-12 text-center lg:flex-row lg:justify-between lg:text-left">
          {/* Brand */}
          <div className="mx-auto lg:mx-0">
            <img
              src={LogoText}
              alt="DevStack Logo"
              className="mx-auto h-6 w-auto lg:mx-0"
            />
            <p className="mt-4 text-sm text-slate-500">
              Curated tools, technologies, and resources for developers
              building <br/> modern software.
            </p>
            <div className="mt-5 flex justify-center gap-5 text-sm font-medium text-slate-600 lg:justify-start">
              <a href="#" className="hover:text-pink-600">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-600">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-24">
            {/* Product */}
            <div>
              <p className="text-sm font-semibold text-slate-900">Product</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-sm font-semibold text-slate-900">Company</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-sm font-semibold text-slate-900">Legal</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-500 hover:text-pink-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-100 pt-8 text-sm text-slate-400 sm:flex-row sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-600">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};