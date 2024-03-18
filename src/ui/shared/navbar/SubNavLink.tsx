import Link from "next/link";
import { usePathname } from "next/navigation";

const SubNavLink = ({ path, name }: { path: string; name: string }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${pathName === path ? "active-subNav-link" : "subNav-link"} `}
      href={path}
    >
      {name}
    </Link>
  );
};

export default SubNavLink;
