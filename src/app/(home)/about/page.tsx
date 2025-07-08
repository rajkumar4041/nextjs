import { Metadata } from 'next';
import UserSearchInput from './UserSearchInput';

/**
 * this metadata is only for this about page & it will override the global metadata
 */
export const metadata: Metadata = {
  title: {
    default: 'About',
    // render title of active metadata at the %s position and append " | About" to it
    template: '%s | About',
  },
  description: 'About page description',
};

const About = () => {
  return (
    <>
      <div>about</div>;
      <UserSearchInput />
      {/* client component placed inside server component */}
    </>
  );
};

export default About;
