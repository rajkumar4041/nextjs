import { log } from 'console';

const ReviewAttachment = async ({ params }: { params: Promise<{ attachmentId: string }> }) => {
  const { attachmentId } = await params;

  log('ReviewAttachment component rendered with attachmentId:', attachmentId);
  return <div>ReviewAttachment:{attachmentId}</div>;
};

export default ReviewAttachment;
