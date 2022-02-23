import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";
import { SERVICE_ITEMS } from "common/data/SaasClassic";

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
}) => {
  return (
    <SectionWrapper id="social_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content="Where to find us" />
          <Text
            {...secDes}
            content="Gitcoin application and github page coming soon."
          />
        </Box>

        <Box {...Row}>
          {SERVICE_ITEMS.map((item, index) => (
            <a
              key={`service-anchor-${index}`}
              href={item.link}
              target={item.link ? "_blank" : null}
            >
              <Box
                {...Col}
                key={`service-itemcol-${index}`}
                className="service_item_col"
              >
                <Box className="service_item" key={`service-item-${index}`}>
                  <Box className="service_icon" key={`service-icon-${index}`}>
                    {item.img ? (
                      <img src={item.icon} style={item.style} />
                    ) : (
                      <i className={item.icon} />
                    )}
                  </Box>
                  <Heading
                    as="h3"
                    content={item.title}
                    {...serviceTitleStyle}
                  />
                </Box>
              </Box>
            </a>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
  Row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    ml: ["0", "-15px", "-20px", "35px", "35px"],
    mr: ["0", "-15px", "-20px", "35px", "35px"],
  },
  Col: {
    pl: ["15px", "15px", "25x", "35px", "35px"],
    pr: ["15px", "15px", "25px", "35px", "35px"],
    mb: "40px",
  },
  serviceTitleStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "17px"],
    fontWeight: "500",
    color: "#ff4361",
    mb: 0,
  },
  secDes: {
    fontSize: ["14px", "15px", "16px"],
    color: "#5d646d",
    lineHeight: "1.875",
    mt: "30px",
    ml: "auto",
    mr: "auto",
    width: "470px",
    maxWidth: "100%",
    textAlign: "center",
  },
};

export default ServiceSection;
