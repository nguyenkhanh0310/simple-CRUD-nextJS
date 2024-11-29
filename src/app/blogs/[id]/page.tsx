"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = () => {
  const params = useParams();

  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(">> check data: ", data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="my-3">
        <Link href={"/blogs"} className="text-primary">
          Go back
        </Link>
      </div>
      <Card className="text-center">
        <Card.Header>Title: {data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetailBlog;
