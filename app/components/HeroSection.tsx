interface HeroSectionProps {
  titleOne: string;
  titleTwo: string;
  description: string;
  submit: {
    href: string;
    label: string;
  };
}

export default function HeroSection({ titleOne, titleTwo, description, submit }: HeroSectionProps) {
  return (
    <section className="text-center px-6 py-12">
      <h1 className="font-secondary text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100">
        <span className="text-pinkKonkon">{titleOne}</span>
        <span className="text-aquaKonkon">{titleTwo}</span>
      </h1>
      <p className="font-primary mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {description}
      </p>
      <form
        method="post"
        action={submit.href}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="font-primary w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
        />
        <button
          type="submit"
          className="px-6 py-2 border-[1px] border-pinkKonkon bg-aquaKonkon font-primary text-black hover:bg-gray-900 hover:text-white border-solid rounded-lg"
        >
          {submit.label}
        </button>
      </form>
    </section>
  );
}