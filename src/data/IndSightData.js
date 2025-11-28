const IndSightData = () => {
  const blogs = [
    {
      title: "Lorem Ipsum blog Title",
      text: "Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title",
      img,
    },
    {
      title: "Lorem Ipsum blog Title",
      text: "Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title",
      img,
    },
    {
      title: "Lorem Ipsum blog Title",
      text: "Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title",
      img,
    },
  ];

  return (
    <section className="w-full px-6 py-14 bg-[#fff8f3]">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default IndSightData;