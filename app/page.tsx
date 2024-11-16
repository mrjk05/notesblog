import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "notes",
    // Remove or comment out the openGraph section
    // openGraph: {
    //   images: [`/api/og?title=${encodeURIComponent("notes")}&emoji=${encodeURIComponent("✏️")}`],
    // },
  };
}

export default async function Home() {}