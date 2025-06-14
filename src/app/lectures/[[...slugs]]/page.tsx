import { log } from 'console';
import NotFoundPage from '@/app/not-found';

const Lectures = async ({ params }: { params: Promise<{ slugs: string[] }> }) => {
  const { slugs } = await params;
  log('Lectures slugs:', slugs);

  if (slugs?.length === 1) {
    // return <div>Lecture: {slugs[0]}</div>;

    return NotFoundPage();

    // works fine
    // return <NotFoundPage/>
  }

  if (slugs?.length === 2) {
    return <div>Lecture: {slugs[1]}</div>;
  }

  return <div>default Lectures</div>;
};

export default Lectures;
