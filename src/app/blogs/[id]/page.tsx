const ViewDetailBlog = async ({ params }: { params: { id: string } }) => {
  // console.log(">> check searchParams: ", searchParams);
  const checkParams = await params;
  console.log(">> check params", checkParams);

  return <div>View detail page with id: {checkParams.id}</div>;
};

export default ViewDetailBlog;
