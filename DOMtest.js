function solve(info) {
    let restaurants = info.split('"');
    let data = [];
    for (let i = 1; i < restaurants.length; i += 2) {
    data.push(restaurants[i]);
    }

    let restObj = {};
    for (let rest of data) {
    let entity = rest.split(" - ");
    restObj.restaurant = entity.shift();
    restObj.employees = {};
    console.log(entity);
    let emps = entity[0].split(", ");
    for (let en = 0; en < emps.length; en ++) {
        let person = emps[en].split(" ");
        restObj.employees['name'] = person[0];
        restObj.employees['salary'] = Number(person[1]);
    }

    }
    console.log(restObj);
}
solve("[\"Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650\"]");
