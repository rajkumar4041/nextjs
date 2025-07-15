'use client';

// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: {
//     absolute: 'Contact',
//   },
//   description: 'Contact page description',
// };

const contactInfo = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 890',
  address: '123 Main St, Springfield, USA',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  message: 'Feel free to reach out for collaborations, questions, or just to say hello!',
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for reaching out!');
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-8 px-4">
      {/* <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center gap-4">
        <img
          src={contactInfo.avatar}
          alt={contactInfo.name}
          className="w-24 h-24 rounded-full border-4 border-purple-200 shadow"
        />
        <h2 className="text-3xl font-bold text-purple-700">{contactInfo.name}</h2>
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-600 text-sm font-medium">{contactInfo.email}</span>
          <span className="text-gray-600 text-sm">{contactInfo.phone}</span>
          <span className="text-gray-500 text-sm">{contactInfo.address}</span>
        </div>
        <p className="text-center text-gray-700 mt-2 italic">{contactInfo.message}</p>
      </div> */}
      <div className="mt-8 w-[50vw] max-w-lg">
        <h3 className="text-xl font-semibold text-white-600 mb-2 text-center">Send a Message</h3>
        <form className="border rounded-lg p-6 shadow flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
