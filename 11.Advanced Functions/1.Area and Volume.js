function area () {
    return Math.abs(this.x * this.y);
}


function vol () {
    return Math.abs(this.x * this.y * this.z);
}

function solve (area, vol, input) {
    const data = JSON.parse(input);

    const result = [];

    for (let cube of data) {
        const current = {
            area: area.call(cube),
            volume: vol.call(cube)
        };
        result.push(current)
    }

    return result;

}