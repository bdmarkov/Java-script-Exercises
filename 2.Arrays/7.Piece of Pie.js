function pieceOfPie (arr, firstparam, secondparam) {

    const firstindex = arr.indexOf(firstparam);
    const lastindex = arr.indexOf(secondparam);

    return arr.slice(firstindex, lastindex +1)
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)