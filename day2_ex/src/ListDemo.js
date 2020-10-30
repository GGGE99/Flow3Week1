import React, { useState } from "react";

function MemberTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.members.map((m, index) => 
                    <tr key={index}>
                        <td>{m.name}</td>
                        <td>{m.age}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <MemberTable members={props.members} />
        </div>
    );
}

export default function Members() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 }];
    const [members] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}
