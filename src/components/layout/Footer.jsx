import React from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import { APP_NAME } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-footer px-2">
      <Container>
        <div className="md:px-8 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 text-white">
            <div className="pe-8">
              <div className="mb-3 font-bold">{APP_NAME}</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                molestiae similique commodi corrupti officia pariatur ab, ipsam
                totam. Recusandae quas itaque distinctio a ipsa, voluptas at
                repellat provident eaque modi?
              </p>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                <div className="">
                  <strong>Services</strong>
                  <ul className="mt-3">
                    <li className="mb-2"><NavLink to="/pricing">Pricing</NavLink></li>
                  </ul>
                </div>
                <div className="">
                  <strong>About</strong>
                  <ul className="mt-3">
                    <li className="mb-2"><NavLink to="/blogs">Blogs</NavLink></li>
                    <li className="mb-2"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="mb-2"><NavLink to="/policy">Privacy Policy</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-3 font-bold">Contact Details</div>
              <p>A-2, Kadipur, Delhi</p>
              <p>New Delhi-110036, India </p>
              <p>contact@redaugment.com</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
