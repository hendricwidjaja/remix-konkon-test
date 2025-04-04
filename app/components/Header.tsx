import { buildImageUrl } from "~/utils/urlHelpers";

export default function Header({ data, strapiUrl }) {
  const handleJoinWaitlistClick = () => {
    // Scroll to the email section
    const emailSection = document.getElementById("email-section");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }

    // Trigger the glow effect
    const emailInput = document.querySelector("input[name='email']");
    if (emailInput) {
      emailInput.classList.add("glow-effect");
      setTimeout(() => {
        emailInput.classList.remove("glow-effect");
      }, 5000); // Remove the glow effect after 5 seconds
    }
  };

  const handleScrollToSponsors = () => {
    const sponsorsSection = document.getElementById("sponsors-section");
    if (sponsorsSection) {
      sponsorsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 py-4 px-6 flex items-center justify-between">
      {/* Left Section: Logo + Nav */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <a href={data.logo.href} className="flex items-center">
          <img
            src={buildImageUrl(strapiUrl, data.logo.image.url)}
            alt={data.logo.image.alternativeText || data.logo.label}
            className="h-12 w-auto"
          />
        </a>
        {/* Navigation Items */}
        <nav>
          <ul className="flex font-ocr items-center space-x-4">
            {data.navItems.map((item) => (
              <li key={item.id}>
                {item.label === "Sponsors" ? (
                  <button
                    onClick={handleScrollToSponsors}
                    className="hover:text-pinkKonkon"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a href={item.href} className="hover:text-pinkKonkon">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Right Section: Social Links + CTA */}
      <div className="flex items-center space-x-4">
        {/* Social Links */}
        <div className="flex items-center space-x-3">
          {data.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.isExternal ? "_blank" : "_self"}
              rel="noreferrer"
              className="group"
            >
              <div
                className="h-6 w-6 bg-white group-hover:bg-pinkKonkon"
                style={{
                  maskImage: `url(${buildImageUrl(strapiUrl, link.image.url)})`,
                  WebkitMaskImage: `url(${buildImageUrl(
                    strapiUrl,
                    link.image.url
                  )})`,
                  maskSize: "cover",
                  WebkitMaskSize: "cover",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              ></div>
            </a>
          ))}
        </div>
        {/* CTA Button */}
        <button
          onClick={handleJoinWaitlistClick}
          className="px-4 py-1 border-[1px] border-pinkKonkon bg-black font-ocr text-white hover:bg-gray-900 border-solid rounded-lg"
        >
          {data.cta.label}
        </button>
      </div>
    </header>
  );
}
