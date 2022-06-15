function solve(arr) {
    let result = {};
    for (pair of arr) {
        let currPair = pair.split(' <-> ');
        if (!result.hasOwnProperty(currPair[0])) {
            result[currPair[0]] = Number(currPair[1]);
        } else {
            let temp = result[currPair[0]];
            result[currPair[0]] = Number(currPair[1]) + temp;
        }
    }
    for (let line in result) {
        console.log(`${line} : ${result[line]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);