
// filter n properties for truthy or falsy values on type T (no effect if no filter selected)
export function genericFilter(object, filters) {
    // no filters; no effect - return true
    console.log({object, filters})
    // if (filters.length === 0) {
    //     return true;
    // }

    return filters.every((filter) => {
        // return filter.isTruthyPicked ? object[filter.property] : !object[filter.property];
        return filter.isTruthyPicked ? object[filter.property] : true;
    });
}

// case insensitive search of n-number properties of type T
// returns true if at least one of the property values includes the query value
export function genericSearch(
    object,
    properties,
    query
){

    // if (query === "") {
    //     return true;
    // }

    return properties.some((property) => {
        const value = object[property];
        console.log({value})
        if (typeof value === "string" || typeof value === "number") {
            return value.toString().toLowerCase().includes(query.toLowerCase());
        }
        return false;
    });
}