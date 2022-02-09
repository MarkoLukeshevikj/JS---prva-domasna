/* 1. Да се напише функција која на влез ќе прима 3 броеви. 
      На излез треба да се испише знакот на бројот кој е продукт на множење на тие три броеви. */

// resenie 1
function znak(a, b, c) {
    if (a < 0 && b < 0 && c < 0) return '-';
    else if (a < 0 && b > 0 && c > 0) return '-';
    else if (a > 0 && b < 0 && c > 0) return '-';
    else if (a > 0 && b > 0 && c < 0) return '-';
    else return '+';
}
console.log(znak(3, -7, 2 ));
console.log(znak(3, -7, -2 ));

// resenie 2
function znak1(a, b, c) {
    if (a * b * c < 0) return '-';
    else return '+';
}

console.log(znak1(3, -7, 2 ));
console.log(znak1(3, -7, -2 ));


/* 2. Да се напише функција која на влез ќе прима 5 броеви. 
      На излез да се испечати најголемиот од тие броеви. */

function max(a, b, c, d, e) {
    let max = 0;
    if (a > max) max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    if (d > max) max = d;
    if (e > max) max = e;
    return max;
}

console.log(max(6, 1, 2, 8, 1));
console.log(max(-1, -2, -3, -4, 0));


/* 3. Да се напише функција која на влез ќе прима 3 броеви. 
      На излез да се испечатат броевите, сортирани од најголем кон најмал (ascending) */

function ascending(a, b, c) {
    if (a > b && b > c) console.log( a, b, c);
    else if (a < b && b > c && a > c) console.log( b, a, c);
    else if (a < b && b > c && a < c) console.log( b, c, a);
    else if (a > b && c > a) console.log( c, a, b);
    else console.log( c, b, a);
}

ascending(0, -1, 4);

/* 4. Да се напише функција која на влез ќе прима 5 броеви.
   Да се пресмета просечната оддалеченост на тие броеви од 0 */

function prosek(a, b, c, d, e) {
    return (apsolutna(a) + apsolutna(b) + apsolutna(c) + apsolutna(d) + apsolutna(e)) / 5;
}

function apsolutna(broj) {
    if (broj > 0) return broj;
    return -1 * broj;
}


console.log(prosek(-4, -2, 3, 6, 8));
console.log(prosek(-2, -1, 0, 1, 2));