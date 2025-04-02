import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getLandingPageData } from "~/data.server";
import HeroSection from "~/components/HeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "KonKon.AI Film Festival" },
    { name: "KonKon.AI", content: "A global celebration of AI-powered storytelling, showcasing innovative films, music videos, and trailers created with cutting-edge technology. Where creativity meets the future of cinema." },
  ];
};

export const loader: LoaderFunction = async () => {
  const landingPageData = await getLandingPageData();
  return landingPageData;
};

export default function Index() {
  const data = useLoaderData();

  // Find the hero block from the blocks array
  const heroBlock = data.blocks.find((block: any) => block.__component === "blocks.hero");

  if (!heroBlock) {
    console.error("Hero block is missing from the data.");
    return <div>Error: Hero block is missing.</div>;
  }

  return (
    <div>
      <HeroSection
        titleOne={heroBlock.titleOne}
        titleTwo={heroBlock.titleTwo}
        description={heroBlock.description}
        submit={heroBlock.submit}
      />
    </div>
  );
}