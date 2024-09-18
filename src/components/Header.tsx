import { Segmented, usePalette, useTheme } from '@unsignd/uuuui';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div<{
  $backgroundColor: string;
  $borderColor: string;
}>`
  width: 100vw;
  max-width: 2400px;
  height: 80px;

  position: fixed;

  background-color: ${(props) => props.$backgroundColor};
  border-bottom: 1px solid ${(props) => props.$borderColor};

  z-index: 3;
`;

const Wrapper = styled.div`
  height: 100%;

  padding: 0 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 32px;

  transition: transform 150ms ease-in-out;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export function Header() {
  const { palette } = usePalette();
  const { theme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container
      $backgroundColor={palette[theme]['base.100']}
      $borderColor={palette[theme]['base.300']}
    >
      <Wrapper>
        <Logo src="/assets/logo.webp" onClick={() => navigate('/')} />
        <Segmented
          options={{
            volunteer_hub: {
              text: 'Volunteer Hub',
              onClick: () => navigate('/login'),
            },
            about_us: {
              text: 'About Us',
              onClick: () => navigate('/about_us'),
            },
            what_we_do: {
              text: 'What We Do',
              onClick: () => navigate('/what_we_do'),
            },
            news: {
              text: 'News',
              onClick: () => navigate('/news'),
            },
            gallery: {
              text: 'Gallery',
              onClick: () => navigate('/gallery'),
            },
          }}
          selection={location.pathname.slice(1)}
        />
      </Wrapper>
    </Container>
  );
}
