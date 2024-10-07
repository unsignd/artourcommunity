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

export function Gallery() {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $backgroundColor={palette[theme]['base.100']}>
      <TextWrapper>
        <Text $color={palette[theme]['base.400']}>Gallery</Text>
        <Heading $color={palette[theme]['base.500']}>
          Yoohoo awesome gallery here
        </Heading>
      </TextWrapper>
      <QuoteWrapper>
        <QuoteText $color={palette[theme]['primary.200']}>TBD</QuoteText>
      </QuoteWrapper>
    </Container>
  );
}
