export const items = [];

export const formatResult = (item) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <img src={item.img} className="w-[140px] h-[120px]" alt="" />
      <span className="text-sm">brand: {item.brand}</span>
      <span className="text-sm whitespace-wrap">name:{item.name}</span>
    </div>
  );
};
