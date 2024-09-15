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

const Heading = styled.p<{
  $color: string;
}>`
  font-size: 32px;
  font-weight: 500;

  color: ${(props) => props.$color};

  line-height: 1.25;
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

const SectionWrapper = styled.div`
  margin-top: 160px;
  padding: 0 80px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  white-space: pre-wrap;
`;

const SectionText = styled(Text)`
  max-width: 50%;

  white-space: pre-wrap;
`;

export function About() {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $backgroundColor={palette[theme]['base.100']}>
      <TextWrapper>
        <Text $color={palette[theme]['base.400']}>About Us</Text>
        <Heading $color={palette[theme]['base.500']}>
          AWESOME TEXT GOES HERE
        </Heading>
      </TextWrapper>
      <QuoteWrapper>
        <QuoteText $color={palette[theme]['primary.200']}>
          Working with art in the form of murals. Embracing the unique
          characteristics of each community.{'\n'}Creating everlasting impacts
          through themes of multiculturalism, environmentalism, history, etc.
        </QuoteText>
      </QuoteWrapper>
      <SectionWrapper>
        <Heading $color={palette[theme]['base.500']}>Vision & Value.</Heading>
        <SectionText $color={palette[theme]['base.400']}>
          Art of Our Community’s vision is to provide a platform for youth to
          express themselves creatively and in a manner that benefits their
          community in everlasting ways.{'\n'}Additionally, we also aim for a
          more artistically involved future generation.{'\n'}
          {'\n'}Art of Our Community’s mission is to enhance the unique
          characteristics of communities in Vancouver through the use of art
          displayed to the public.{'\n'}Through diligence, teamwork, creativity,
          and awareness, our team aims to elevate communities and make them a
          more welcoming environment for all.
        </SectionText>
      </SectionWrapper>
      <SectionWrapper>
        <Heading $color={palette[theme]['base.500']}>
          Everyday projects{'\n'}that benefit{'\n'}the community.
        </Heading>
      </SectionWrapper>
    </Container>
  );
}
