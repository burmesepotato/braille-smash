export const SectionRoadmap = () => {
  return (
    <div className="py-24">
      <section className="space-y-4 max-w-2xl ml-auto mb-16">
        <h1 className="font-bold text-6xl text-right">Roadmap</h1>
        <p className="text-2xl leading-10 text-right">
          Development is ongoing, <br />
          and we have exciting features planned!
        </p>
      </section>

      <div className="flex flex-col items-center justify-between mt-8 lg:flex-row">
        <div className="flex flex-col items-center w-full max-w-lg px-6 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Phase 1
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Quiz Mode: Timer Smash
          </p>
        </div>
      </div>
    </div>
  );
};
