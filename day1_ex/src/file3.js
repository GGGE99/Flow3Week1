import React from 'react';
import {persons} from "./file2";

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson(props) {
return <h1>Hello, {props.person.firstName}, {props.person.lastName}, {props.person.email} </h1>;
}

export function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            <WelcomePerson person={persons[0]}  />
            <WelcomePerson person={persons[1]}  />
            <WelcomePerson person={persons[2]}  />
            {persons.map((p)=><WelcomePerson person={p}/>)}
        </div>
    );
}
