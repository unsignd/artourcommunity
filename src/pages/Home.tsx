import { Button, usePalette, useTheme } from '@unsignd/uuuui';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

import { ReactComponent as ArrowRightSVG } from '../svgs/arrow_right.svg';

interface HomeProps {}

const Container = styled.div<{
  $backgroundColor: string;
}>`
  width: 100vw;
  max-width: 2400px;
  min-height: calc(100vh - 80px);

  margin-top: 80px;

  display: flex;

  background-color: ${(props) => props.$backgroundColor};
`;

const BannerWrapper = styled.div`
  min-width: 100%;
  max-height: 600px;

  position: relative;

  cursor: pointer;
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  pointer-events: none;
  z-index: 2;
`;

const Heading = styled.p<{
  $color: string;
}>`
  font-size: 36px;
  font-weight: 500;

  color: ${(props) => props.$color};
`;

const Text = styled.p<{
  $color: string;
}>`
  font-size: 20px;

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

export function Home({}: HomeProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

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
              breakpoint: { max: 100000, min: 0 },
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
    </Container>
  );
}
