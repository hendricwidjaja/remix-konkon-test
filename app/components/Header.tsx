export default function Header({ data, strapiUrl }) {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
      {/* Left Section: Logo + Nav */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <a href={data.logo.href} className="flex items-center">
          <img
            src={`${strapiUrl}${data.logo.image.url}`}
            alt={data.logo.image.alternativeText || data.logo.label}
            className="h-12 w-auto"
          />
        </a>
        {/* Navigation Items */}
        <nav>
          <ul className="flex font-primary items-center space-x-4">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
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
            >
              <img
                src={`${strapiUrl}${link.image.url}`}
                alt={link.image.alternativeText || link.label}
                className="h-6 w-6"
              />
            </a>
          ))}
        </div>
        {/* CTA Button */}
        <a
          href={data.cta.href}
          className="px-4 py-1 border-[1px] border-[#EA41F7] bg-black font-primary text-white hover:bg-gray-900 border-solid rounded-lg"
        >
          {data.cta.label}
        </a>
      </div>
    </header>
  );
}
