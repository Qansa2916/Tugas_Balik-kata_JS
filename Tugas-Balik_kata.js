function Tugas(value) {
    var balik = " ";
    for (var i = value.length - 1; i >= 0; i--) {
        balik = balik + value[i]

    }
    return balik
}
console.log(Tugas("Niomic!"))
console.log(Tugas("JavaScript"));
console.log(Tugas("AlohaholA"));
console.log(Tugas("Jawa_Barat"));