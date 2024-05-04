import React from "react";
import c1 from "../assets/projects/case/1.png";
import c2 from "../assets/projects/case/2.png";
import c3 from "../assets/projects/case/3.png";
import c4 from "../assets/projects/case/encodecase.jpg";
import c5 from "../assets/projects/case/estimateedcoast.png";
import c6 from "../assets/projects/case/issuecase1.png";

import p1 from "../assets/projects/pm/addact2.png";
import p2 from "../assets/projects/pm/addactiv.png";
import p3 from "../assets/projects/pm/appo.png";
import p4 from "../assets/projects/pm/plannedreport.png";
import p5 from "../assets/projects/pm/pmdashboard.png";
import p6 from "../assets/projects/pm/programbudgetmonthly.png";
import p7 from "../assets/projects/pm/viewactprogress.png";
import p8 from "../assets/projects/pm/viewprogress (4).png";

import f1 from "../assets/projects/fasil/photo_1_2024-03-25_21-29-02(1).jpg";
import f2 from "../assets/projects/fasil/photo_1_2024-03-25_21-29-02.jpg";
import f3 from "../assets/projects/fasil/photo_2_2024-03-25_21-29-02.jpg";
import f4 from "../assets/projects/fasil/photo_3_2024-03-25_21-29-02.jpg";
import f5 from "../assets/projects/fasil/photo_4_2024-03-25_21-29-02.jpg";
import f6 from "../assets/projects/fasil/photo_6_2024-03-25_21-29-02.jpg";
import f7 from "../assets/projects/fasil/photo_7_2024-03-25_21-29-02.jpg";
import f8 from "../assets/projects/fasil/photo_8_2024-03-25_21-29-02.jpg";
import f9 from "../assets/projects/fasil/photo_9_2024-03-25_21-29-02.jpg";

import m1 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-54-56 Welcome EMwA Membership.png";
import m2 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-55-03 Welcome EMwA Membership.png";
import m3 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-55-17 Admin-Dashboard EMwA Membership.png";
import m4 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-55-28 Members EMwA Membership.png";
import m5 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-55-34 Members EMwA Membership.png";
import m6 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-56-09 Membership Report EMwA Membership.png";
import m7 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-56-16 Membership Report EMwA Membership.png";
import m8 from "../assets/projects/membership/Screenshot 2024-05-04 at 16-56-25 Welcome EMwA Membership.png";

import e1 from "../assets/projects/ERP/Screenshot 2024-05-04 at 17-00-42 Ethiopian Midwives Association.png";
import e2 from "../assets/projects/ERP/Screenshot 2024-05-04 at 17-01-01 Ethiopian Midwives Association.png";
import e3 from "../assets/projects/ERP/Screenshot 2024-05-04 at 17-01-12 Ethiopian Midwives Association.png";
import e4 from "../assets/projects/ERP/Screenshot 2024-05-04 at 17-01-25 Ethiopian Midwives Association.png";
import e5 from "../assets/projects/ERP/Screenshot 2024-05-04 at 17-02-25 Ethiopian Midwives Association.png";

import mc from "../assets/projects/case mobile/Screenshot_1683049656.png";
import mc2 from "../assets/projects/case mobile/Screenshot_1683049665.png";
import mc3 from "../assets/projects/case mobile/Screenshot_1683049683.png";
import mc4 from "../assets/projects/case mobile/Screenshot_1683049691.png";
import mc5 from "../assets/projects/case mobile/Screenshot_1683049698.png";
import mc6 from "../assets/projects/case mobile/Screenshot_1683049705.png";
import mc7 from "../assets/projects/case mobile/Screenshot_1683049711.png";
import mc8 from "../assets/projects/case mobile/Screenshot_1683049716.png";

