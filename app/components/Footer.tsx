import { buildImageUrl } from '~/utils/urlHelpers';

export default function Footer({ data, strapiUrl }) {
  return (
    <footer className="bg-black text-white py-8 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <a href={data.logo.href} className="flex items-center mb-4 md:mb-0">
            <img
              src={buildImageUrl(strapiUrl, data.logo.image.url)}
              alt={data.logo.image.alternativeText || data.logo.label}
              className="h-16 w-auto"
            />
          </a>
          {/* Navigation Items */}
          <nav className="mb-4 md:mb-0">
            <ul className="font-primary text-sm flex flex-col">
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
        {/* Social Links */}
        <div className="flex items-center space-x-4 self-start pt-2">
          {data.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.isExternal ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <img
                src={buildImageUrl(strapiUrl, link.image.url)}
                alt={link.image.alternativeText || link.label}
                className="h-5 w-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
