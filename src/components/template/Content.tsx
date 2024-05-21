interface IContent {
  children?: any;
}

export const Content = ({ children }: IContent) => {
  return (
    <div className={`flex flex-col mt-7 dark:text-gray-200 `}>{children}</div>
  );
};
