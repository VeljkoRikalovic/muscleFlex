import Link from "next/link";

function Page() {
  return (
    <>
      <div className="flex items-end md:min-h-[80vh] justify-start text-center text-primary">
        <div className="p-8">
          <h1 className="sm:text-4xl md:text-6xl font-bold mb-4">
            Welcome to
            <br />
            <p className="text-4xl sm:text-7xl text-accent mt-10">
              muscle<span className="text-secondary">Flex</span>
            </p>
          </h1>
          <p className="p-8">Start your fitness journey today!</p>
        </div>
      </div>
      <div className="max-w-full md:h-[500px] mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col min-h-full">
          <div className="px-4 py-3 border-b dark:border-zinc-700">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                Workout Assistant
              </h2>
              <div className="bg-secondary text-white text-xs px-2 py-1 rounded-full">
                Online
              </div>
            </div>
          </div>
          <div
            className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
            id="chatDisplay"
          >
            <div className="self-end bg-accent text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
              Hello! Do you want to start your fitness journey?
            </div>
            <div className="self-start bg-zinc-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
              Yes!
            </div>
            <div className="self-end bg-accent text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
              Click &quot;start&quot; and let&apos;s get to work!
            </div>
          </div>
          <div className="px-3 py-2 border-t dark:border-zinc-700">
            <div className="flex gap-2">
              <input
                placeholder="I am ready!"
                disabled
                className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
                id="chatInput"
                type="text"
              />
              <Link
                href="/getWorkout"
                className="bg-accent hover:bg-secondary text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
              >
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
