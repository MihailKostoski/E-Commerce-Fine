export const items = [];

export const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results);
};

export const handleOnHover = (result) => {
  // the item hovered
  console.log(result);
};

export const handleOnSelect = (item) => {
  // the item selected
  console.log(item);
};

export const handleOnFocus = () => {
  console.log("Focused");
};

export const formatResult = (item) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <span className="text-sm">brand: {item.brand}</span>
      <span className="text-sm whitespace-wrap">name:{item.name}</span>
    </div>
  );
};
