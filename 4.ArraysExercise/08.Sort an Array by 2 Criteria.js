function solve(arr) {
    arr.sort(twoCreteriaSort);
    return arr.join("\n")


    function twoCreteriaSort(current, next) {


        if (current.length === next.length) {
            return current.localeCompare(next)
        }
        return current.length - next.length;
    }
}