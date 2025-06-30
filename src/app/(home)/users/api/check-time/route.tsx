/**
 * caching apply for file
 */
export const dynamic = 'force-static';
/**
 * revalidate after every 10 second recache
 */
export const revalidate = 10;
//!10 Sec

export const GET = () => {
  const currentTime = new Date().toLocaleTimeString();
  return Response.json({ currentTime, message: 'Time check successful' });
};
