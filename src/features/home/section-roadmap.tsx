export const SectionRoadmap = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto py-24">
      <section className="space-y-4 2xl:space-y-6 mb-16">
        <h1 className="text-title text-right">Roadmap</h1>
        <p className="text-desc text-right max-w-2xl 2xl:max-w-3xl ml-auto">
          Development is ongoing, and here’s a glimpse of what’s coming up next
          for Braille Smash!
        </p>
      </section>

      <div className="flex flex-col items-center justify-between mt-8 gap-8">
        <div className="w-full max-w-lg px-6 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Phase 1
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Learn by Quiz: Timer Smash
          </p>
        </div>

        <div className="w-full max-w-lg px-6 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Phase 2
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Practice Braille
          </p>
        </div>

        <div className="w-full max-w-lg px-6 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Phase 3
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Learn by Quiz: Life Smash
          </p>
        </div>

        <div className="w-full max-w-lg px-6 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Phase 5
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Multilingual Braille Support
          </p>
        </div>
      </div>
    </div>
  );
};
