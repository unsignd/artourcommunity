import { usePalette, useTheme } from '@unsignd/uuuui';
import { styled } from 'styled-components';

const Container = styled.div<{
  $backgroundColor: string;
}>`
  width: 100vw;
  max-width: 2400px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundColor};
`;

const TextWrapper = styled.div`
  margin: 80px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    width: 100%;
    height: 13.5px;
    position: absolute;
    bottom: -80px;
    left: 0;
    display: flex;
    justify-content: center;
    background-repeat: repeat-x;
    background-size: contain;
    background-image: url('/assets/decorations/wave_down_3.svg');
    content: '';
    z-index: 2;
  }
`;

const Text = styled.p<{
  $color: string;
}>`
  font-size: 16px;
  color: ${(props) => props.$color};
`;

const Date = styled.p<{
  $color: string;
}>`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.$color};
`;

const Heading = styled.p<{
  $color: string;
}>`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.25;
  color: ${(props) => props.$color};
`;

const QuoteWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  position: relative;
  background-color: #fefcec;

  &::after {
    width: 100%;
    height: 13.5px;
    position: absolute;
    bottom: -13.5px;
    left: 0;
    display: flex;
    justify-content: center;
    background-repeat: repeat-x;
    background-size: contain;
    background-image: url('/assets/decorations/wave_down_2.svg');
    content: '';
    z-index: 2;
  }
`;

const QuoteText = styled(Text)`
  padding: 40px 80px 32.5px 80px;
  text-align: center;
  font-size: 16px;
  white-space: pre-wrap;
`;

const SectionGroup = styled.div`
  margin: 80px 0;
`;

const SectionWrapper = styled.div`
  margin-top: 80px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  white-space: pre-wrap;
`;

const SectionText = styled(Text)`
  max-width: 50%;
  white-space: pre-wrap;
`;

export function Projects() {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $backgroundColor={palette[theme]['base.100']}>
      <TextWrapper>
        <Text $color={palette[theme]['base.400']}>What We Do</Text>
        <Heading $color={palette[theme]['base.500']}>
          AWESOME TEXT GOES HERE
        </Heading>
      </TextWrapper>
      <QuoteWrapper>
        <QuoteText $color={palette[theme]['primary.200']}>
          We are a community-driven foundation that uses art as a medium to give
          back to our community through large-scale projects.
          {'\n'}Our goal is to enhance, embrace, and elevate the unique
          characteristics of our community.
        </QuoteText>
      </QuoteWrapper>
      <SectionGroup>
        <SectionWrapper>
          <Heading $color={palette[theme]['base.500']}>
            OUR PAST PROJECTS.
          </Heading>
        </SectionWrapper>
        <SectionWrapper>
          <Heading $color={palette[theme]['base.500']}>
            The Hollybridge Community Garden Project
          </Heading>
          <SectionText $color={palette[theme]['base.400']}>
            A project dedicated to the livelihood of the community garden at a
            local apartment complex in Richmond, BC, the Hollybridge Community
            Garden Project allowed numerous youths aged 12-17 from the Lower
            Mainland to partake in a project which fostered teamwork, critical
            thinking, creative thinking, and communication.{'\n'}
            {'\n'}The project was centered around murals on the plant holders
            which are found scattered throughout the garden. The group of
            artists and additional volunteers who participated in the painting
            process spent the entire months of July and August rejuvenating the
            community garden. By masking the original copper brown with colorful
            murals embracing unique aspects of the community and targeted
            towards the elderly and young children, the murals were able to
            brighten and liven up the community garden.
          </SectionText>
        </SectionWrapper>
        <SectionWrapper>
          <Date $color={palette[theme]['primary.200']}>
            FEBRUARY 11TH, 2023
          </Date>
          <Heading $color={palette[theme]['base.500']}>
            Turkiye Earthquake Fundraiser
          </Heading>
          <SectionText $color={palette[theme]['base.400']}>
            Following the disastrous Turkiye earthquake of 5.6 magnitude on
            February 6th, our AOOC team dedicated our Valentines Day cards and
            fundraiser to supporting the families in Turkiye. After weeks of
            hard work from our design team ranging from 12-18 year olds,
            collaborating and providing feedback, and selling in the Vancouver
            rain, we have been able to raise over 200 dollars while completely
            selling out the cards! The 200+ dollars have been 100% donated to
            charity, and we look forward to helping out the community further in
            the future.
          </SectionText>
        </SectionWrapper>
        <SectionWrapper>
          <Date $color={palette[theme]['primary.200']}>
            February 28TH, 2023
          </Date>
          <Heading $color={palette[theme]['base.500']}>
            COMMUNITY PAINTING PROJECT
          </Heading>
          <SectionText $color={palette[theme]['base.400']}>
            Our Community Painting Project is well underway as some of the
            individuals have completed their large murals to be hung on the
            walls. Following months of sketching, painting, and fixing details,
            2 out of the 4 pieces are ready to be presented to the public, and
            we hope the public loves our paintings just as much as we do! The
            AOOC individuals are super excited to have their work displayed as
            they each portray meaningful messages:{'\n'}
            Angela’s piece conveys a message of multiculturalism in Vancouver
            and the importance of diversity, as the animals - each the national
            animal of a corresponding country - live in harmony and balance. The
            graphic design approach she took will hopefully appeal to children
            and liven up the blank walls within the building!{'\n'}
            The piece is representative of Chinese culture and traditions. With
            traditional Chinese colors and the goldfish, a symbol of good luck
            and good fortune, this piece speaks on the importance of Chinese
            culture and beliefs in an international setting. The traditional
            approach Jenny took to the mural will speak to the people of Asian
            descent in the building and community!
          </SectionText>
        </SectionWrapper>
        <SectionWrapper>
          <Date $color={palette[theme]['primary.200']}>October 25TH, 2023</Date>
          <Heading $color={palette[theme]['base.500']}>
            "Happy People, Happy Life"
          </Heading>
          <SectionText $color={palette[theme]['base.400']}>
            For the past year, two AOOC members have been working on producing a
            mural to be hung on the walls of their Senior School building in
            partnership with the Vancouver Mural Artist Liang Wang. The students
            decided to address the issue of mental health and well-being through
            their painting named “Happy People, Happy Life” which clearly
            depicted the various aspects of mental well-being. Aspects of the
            mural include spending time outdoors, physical activity, healthy
            eating, and even spending time with family and loved ones. The mural
            has been hung on the third floor of the St. John’s School Senior
            building in a “well-ness” corner for students to unwind and relax
            whenever they please. We hope this painting brings you a bit of
            peace and well-ness!
          </SectionText>
        </SectionWrapper>
      </SectionGroup>
    </Container>
  );
}
