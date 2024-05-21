interface ITitle {
  title: string;
  subtitle: string;
}

export const Title = ({ title, subtitle }: ITitle) => {
  return (
    <div>
      <h1 className={`font-bold text-3xl text-gray-900 dark:text-gray-100`}>
        {title}
      </h1>
      <h2 className={`font-light  dark:text-gray-400`}>{subtitle}</h2>
    </div>
  );
};
