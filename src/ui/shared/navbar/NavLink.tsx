import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import { usePathname } from "next/navigation"; // Importing usePathname hook from Next.js for accessing current pathname

const NavLink = ({ text, path }: { text: string; path: string }) => {
  const pathName = usePathname(); // Getting the current pathname using usePathname hook
  return (
    <Link
      className={`${pathName === path ? "active-link" : "nav-link"}`} // Conditional class based on whether the current pathname matches the specified path
      href={path} // Destination URL
    >
      {text} {/* Text to display for the navigation link */}
    </Link>
  );
};

export default NavLink; // Exporting the NavLink component
