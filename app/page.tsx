export default function LaunchPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-16 text-center">

      <div className="flex flex-col items-center space-y-4 mb-8">

        <h1 className="text-2xl font-black text-gray-900 uppercase">
          Believe Consortia
        </h1>
      </div>
      <div className="max-w-xl mb-8">
        <p className="text-gray-700 text-xl font-bold leading-relaxed">
          Please bear with us! We&apos;re currently under maintenance.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          It&apos;s going to take some time to fix the error. We&apos;ll be back online after While.
        </p>
      </div>
      <div className="max-w-lg w-100 mb-12">
        <img
          src="/maintenance.svg"
          alt="Maintenance Illustration"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      
    </section>
  );
}
