export const EachOf = ({ items, render, WrapperComponent = "div" }) => {
  return (
    <>
      {items.map((item) => (
        <WrapperComponent key={item.id}>{render(item)}</WrapperComponent>
      ))}
    </>
  );
};
