function btns(nomi, narxi) {
    let count = +prompt(`Siz ${nomi} dan nechta zakaz qilmoqchisiz`)
    alert(`Sizning ${count} da ${""} ingiz narxi ${narxi * count}`)
}

let buyurtma = confirm("Siz buyurtma bermoqchimisiz?")
if (buyurtma) {
    alert("Buyurtmangiz qabul qilindi!!!")

}
else {
    alert("Buyurtmangiz qabul qilinmadi!!!")
}







