import React, { useState } from "react";

function Component4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log({
      name: name,
      email: email,
      password: password,
    });
  };
const changeData = (e) => {
    setName(e.target.value)
}
const changeData2 = (e) => {
    setEmail(e.target.value)
}
const changeData3 = (e) => {
    setPassword(e.target.value)
}
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={changeData} id="name" placeholder="Name" />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={changeData2} placeholder="Email" />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={changeData3} placeholder="Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Component4;