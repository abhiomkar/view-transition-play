"use client";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sm">
      <div className="z-10 w-full max-w-xl items-center justify-between">
        <a
          href="/"
          className="text-primary underline-offset-4 text-sm underline font-semibold"
        >
          Go back
        </a>

        <section className="pt-4">
          <img src={`/images/${params.slug}.jpg`} />
          <div className="my-4">
            Photo by{" "}
            <a
              className="text-primary underline-offset-4 text-sm underline"
              href="https://unsplash.com/@clevelandart?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              The Cleveland Museum of Art
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
