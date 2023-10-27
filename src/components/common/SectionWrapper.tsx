export const SectionWrapper = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id}>
      <div className="max-w-4xl m-auto p-10 flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
};
