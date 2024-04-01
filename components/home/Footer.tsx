import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="max-w-5xl">
        <div>
          <div>
            <h2>Logo</h2>
            <div>
              <Link href={"tel:+1 (7635) 547-12-97"}>+1 (7635) 547-12-97</Link>
              <span>support@amex.com</span>
            </div>
          </div>
          <div>
            {footerLinks.map((item, index) => {
              return (
                <div key={"footer-key" + index}>
                  <h1>{item.name}</h1>
                  <div>
                    {item.links.map((item, index) => {
                      return (
                        <Link href={item.url} key={"footerlink" + item.name}>
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div>jiji</div>
      </div>
    </div>
  );
};

export default Footer;

const footerLinks = [
  {
    name: "Company",
    links: [
      { name: "About Us", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Contact Us", url: "#" },
      { name: "Our Team", url: "#" },
    ],
  },
  {
    name: "Product",
    links: [
      { name: "Employee database", url: "#" },
      { name: "Payroll", url: "#" },
      { name: "Absences", url: "#" },
      { name: "Time tracking", url: "#" },
    ],
  },
];

const socials = [
  // {icon:}
];
