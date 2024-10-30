const Loading = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex-grow flex justify-center items-center gap-2 text-info">
        <h2>Loading</h2><span className="loading loading-dots loading-md"></span>
      </div>
    </div>
  )
}

export default Loading;