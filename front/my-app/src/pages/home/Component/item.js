const Item = ({ customer,deleteCustomer,editCustomer }) => {
    function deleteItem() {
        deleteCustomer(customer)
    }

    function updateItem(){
        editCustomer(customer)
    }

  return (
    <div className="item">
      <div>
        <p>{customer.email}</p>
        <p>{`${customer.firstName} ${customer.lastName}`}</p>
      </div>
        <div>
            <button className="remove" onClick={updateItem}>修改</button>
            <button className="remove" onClick={deleteItem}>删除</button>
        </div>

    </div>
  );
};

export default Item;
