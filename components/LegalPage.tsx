type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

export interface LegalSection {
  heading: string;
  blocks: Block[];
}

export function LegalPage({
  heading,
  sections,
}: {
  heading: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-white py-16 dark:bg-primary-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-10 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
          {heading}
        </h1>

        {sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-primary-900 dark:text-white">
              {section.heading}
            </h2>
            {section.blocks.map((block, index) =>
              block.type === "p" ? (
                <p
                  key={index}
                  className="mb-4 leading-relaxed text-primary-600 dark:text-primary-200"
                >
                  {block.text}
                </p>
              ) : (
                <ul
                  key={index}
                  className="mb-4 list-disc space-y-2 pl-6 text-primary-600 dark:text-primary-200"
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
