import { Metadata } from 'next';

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
  return <div>about</div>;
};

export default About;
