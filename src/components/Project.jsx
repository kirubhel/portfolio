// ProjectItem.js
import React from "react";
import { FaExternalLinkAlt  } from "react-icons/fa";
import { useState } from "react";
import ReactImageGallery from "react-image-gallery";

const ProjectItem = ({ project }) => {
  const { title, description, link, screenshots } = project;
  const [fullscreenImage, setFullscreenImage] = useState(null);


  return (
    <div className="project-item">
    <div  className="cbp-item webdesign" style={{ backgroundColor:'rgba(245, 245, 245, 0.25)', padding: '20px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
      <figcaption>
        <span className="title">
          <span className="dot"></span>
          <strong>{title}</strong>
        </span>
        <br />
        <span className="info">{description}</span>
      </figcaption>
      {link!='#'&& <a href={link} target="_blank" className="cbp-singlePage">
        <div>
          <div className="nicon">
            <FaExternalLinkAlt />
          </div>
          <span>{link}</span>
        </div>
      </a>}
    </div>
    {screenshots.length > 0 && <ReactImageGallery  showPlayButton={false} items={screenshots} />}
  </div>
  )
}

export default ProjectItem;
