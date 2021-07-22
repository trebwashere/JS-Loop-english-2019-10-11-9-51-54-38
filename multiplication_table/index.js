var j = 1;
for(var i = 1; i <= j; i++) {
    console.log(j + '*' + i + '=' + (j*i));
    if (j != 9) {
        if (i === j) {
            j++;
            i=0;
        }
    }
}