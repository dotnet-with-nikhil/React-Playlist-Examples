import { Fragment } from "react";

function EmployeeCard() {
    var items = [{id : 1, name:'Nikhil', price : 1000}, {id : 2, name:'Parate', price : 2000}, {id : 3, name:'React', price : 3000}];
  return (
    <>
      <h2>Nikhil Parate</h2>
      <p>Senior React Developer</p>
      <button>View Profile</button>
      {
        items.map((item) => {
            return (
                <Fragment key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </Fragment>
            )
        })
      }     
    </>
  );
}

export default EmployeeCard;