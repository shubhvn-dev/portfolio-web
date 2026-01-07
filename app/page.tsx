export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8">
        My portfolio is under construction. Stay tuned!
      </p>
      <a
        href="mailto:dev.shubhankadam@gmail.com"
        className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
      >
        Contact Me
      </a>
    </main>
  );
}
