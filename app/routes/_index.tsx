import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getLandingPageData } from "~/data.server";
import HeroSection from "~/components/HeroSection";
import SponsorsSection from "~/components/SponsorsSection";

export const meta: MetaFunction = () => {
  return [
    { title: "KonKon.AI Film Festival" },
    {
      name: "KonKon.AI",
      content:
        "A global celebration of AI-powered storytelling, showcasing innovative films, music videos, and trailers created with cutting-edge technology. Where creativity meets the future of cinema.",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const landingPageData = await getLandingPageData();
  const strapiUrl = process.env.STRAPI_URL || "http://127.0.0.1:1337";
  return { ...landingPageData, strapiUrl };
};

export default function Index() {
  const { blocks, strapiUrl } = useLoaderData();

  const heroBlock = blocks.find(
    (block: any) => block.__component === "blocks.hero"
  );
  const sponsorsBlock = blocks.filter(
    (block: any) => block.__component === "blocks.sponsors"
  );

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
      {sponsorsBlock.map((block: any) => (
        <SponsorsSection
          key={block.id}
          tier={block.tier}
          sponsors={block.sponsor}
          strapiUrl={strapiUrl}
        />
      ))}
    </div>
  );
}
