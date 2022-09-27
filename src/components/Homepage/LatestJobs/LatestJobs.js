import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import SimpleLocalize from "../../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import Latest from "./Latest";
import latestJobs from "../../../../data/Homepage/latestJobs";
import BasicModal from "../../shared/QR-Modal";
import { trackButtonClick } from "../../segmentUtils" 


const LatestJobs = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = useStaticQuery(graphql`
    query LatestJobs {
      partnerships: file(relativePath: {eq: "latest-jobs/cdp.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 10})
        }
      }
      habitat: file(relativePath: {eq: "latest-jobs/habibat.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 10})
        }
      }
      developer: file(relativePath: {eq: "latest-jobs/roi.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 10})
        }
      }
      designer: file(relativePath: {eq: "latest-jobs/zearn.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 10})
        }
      }
      nutritionist: file(relativePath: {eq: "latest-jobs/wfp.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 10})
        }
      }
      producer: file(relativePath: {eq: "latest-jobs/prosperity.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 10})
        }
      }
    }
  `)

  const { partnerships, habitat, developer, designer, nutritionist, producer } = data
  const latestImages = [partnerships, habitat, developer, designer, nutritionist, producer]

  const { language } = props.pageContext
  const latestJobComponentLanguageSelector = language === 'ja' ? latestJobs : latestJobs

  // console.log({ latestJobs })

  const latestComponents = latestJobComponentLanguageSelector.map(item =>
    <Latest
      key={item.id}
      imageOpt={latestImages[item.id - 1]}
      latestJobDetails={item}
    />
  )

  return (
    <SimpleLocalize {...props}>
      <section className="latest-section-main">
        <div className="latest-title" id="what-we-do">
          <h2>
            <FormattedMessage
              id="latest-jobs"
            />
          </h2>
        </div>

        <div className="latest-section">
          {latestComponents}
        </div>
        <button 
          onClick={(event) => {trackButtonClick(event); handleOpen();} }
          className="latest-more"
        >View more jobs</button>

      </section>
      <BasicModal open={open} handleClose={handleClose} />
    </SimpleLocalize>
  )
}

export default LatestJobs
