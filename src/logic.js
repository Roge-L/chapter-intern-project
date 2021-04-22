import bid_id from './components/SearchBar'

let medicare_plans;
let medicare_plans_array;
let medicare_plans_array_detailed;
let result;

export const loadData = () => {
    fetch('http://127.0.0.1:8887/medicare_plans.txt')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        medicare_plans = data;
        result = retrieveRecord(bid_id);
    })
}

function retrieveRecord(b_id) {
    // Extract individual lines from the data and remove
    // header line
    medicare_plans_array = medicare_plans.split("\n");
    medicare_plans_array.shift();

    // Extract tab separated words and remove the headers
    medicare_plans_array_detailed = medicare_plans.split("\t");

    // Remove the header elements
    medicare_plans_array_detailed = medicare_plans_array_detailed.slice(103);

    // Unfortunately, loop through every line until id is matched
    // or index is out of bounds
    let i = 0;
    let curr_id = medicare_plans_array_detailed[i];
    let num_elements = medicare_plans_array_detailed.length;
    // while (i < num_elements || curr_id !== bid_id) {
    //     i += 97;
    //     curr_id = medicare_plans_array_detailed[i];
    // }

    // // Index out of bounds
    // if (i >= num_elements) {
    //     console.log("lol");
    //     return "No matching medicare plan found\n";
    // }

    // // Extract line number and return corresponding medicare plan
    // i = i/97;
    // console.log(medicare_plans_array[i]);
    return medicare_plans_array[i];
}
export { result };