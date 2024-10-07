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

// Style for the Articles Section
const ArticlesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 80px;
`;

const ArticleCard = styled.div<{
  $borderColor: string;
}>`
  width: 500px;
  padding: 24px;
  border: 2px solid ${(props) => props.$borderColor};
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ArticleHeading = styled.p<{
  $color: string;
}>`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.$color};
  margin-bottom: 16px;
`;

const ArticleText = styled.p<{
  $color: string;
}>`
  font-size: 16px;
  color: ${(props) => props.$color};
  margin-bottom: 8px;
`;

const ArticleDate = styled.p<{
  $color: string;
}>`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.$color};
  margin-bottom: 4px;
`;

export function News() {
  const { palette } = usePalette();
  const { theme } = useTheme();

  return (
    <Container $backgroundColor={palette[theme]['base.100']}>
      <TextWrapper>
        <Text $color={palette[theme]['base.400']}>News</Text>
        <Heading $color={palette[theme]['base.500']}>
          Welcome to our newsroom!
        </Heading>
      </TextWrapper>
      <QuoteWrapper>
        <QuoteText $color={palette[theme]['primary.200']}>
          Here you will find all of our latest updates and information.{'\n'}We
          strive to keep our community informed and up-to-date on all of the
          latest happenings and events within our organization.{'\n'}Our team
          works hard to provide high-quality content that is both informative
          and engaging.{'\n'}We hope that you will find our blogs to be a
          valuable resource for staying informed about the work that we do.
        </QuoteText>
      </QuoteWrapper>
      <ArticlesSection>
        <ArticleCard $borderColor={palette[theme]['base.300']}>
          <ArticleDate $color={palette[theme]['primary.200']}>
            Dec. 29, 2023
          </ArticleDate>
          <ArticleHeading $color={palette[theme]['base.500']}>
            Introducing: Art of Our Community Foundation
          </ArticleHeading>
          <ArticleText $color={palette[theme]['base.400']}>
            Introducing our community-driven foundation focused on art and its
            impact on local projects. Discover our latest updates!
          </ArticleText>
        </ArticleCard>
      </ArticlesSection>
    </Container>
  );
}
