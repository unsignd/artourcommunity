import { Button, usePalette, useTheme } from '@unsignd/uuuui';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const BannerWrapper = styled.div`
  width: 100%;
  max-height: 600px;

  position: relative;

  cursor: pointer;

  &::after {
    width: 100%;
    height: 6px;

    position: absolute;
    bottom: 0;
    left: 0;

    background-repeat: repeat-x;
    background-size: contain;
    background-image: url('/assets/decorations/wave_down_1.svg');

    content: '';
    z-index: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);

  pointer-events: none;
  z-index: 2;
`;

const Heading = styled.p<{
  $color: string;
}>`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.25;

  color: ${(props) => props.$color};
`;

const Text = styled.p<{
  $color: string;
}>`
  font-size: 16px;

  color: ${(props) => props.$color};
`;

const ButtonContainer = styled.div`
  padding-top: 12px;

  pointer-events: auto;
`;

const BannerFilter = styled.div<{
  $backgroundColor: string;
}>`
  width: 100%;
  height: 100%;

  position: absolute;

  background: linear-gradient(
    0deg,
    ${(props) => props.$backgroundColor} 0%,
    rgba(0, 0, 0, 0) 100%
  );

  pointer-events: none;
  z-index: 1;
`;

const Banner = styled.img`
  min-width: 100vw;
  max-height: 600px;

  object-fit: cover;
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

const CardWrapper = styled.div`
  width: 100%;
  height: calc(960px * 5);

  display: flex;
  justify-content: center;

  position: relative;

  margin: 160px 0;
`;

const CardGroup = styled.div`
  width: 1000px;
  height: 600px;

  position: sticky;
  top: calc(50% - 300px);
`;

const Card = styled.div<{
  $visible: boolean;
}>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  position: absolute;
  top: 0;
  left: 0;

  text-align: center;

  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 200ms ease;
`;

const CardImage = styled.img`
  width: 1000px;
  max-width: calc(100% - 160px);
  height: 400px;

  border-radius: 8px;
  object-fit: cover;
`;

const CardTextGroup = styled.div`
  width: 800px;
  max-width: calc(100% - 160px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & p {
    white-space: nowrap;
  }
`;

export function Home() {
  const { palette } = usePalette();
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll = () => {
    setScrollY(
      (window.scrollY -
        (cardRef.current?.offsetTop ?? 0) +
        window.innerHeight) *
        (window.scrollY /
          (960 * 5 + (cardRef.current?.offsetTop ?? 0) - window.innerHeight))
    );
  };

  useEffect(() => {
    if (cardRef) {
      setScrollY(
        ((window.scrollY -
          (cardRef.current?.offsetTop ?? 0) +
          window.innerHeight) *
          window.scrollY) /
          (960 * 5 + (cardRef.current?.offsetTop ?? 0) - window.innerHeight)
      );
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Container $backgroundColor={palette[theme]['base.100']}>
      <BannerWrapper>
        <TextWrapper>
          <Heading $color={palette[theme]['base.100']}>
            Rejuvenize Our City
          </Heading>
          <Text $color={palette[theme]['base.100']}>
            Transforming Vancouver's Communities Through Art.
          </Text>
          <ButtonContainer>
            <Button curve="large" color="primary" priority="high">
              Get Involved
            </Button>
          </ButtonContainer>
        </TextWrapper>
        <BannerFilter $backgroundColor={palette[theme]['base.500']} />
        <Carousel
          responsive={{
            default: {
              breakpoint: { max: 99999, min: 0 },
              items: 1,
              slidesToSlide: 1,
            },
          }}
          swipeable
          draggable
          infinite
          autoPlay
          autoPlaySpeed={3000}
          arrows={false}
        >
          <Banner src="/assets/banners/0.webp" />
          <Banner src="/assets/banners/1.png" />
        </Carousel>
      </BannerWrapper>
      <QuoteWrapper>
        <QuoteText $color={palette[theme]['primary.200']}>
          Our mission is to enhance the unique characteristics of communitiesin
          Vancouver through the use of art displayed to the public.{'\n'}Through
          diligence, teamwork, creativity, and awareness, our team aims to
          elevate communities and make them a more welcoming environment for
          all.
        </QuoteText>
      </QuoteWrapper>
      <CardWrapper ref={cardRef}>
        <CardGroup>
          <Card $visible={scrollY < 960 * 1}>
            <CardTextGroup>
              <Heading $color={palette[theme]['base.500']}>
                About Art of Our Community Foundation
              </Heading>
              <Text $color={palette[theme]['base.400']}>
                short description 1
              </Text>
            </CardTextGroup>
            <Button
              curve="large"
              color="base"
              priority="high"
              onClick={() => navigate('')}
            >
              Learn more
            </Button>
            <CardImage src="/assets/cards/0.png" />
          </Card>
          <Card $visible={scrollY >= 960 * 1 && scrollY < 960 * 2}>
            <CardTextGroup>
              <Heading $color={palette[theme]['base.500']}>
                Upcoming Projects To Fund
              </Heading>
              <Text $color={palette[theme]['base.400']}>
                short description 2
              </Text>
            </CardTextGroup>
            <Button curve="large" color="base" priority="high">
              Learn more
            </Button>
            <CardImage src="/assets/cards/1.png" />
          </Card>
          <Card $visible={scrollY >= 960 * 2 && scrollY < 960 * 3}>
            <CardTextGroup>
              <Heading $color={palette[theme]['base.500']}>
                All the Latest Updates
              </Heading>
              <Text $color={palette[theme]['base.400']}>
                short description 3
              </Text>
            </CardTextGroup>
            <Button curve="large" color="base" priority="high">
              Learn more
            </Button>
            <CardImage src="/assets/cards/2.png" />
          </Card>
          <Card $visible={scrollY >= 960 * 3 && scrollY < 960 * 4}>
            <CardTextGroup>
              <Heading $color={palette[theme]['base.500']}>News</Heading>
              <Text $color={palette[theme]['base.400']}>
                short description 4
              </Text>
            </CardTextGroup>
            <Button curve="large" color="base" priority="high">
              Learn more
            </Button>
            <CardImage src="/assets/cards/3.png" />
          </Card>
          <Card $visible={scrollY >= 960 * 4}>
            <CardTextGroup>
              <Heading $color={palette[theme]['base.500']}>The Gallery</Heading>
              <Text $color={palette[theme]['base.400']}>
                short description 5
              </Text>
            </CardTextGroup>
            <Button curve="large" color="base" priority="high">
              Learn more
            </Button>
            <CardImage src="/assets/cards/4.png" />
          </Card>
        </CardGroup>
      </CardWrapper>
    </Container>
  );
}
