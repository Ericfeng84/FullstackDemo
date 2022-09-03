const Item = ({ firstName, lastName, email, id,deleteData }) => {
    console.log(firstName);
    function deleteItem() {
        deleteData(function (prev) {
    return prev.filter(item=>item.id!==id)
})
    }

  return (
    <div className="item">
      <div>
        <p>{email}</p>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>删除</button>
    </div>
  );
};

export default Item;
