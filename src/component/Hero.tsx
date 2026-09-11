import HeroImg from "../assets/banner-stack.png";

export const Hero = () => {
  return (
    <section>
      {/* // Hero */}
      <div className="keep-content-center flex flex-col items-center gap-12 py-16 lg:flex-row lg:justify-between lg:gap-10 lg:py-24">
        {/* Left side of hero */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal{" "}
            <span className="whitespace-nowrap bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base text-slate-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="rounded-lg bg-linear-to-r from-orange-500 to-pink-600 px-6 py-3 font-medium text-white shadow-sm transition-transform hover:scale-[1.02]">
              Explore Technologies
            </button>
            <button className="rounded-lg border border-slate-200 px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side of hero */}
        <div className="w-full max-w-lg lg:max-w-2xl">
          <img
            src={HeroImg}
            alt="Illustration of a development stack"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};