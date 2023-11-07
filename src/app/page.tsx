import React from "react";
import Link from "next/link";
import AdditionalLinksForm from "@/components/forms/AdditionalLinksForm";
import ProfileForm from "@/components/forms/ProfileForm";
import SocialLinksForm from "@/components/forms/SocialLinksForm";
import MobileMockup from "@/components/MobileMockup";
import PreviewButton from "@/components/buttons/PreviewButton";

import { buttonVariants } from "@/components/ui/button";
import Publish from "@/components/buttons/Publish";
import { Github } from "lucide-react";
import ShortenerButton from "@/components/buttons/ShortenerButton";
import Background from "@/components/background/Background";

export const siteConfig = {
  name: "Bio.New - Free Link in Bio to curate many links in one page.",
  description:
    "Bio.New is a simple tool that helps you create one website for all your links.",
  ogImage: "https://bio.new/og-image.png",
  url: "https://bio.new",
};

export default function Home() {
  return (
    <main className="relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container">
      <section className="lg:col-span-2 flex flex-col items-center justify-center py-6 lg:px-20 gap-6 h-screen">
        <div className="overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0">
          <ProfileForm />
          <SocialLinksForm />
          <AdditionalLinksForm />

          <Background />

          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 justify-center items-center w-full ">
            <Publish />
            <ShortenerButton />
          </div>
        </div>
      </section>

      <section className="hidden lg:flex justify-end items-center">
        <MobileMockup />
      </section>

      <div className="lg:hidden">
        <PreviewButton />
      </div>
    </main>
  );
}
