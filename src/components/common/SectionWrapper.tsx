export const SectionWrapper = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id}>
      <div className="max-w-4xl m-auto px-10 py-14 flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
};
