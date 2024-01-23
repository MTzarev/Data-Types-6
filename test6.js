function rounding(number, percision) {
    if (percision > 15) {
        percision = 15;
    }
    let num = number.toFixed(percision)

    console.log(`${parseFloat(num)}`);
}
rounding(10.5, 3);
rounding(3.14159266535897923384626433832795, 2)

