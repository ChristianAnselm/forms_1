import React from 'react';
import countries from './Countries.json'

function PopulateSelect() {

    return countries.map(country => {
        return <option value = {
            country.name
        } > {
            country.name
        } </option>;
    })
    // }
}

export default PopulateSelect