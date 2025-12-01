const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="shimmer-cards"></div>
      ))}
    </div>
  );
};

export default Shimmer;
