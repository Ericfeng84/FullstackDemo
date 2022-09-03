import Item from "./item";

const List = ({ listData, deleteCustomer,editCustomer }) => {
    console.log(listData);
  return (
    <div className="list">
      {listData.map((customer) => {
          return(
              <Item customer={customer} deleteCustomer={deleteCustomer} editCustomer={editCustomer} />
          )
      })}
    </div>
  );
};
export default List;
