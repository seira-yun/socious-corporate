import React, {useState} from 'react';
import BasicModal from '../../shared/QR-Modal';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import SimpleLocalize from '../../shared/SimpleLocalize';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';
import { trackButtonClick } from '../../segmentUtils';

const Intro = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { introBackgroundImage } = useStaticQuery(
    graphql`
      query {
        introBackgroundImage: file(relativePath: {eq: "homepage-banner-mobile.webp"}) {
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

  const pluginImage = getImage(introBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
  ].reverse();

  const intl = useIntl();

  const jaPage = intl.locale === 'ja';
  const organizationLink = jaPage ? '/ja/organization' : '/organization';

  return (
    <SimpleLocalize {...props}>
      <BgImage image={backgroundFluidImageStack} className="section-intro" alt='home banner'>
        <div className="intro-banner__text pt-40">
          <h1>
            <FormattedMessage
              id="intro-hero-title"
            />
          </h1>
          <h3>
            <FormattedMessage
              id="intro-hero-subtitle"
            /></h3>

          <div className="section-app-links__app-links-block">
            <div className="section-app-links__app-links">
                <button
                  className="section-app-links__app-links-button-work"
                  onClick={(event) => {handleOpen(); trackButtonClick(event);}}
                >
                  Find work
                </button>
            </div>
            <div className="section-app-links__app-links">
              <a
                href={organizationLink}
                rel="noreferrer"
                onClick={trackButtonClick}
              >
                <button className="section-app-links__app-links-button">
                  Hire talent
                </button>
              </a>
            </div>
          </div>
        </div>
      </BgImage>
      <BasicModal open={open} handleClose={handleClose} />
    </SimpleLocalize>
  )
}

export default Intro
