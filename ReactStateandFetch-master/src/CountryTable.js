import React from "react";
import countryFacade from "./countryFacade";
import { useState } from "react";

const CountryTable = (props) => {
  const { countries, labels, clickHandler } = props;



  return (
    <div>
      <p>
        Replace the thead section with a row generated from the Labels endpoint
      </p>
      <p>
        Replace the tbody section with rows generated from the countries
        endpoint
      </p>
      <table className="table">
        <thead>
          <tr>
            {labels.map((element) => {
              return <th key={element} onClick={clickHandler}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => {
            return (
              <tr key={index} >
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>{country.area}</td>
                <td>
                  {country.timezones.length > 1
                    ? country.timezones[0] +
                      " (+" +
                      (country.timezones.length - 1) +
                      ")"
                    : country.timezones}
                </td>
                <td>
                  {country.borders.length > 1
                    ? country.borders[0] +
                      " (+" +
                      (country.borders.length - 1) +
                      ")"
                    : country.borders}
                </td>
                <td>
                  {country.topLevelDomain.length > 1
                    ? country.topLevelDomain[0] +
                      " (+" +
                      (country.topLevelDomain.length - 1) +
                      ")"
                    : country.topLevelDomain}
                </td>
                <td>
                  {country.currencies.length > 1
                    ? country.currencies[0] +
                      " (+" +
                      (country.currencies.length - 1) +
                      ")"
                    : country.currencies}
                </td>
                <td>
                  {country.languages.length > 1
                    ? country.languages[0] +
                      " (+" +
                      (country.languages.length - 1) +
                      ")"
                    : country.languages}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;
