const ToolTip = ({ text }: { text: string }) => {
  return (
    <div className="absolute text-xs scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 duration-300 top-8 z-50 right-0 lg:-left-10 w-[200px] p-2 rounded-md bg-primary_color text-white">
      {text}
    </div>
  );
};

export default ToolTip;
