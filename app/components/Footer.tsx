export default function Footer({ data, strapiUrl }) {
  return (
    <footer className="bg-black text-white py-6 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a href={data.logo.href} className="flex items-center mb-4 md:mb-0">
          <img
            src={`${strapiUrl}${data.logo.image.url}`}
            alt={data.logo.image.alternativeText || data.logo.label}
            className="h-8 w-auto"
          />
        </a>
        {/* Navigation Items */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex items-center space-x-6">
            {data.navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Social Links */}
        <div className="flex items-center space-x-4">
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
      </div>
    </footer>
  );
}
