
const Projects = () => {
  return (
    <div className="mx-auto p-4 md:px-20 md:py-10 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center text-info mb-4">Projects</h1>
      <div className="text-center">
        <p className="text-base-content mb-8">
          This section is currently under construction. I’m working hard to showcase my projects.
          Please check back soon for updates!
        </p>
        <div className="flex justify-center">
          <svg
            className="animate-spin h-10 w-10 text-info"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Projects;
