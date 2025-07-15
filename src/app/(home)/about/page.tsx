import { Metadata } from 'next';
import UserSearchInput from './UserSearchInput';

/**
 * this metadata is only for this about page & it will override the global metadata
 */
export const metadata: Metadata = {
  title: {
    default: 'About',
    template: '%s | About',
  },
  description: 'About page description',
};

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Developer',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  bio: 'Passionate full-stack developer with a love for building modern web applications using React and Next.js.',
};

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-8 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center gap-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-blue-200 shadow"
        />
        <h2 className="text-2xl font-bold text-blue-700">{user.name}</h2>
        <p className="text-gray-600 text-sm">{user.role}</p>
        <p className="text-gray-500 text-sm">{user.email}</p>
        <p className="text-center text-gray-700 mt-2">{user.bio}</p>
      </div>
      <div className="mt-8 w-full max-w-lg">
        <h3 className="text-xl font-semibold text-blue-600 mb-2 text-center">Search Users</h3>
        <UserSearchInput />
        {/* client component placed inside server component */}
      </div>
    </section>
  );
};

export default About;
