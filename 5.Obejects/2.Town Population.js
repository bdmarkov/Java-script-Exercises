function solve(arr) {

    const result = {};

    for (const town of arr) {
        const townsplit = town.split(' <-> ');
        const name = townsplit[0];
        const pop = Number(townsplit[1]);

       

        if (result[name] == undefined) {
            result[name] = pop;
        } else {
            result[name] += pop;
        }
    }
    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}

console.log(solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
))