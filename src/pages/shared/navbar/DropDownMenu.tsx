import SubNavLink from "./SubNavLink";

type DropDownMenuType = {
  name: string;
  path: string;
}[];

interface DropDownMenuProps {
  menu: DropDownMenuType;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ menu }) => {
  return (
    <div className="absolute top-6 h-0 overflow-hidden group-hover:h-auto group-hover:overflow-auto w-[200px] bg-transparent">
      <div className="p-4 transition-all duration-500 bg-white shadow-sm border border-gray-300 rounded-md mt-7">
        <ul className="text-[#4c5671] flex flex-col gap-4 text-base font-medium">
          {menu.map((item, idx) => (
            <li key={idx}>
              <SubNavLink path={item.path} name={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
