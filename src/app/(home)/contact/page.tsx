import { Metadata } from "next";

/**
 * this metadata is only for this about page & it will override the global metadata
 */
export const metadata:Metadata = {
  title: {
    absolute: 'Contact',
  },
  description: 'Contact page description',
};


const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