import { FaClone } from "react-icons/fa";
import ProjectItem from "./Project";
import { useState } from "react";
function Portfolio() {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const projectsData = [
    {
      id: 1,
      title: "Project Managment",
      description:
        "A Project Management System encompasses a suite of tools and methodologies devised to strategize, coordinate, supervise, and monitor the evolution of a project from inception to culmination. Developed using Angular and ASP.NET Core, also with a mobile app using Flutter.",
      link: "#",
      screenshots: [
        { original: p1, thumbnail: p1 },
        { thumbnail: p2, original: p2 },
        { thumbnail: p3, original: p3 },
        { thumbnail: p4, original: p4 },
        { thumbnail: p5, original: p5 },
        { thumbnail: p6, original: p6 },
        { thumbnail: p7, original: p7 },
        { thumbnail: p8, original: p8 },
      ],
      category: "web",
    },
    {
      id: 2,
      title: "Membership Management System",
      description:
        "A membership management system for the Ethiopian Midwives Association (EMwA), facilitating membership administration. Developed using Angular and ASP.NET Core. For the Chapa integration, I utilized a Node.js API to communicate with the Angular frontend and the Chapa site.",
      link: "https://emwamms.org/board-member-dashboard",
      screenshots: [
        { original: m1, thumbnail: m1 },
        { thumbnail: m2, original: m2 },
        { thumbnail: m3, original: m3 },
        { thumbnail: m4, original: m4 },
        { thumbnail: m5, original: m5 },
        { thumbnail: m6, original: m6 },
        { thumbnail: m7, original: m7 },
        { thumbnail: m8, original: m8 },
      ],
      category: "web",
    },
    {
      id: 3,
      title: "Case Tracking",
      description:
        "There are two different kinds of cases, Inside cases (which helps to manage the issues that arise inside the bureau such leave request and so on) and outside cases (which helps to handle the issues of the clients of the bureau) (which helps to manage the issues of the clients of the bureau). Developed using Angular and ASP.NET Core, also with a mobile app using Kotlin.",
      link: "#",
      screenshots: [
        { original: c1, thumbnail: c1 },
        { thumbnail: c2, original: c2 },
        { thumbnail: c3, original: c3 },
        { thumbnail: c4, original: c4 },
        { thumbnail: c5, original: c5 },
        { thumbnail: c6, original: c6 },
      ],
      category: "web",
    },

    {
      id: 4,
      title: "ERP SYSTEM",
      description:
        "An ERP SYSTEM which contains Project Management, HRM, Finance, and Inventory modules. Developed using Angular and ASP.NET Core.",
      link: "https://emwaerp.com/",
      screenshots: [
        { original: e1, thumbnail: e1 },
        { thumbnail: e2, original: e2 },
        { thumbnail: e3, original: e3 },
        { thumbnail: e4, original: e4 },
        { thumbnail: e5, original: e5 },
      ],
      category: "web",
    },

    {
      id: 5,
      title: "Fasil Kenema App",
      description:
        "The Fasil Kenema App is a comprehensive mobile application designed to provide fans and supporters of Fasil Kenema Football Club with easy access to the latest news, match scores, and ticket purchasing capabilities.",
      link: "#",
      screenshots: [
        { original: f1, thumbnail: f1 },

        { thumbnail: f3, original: f3 },
        { thumbnail: f4, original: f4 },
        { thumbnail: f9, original: f9 },
        { thumbnail: f6, original: f6 },
        { thumbnail: f7, original: f7 },
        { thumbnail: f8, original: f8 },
      ],
      category: "mobile",
    },

    {
      id: 6,
      title: "Crave Addis",
      description: "",
      link: "https://craveaddis.com/",
      screenshots: [],
      category: "site",
    },
    {
      id: 7,
      title: "Ethio Wonder Tours",
      description: "",
      link: "https://ethiowondertours.com/",
      screenshots: [],
      category: "site",
    },

    {
      id: 8,
      title: "Ethio Planet Award",
      description: "",
      link: "https://ethioplanetaward.com/",
      screenshots: [],
      category: "site",
    },

    {
      id: 9,
      title: "Glroy Realestate",
      description: "",
      link: "https://gloryrealestateplc.com/",
      screenshots: [],
      category: "site",
    },

    {
      id: 10,
      title: "Case Tracking Mobile",
      description:
        "The Fasil Kenema App is a comprehensive mobile application designed to provide fans and supporters of Fasil Kenema Football Club with easy access to the latest news, match scores, and ticket purchasing capabilities.",
      link: "#",
      screenshots: [
        { original: mc, thumbnail: mc },
        { original: mc2, thumbnail: mc2 },
        { thumbnail: mc3, original: mc3 },
        { thumbnail: mc4, original: mc4 },
        { thumbnail: mc5, original: mc5 },
        { thumbnail: mc6, original: mc6 },
        { thumbnail: mc7, original: mc7 },
        { thumbnail: mc8, original: mc8 },
      ],
      category: "mobile",
    },

    // Add more projects as needed
  ];
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div id="portfolio" className="row bottom_45">
      <section className="col-md-12">
        <div className="col-md-12 content-header bottom_15">
          <div className="section-title top_30 bottom_30">
            <span></span>
            <h2>Projects</h2>
          </div>

          <div id="filters-container" className="mt-3">
            <div
              className={
                filter === "all"
                  ? "cbp-filter-item cbp-filter-item-active"
                  : "cbp-filter-item"
              }
              onClick={() => handleFilterChange("all")}
            >
              All
            </div>
            <div
              className={
                filter === "web"
                  ? "cbp-filter-item cbp-filter-item-active"
                  : "cbp-filter-item"
              }
              onClick={() => handleFilterChange("web")}
            >
              Web System
            </div>
            <div
              className={
                filter === "mobile"
                  ? "cbp-filter-item cbp-filter-item-active"
                  : "cbp-filter-item"
              }
              onClick={() => handleFilterChange("mobile")}
            >
              Mobile App Development
            </div>
            <div
              className={
                filter === "site"
                  ? "cbp-filter-item cbp-filter-item-active"
                  : "cbp-filter-item"
              }
              onClick={() => handleFilterChange("site")}
            >
              Web Sites
            </div>
          </div>
        </div>
        <div className="top_60">
          <div className="projects">
            {filteredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
