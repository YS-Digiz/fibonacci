function fibo() {
    let n = parseInt(document.getElementById("n").value);
    let a = [0, 1];

    for (let i = 2; i < n; i++) {
        a[i] = a[i-1] + a[i-2];
    }

    if (n === 1) a = [0];

    document.getElementById("out").innerText = a;
}