import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog list",
  description: "Basic CRUD website using nextJS",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
