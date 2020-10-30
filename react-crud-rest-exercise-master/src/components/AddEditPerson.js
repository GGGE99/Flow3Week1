import React, { useState } from "react";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
  const handleChange = (evt) => {
    const target = evt.target
    const id = target.id
    const value = target.value

    setPerson({...person, [id]: value})
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.addEditPerson(person)
  }

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" value={props.newPerson.id} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="name"
              placeholder="Enter Name"
              defaultValue={props.newPerson.name}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              defaultValue={props.newPerson.age}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              defaultValue={props.newPerson.email}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
              defaultValue={props.newPerson.gender}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p>
    </div>
  );
}
