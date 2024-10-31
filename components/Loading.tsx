const Loading = ({ text = "Loading", size = "loading-md" }) => {
  return (
    <div className="flex w-full h-full justify-center items-center" aria-live="polite">
      <div className="flex-grow flex justify-center items-center gap-2 text-info">
        <h2>{text}</h2>
        <span className={`loading loading-dots ${size}`}></span>
      </div>
    </div>
  );
};

export default Loading;
