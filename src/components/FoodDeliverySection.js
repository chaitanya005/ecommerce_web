import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons.js";
// import TeamIllustrationSrc from "images/team-illustration-2.svg";
// import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

/* const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-gray-500`,
]); */

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-blue-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

const HighlightedText = tw.span`bg-blue-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const heading = (
  <React.Fragment>
    Everyday Food!
    <br />
    <br />
    <HighlightedText
      style={{ backgroundColor: "rgba(100,21,255)", paddingBottom: "0.5rem" }}
    >
      {" "}
      Healthy & Tasty
    </HighlightedText>
  </React.Fragment>
);

const description = "";

const FoodDeliverySection = () => {
  const imageCss = tw`rounded-3xl`;
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            style={{ maxWidth: "100%" }}
            css={Object.assign(tw`bg-cover`, imageCss)}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/257e0d59-ebf5-406d-a775-ba22ed951dc8.png"
            // src="/img/5.jpg"
            imageBorder={false}
            imageShadow={false}
            imageContainerCss={tw`p-2!`}
            imageCss={tw`w-20! h-20!`}
            imageDecoratorBlob={true}
            imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
          />
          {/* imageDecoratorBlob && (
              <DecoratorBlob css={imageDecoratorBlobCss} />
            ) */}
        </ImageColumn>
        <TextColumn textOnLeft={false} className="text">
          <TextContent>
            <Subheading></Subheading>
            <Heading style={{ color: "rgba(36,62,99)" }}>{heading}</Heading>
            <Description style={{ color: "rgba(124,139,161)" }}>
              {description}
            </Description>
            <PrimaryButton
              buttonRounded={true}
              as="a"
              href={"#"}
              style={{
                backgroundColor: "rgba(80,17,204)",
                padding: "0.75rem 2rem",
              }}
            >
              Coming Soon!
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <style>{`
            @media (min-width: 768px) {
                .text {
                    margin-left: 4rem;
                }
            }
      `}</style>
    </Container>
  );
};

export default FoodDeliverySection;
