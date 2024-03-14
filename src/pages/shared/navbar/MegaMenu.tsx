import Image from "next/image";
import Link from "next/link";

type MegaType = {
  name: string;
  path: string;
  tag: string;
  icon: string;
}[];

interface MegaProps {
  mega: MegaType;
}

const MegaMenu: React.FC<MegaProps> = ({ mega }) => {
  return (
    <div className="absolute top-6 duration-500 h-0 overflow-hidden  group-hover:h-auto group-hover:overflow-auto left-0 w-[770px] bg-transparent transition-all ease-in-out">
      <div className="p-4 text-black grid grid-cols-2 h-0 group-hover:h-auto duration-1000 bg-white rounded-md mt-7 shadow border">
        {mega.map((item, idx) => (
          <Link href={item.path} key={idx}>
            <div className="flex items-center gap-3 p-4 duration-500 transition-all hover:shadow-sm rounded-md border border-transparent hover:border-gray-300">
              <div className="w-[12%]">
                <Image
                  className="h-full w-full"
                  src={item.icon}
                  alt={item.name}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-base text-black">
                  {item.name}
                </h3>
                <p className="font-normal text-sm text-gray-500">{item.tag}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
