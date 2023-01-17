function ejercicio1(x) {
    var i = 1
    var y = 1
    let arreglo = [1]
    for (i = 1; i <= x; i++) {
        y = (y * 2);
        arreglo.push(y);
        if (i == x) {
            arreglo.pop();
            return arreglo
        }
    }
}