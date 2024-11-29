import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View detail blog",
  description: "View detail for a specific blog",
};

export default function ViewDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
