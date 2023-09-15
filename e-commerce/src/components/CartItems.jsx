const CartItems = ({ itemCount = 0 }) => {
    return (
      <div
        className="position-absolute bg-success rounded-circle px-2"
        style={{ top: 0, right: 0 }}
      >
        <span style={{ fontSize: "12px", color: "black" }}>{itemCount}</span>
      </div>
    );
  };
  
  export default CartItems;