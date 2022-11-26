function aggreagateElements(array) {
    let a = 0;
    let b = 0;
    let c = '';
    for (let i = 0; i < array.length; i++) {
        a += array[i];
        b += 1 / array[i];
        c += array[i];
    }
         
    console.log(a);
    console.log(b);
    console.log(c);

}