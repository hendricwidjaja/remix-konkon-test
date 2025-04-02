interface SignupBannerProps {
  signupLink: {
    href: string;
    label: string;
  };
  logoLink: {
    href: string;
    imageUrl: string;
    altText: string | null;
  };
}

export default function SignupBanner({ signupLink, logoLink }: SignupBannerProps) {
  return (
    <section className="py-12 bg-black text-white text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a href={signupLink.href} className="text-4xl font-secondary font-bold">
          {signupLink.label}
        </a>
        <a href={logoLink.href}>
          <img
            src={logoLink.imageUrl}
            alt={logoLink.altText || "KonKon.AI Logo"}
            className="h-16 w-auto"
          />
        </a>
      </div>
    </section>
  );
}