import React, {useState} from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import SimpleLocalize from '../../shared/SimpleLocalize';
import { FormattedMessage } from 'react-intl';
import BasicModal from "../../shared/QR-Modal"
import { trackButtonClick } from '../../segmentUtils';

const Intro = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { orgBackgroundImage } = useStaticQuery(
    graphql`
      query {
        orgBackgroundImage: file(relativePath: {eq: "org-banner.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 100,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(orgBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
  ].reverse();

  return (
     <SimpleLocalize {...props}>
     <BgImage image={backgroundFluidImageStack} className="organization-section-intro">
       <div className="organization-intro-banner__text">
         <h1>
           <FormattedMessage
             id="organization-hero-header"
           />
         </h1>
         <h3> 
         <FormattedMessage
             id="organization-hero-subtitle"
           /></h3>

         <div className="section-app-links__app-links-block">
              <div className="section-app-links__app-links">
                  <button className="section-app-links__app-links-button-work"
                    onClick={(event) => {handleOpen(); trackButtonClick(event);}}
                  >
                Start hiring
                  </button>
              </div>
              
            </div>
       </div>
     </BgImage>
     <BasicModal open={open} handleClose={handleClose} />
   </SimpleLocalize>
  )
}

export default Intro
