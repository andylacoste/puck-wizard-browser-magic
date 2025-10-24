const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "1M+", label: "Data Points Daily" },
  { value: "< 0.1s", label: "Load Time" },
  { value: "100%", label: "Free Forever" }
];

export const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
