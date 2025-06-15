const ReviewAttachment = ({ params }: { params: { attachmentId: string } }) => {
  const { attachmentId } = params;

  return <div>ReviewAttachment:{attachmentId}</div>;
};

export default ReviewAttachment;
