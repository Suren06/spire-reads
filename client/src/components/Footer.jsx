import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsGoogle,
  BsGithub,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 ">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-teal-500 via-sky-500 to-green-500 text-white">
                Spires
              </span>
              Reads
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100projects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spire Reads
                </Footer.Link>
                <Footer.Link
                  href="https://www.100projects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spire Reads
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Suren06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spire Reads
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Suren06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spire Reads
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Leagal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Suren06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy policy
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Suren06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spire Reads
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Suren's blog"
            year={new Date().getFullYear}
          />
          <div className="flex gap-6 sm-mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsGoogle} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
