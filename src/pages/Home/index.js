
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Container from "../../components/Container";

import ContactForm from "../../components/ContactForm"
import ContentBlock from "../../components/ContentBlock"
import MiddleBlock from "../../components/MiddleBlock"
import ScrollToTop from "../../components/ScrollToTop"


const Home = () => {
  return (
    <Container>
      {/* show scroll-top icon on home page */}
     <ScrollToTop/>
     {/* Landing page template section */}
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      {/* Introduce Your Product Quickly / Effectively section*/}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      {/* light fast and responsive section */}
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      {/* ready made section */}
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
{/* thats about it section */}
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      {/* form section */}
      <ContactForm
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
