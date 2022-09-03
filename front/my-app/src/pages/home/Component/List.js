import Item from "./item";

const List = ({ listData, deleteData,editCustomer }) => {
    console.log(listData);
  return (
    <div className="list">
      {listData.map((i) => {
          const { id,firstName, lastName,email} = i;
          // console.log(id);
          return(
              <Item key={id} firstName={firstName} lastName={lastName} email={email} id={id} deleteData={deleteData} editCustomer={editCustomer} />
          )
      })}
    </div>
  );
};
export default List;
