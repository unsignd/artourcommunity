import { usePalette, useTheme } from '@unsignd/uuuui';
import { styled } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import volunteerData from '../volunteer.json';

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
  margin-bottom: 20px;
`;

const Heading = styled.p<{
  $color: string;
}>`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;

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

export function Profile() {
  const { palette } = usePalette();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const username = localStorage.getItem('username'); // Assume username is stored in local storage
  const [entries, setEntries] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  console.log(username);

  useEffect(() => {
    if (!username) {
      setError('No username found');
      return;
    }

    try {
      const userProfile = volunteerData.find((profile: any) => profile.username === username);

      if (!userProfile) {
        setError('Profile not found');
        console.log('Profile not found');
        return;
      }

      setEntries(userProfile.entries);
      const total = userProfile.entries.reduce((sum: number, entry: any) => {
        return sum + (entry.hour || 0); // Ensure to handle cases where `amount` might be missing or not a number
      }, 0);
      setTotalAmount(total);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Error fetching profile');
    }
  }, [username]);

  if (error) return <div>{error}</div>;

  if (entries.length === 0) return <div>No entries found.</div>;

  return (
    <Container $backgroundColor={palette[theme]['base.100']}>
      <TextWrapper>
        <Heading $color={palette[theme]['base.500']}>
          Welcome to your volunteer hub, {username}!
        </Heading>

        <Text $color={palette[theme]['base.500']}>
          You currently have {totalAmount} volunteer hours.
        </Text>

        {entries.map((entry: any) => (
        <div key={entry.id} style={{ marginBottom: '20px' }}>
          <h2>{entry.title}</h2>
          <p>Date: {entry.time}</p>
          <p>Hours: {entry.hour}</p>
        </div>
        ))}
      </TextWrapper>
    </Container>
  );
}
