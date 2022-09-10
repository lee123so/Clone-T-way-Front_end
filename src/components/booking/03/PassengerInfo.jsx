import React from "react";

const PassengerInfo = () => {

  // const onChangeHandler = (e, target) {
  //   const newDate = {
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   };
  //   onChange(newDate)
  // }

  return (
    <>
    <input type="text" name="name" 
    // value={data.name} placeholder="name" onChange={onChangeHandler} 
    />
      <input type="email" name="email" 
      // value={data.email} placeholder="email" onChange={onChangeHandler} 
      />
      <input type="text" name="phone" 
      // value={data.phone} placeholder="phone" onChange={onChangeHandler} 
      />
      <input type="text" name="gender" 
      // value={data.gender} placeholder="gender" onChange={onChangeHandler} 
      />
      <input type="text" name="nation" 
      // value={data.nation} placeholder="nation" onChange={onChangeHandler} 
      />
    </>
  );

}

export default PassengerInfo;