export const EachOf = ({ items, render, WrapperComponent = "div" }) => {
  return (
    <>
      {Array.isArray(items) &&
        items.length > 0 &&
        items?.map((item) => (
          <WrapperComponent key={`${item._id}`}>
            {render(item)}
          </WrapperComponent>
        ))}
    </>
  );
};
