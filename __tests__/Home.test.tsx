import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock the components used in Home
jest.mock('@/components/Socials', () => {
  const Socials = () => <div>Socials Component</div>;
  Socials.displayName = 'Socials';
  return Socials;
});

jest.mock('@/components/ProfilePicture', () => {
  const ProfilePicture = (props: any) => (
    <div data-testid="profile-picture" {...props}>Profile Picture</div>
  );
  ProfilePicture.displayName = 'ProfilePicture';
  return ProfilePicture;
});

jest.mock('@/components/SequentialTextAnimation', () => {
  const SequentialTextAnimation = (props: any) => (
    <div>{props.text}</div>
  );
  SequentialTextAnimation.displayName = 'SequentialTextAnimation';
  return SequentialTextAnimation;
});

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders the greeting message', () => {
    expect(screen.getByText(/hello! i’m/i)).toBeInTheDocument();
  });

  it('renders the name', () => {
    expect(screen.getByText(/Jerome Orio/i)).toBeInTheDocument();
  });

  it('renders the description', () => {
    expect(screen.getByText(/A software developer passionate about creating innovative solutions/i)).toBeInTheDocument();
  });

  it('renders the download CV button', () => {
    const downloadButton = screen.getByRole('link', { name: /download cv/i });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute('href', '/Jerome_Orio_Resume_2024.pdf');
  });

  it('renders the Socials component', () => {
    expect(screen.getByText(/Socials Component/i)).toBeInTheDocument();
  });
});
