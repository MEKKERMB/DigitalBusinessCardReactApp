export default function Main() {
  return (
    <main className="bg-secondary px-8 pb-12 pt-6 dark:bg-darkSecondary">
      <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
        Mads Lundsby
      </h1>
      <p className="text-center text-sm font-light text-amber-600">
        Web udvikler
      </p>
      <button className="mx-auto block">
        <a
          className="border-b border-gray-400 text-center text-xs font-light text-gray-900 dark:text-gray-100"
          href="https://madslundsby.dev"
          target="_blank"
        >
          madslundsby.dev
        </a>
      </button>
      <div className="mt-4 flex justify-between gap-4">
        <a
          className="flex flex-1 items-center gap-2 rounded-md border border-gray-400 bg-gray-100 px-7 py-1.5 text-sm text-gray-900  shadow"
          href="mailto:contact@madslundsby.dev"
        >
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Email
        </a>
        <a
          className="flex flex-1 items-center gap-2 rounded-md bg-green-600 px-7 py-1.5 text-sm text-gray-100 shadow"
          href="https://github.com/MEKKERMB"
          target="_blank"
        >
          <i class="fa fa-github fa-lg" aria-hidden="true"></i>
          Github
        </a>
      </div>
      <h2 className="mt-8 font-bold text-gray-900 dark:text-gray-100">
        Hvem jeg er
      </h2>
      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h2 className="mt-8 font-bold text-gray-900 dark:text-gray-100">
        Interreser
      </h2>
      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </main>
  );
}
