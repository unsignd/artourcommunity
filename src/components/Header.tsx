import { Segmented, usePalette, useTheme } from '@unsignd/uuuui';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {}

const Container = styled.div<{
  $backgroundColor: string;
  $borderColor: string;
}>`
  width: calc(100vw - 160px);
  max-width: 2400px;
  height: 80px;

  position: fixed;
  padding: 0 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.$backgroundColor};
  border-bottom: 1px solid ${(props) => props.$borderColor};
`;

const Logo = styled.img`
  height: 32px;

  transition: scale 150ms ease-in-out;
  cursor: pointer;

  &:active {
    scale: 0.9;
  }
`;

export function Header({}: HeaderProps) {
  const { palette } = usePalette();
  const { theme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container
      $backgroundColor={palette[theme]['base.100']}
      $borderColor={palette[theme]['base.200']}
    >
      <Logo src="/assets/logo.webp" onClick={() => navigate('/')} />
      <Segmented
        options={{
          volunteer_hub: {
            text: 'Volunteer Hub',
            onClick: () => navigate('/volunteer_hub'),
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
    </Container>
  );
}
