export const Logo = () => {
  return (
    <div
      className={` flex flex-col items-center justify-center bg-white rounded-full h-14 w-14`}
    >
      <div className={`bg-red-500 rounded-full h-3 w-3`} />
      <div className={`flex`}>
        <div className={`bg-yellow-500 rounded-full h-3 w-3`} />
        <div className={`bg-green-600 rounded-full h-3 w-3`} />
      </div>
    </div>
  );
};
