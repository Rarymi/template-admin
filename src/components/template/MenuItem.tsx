import Link from 'next/link';

interface IMenuITem {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  handleLogout?: (e: any) => void;
}

export const MenuItem = ({
  url,
  text,
  icon,
  handleLogout,
  className,
}: IMenuITem) => {
  return (
    <li
      className={`
    hover:bg-gray-100
    dark:hover:bg-gray-800
      ${className}`}
    >
      {url ? (
        <Link
          href={url}
          className={`flex flex-col justify-center items-center h-16 w-24`}
        >
          {icon}
          <span className={`text-xs  text-gray-600 dark:text-gray-200`}>
            {text}
          </span>
        </Link>
      ) : (
        <div
          className={`flex flex-col justify-center items-center cursor-pointer h-16 w-24`}
          onClick={handleLogout}
        >
          {icon}
          <span className={`text-xs`}>{text}</span>
        </div>
      )}
    </li>
  );
};
