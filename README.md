Javascript DOM:
- Dom selector
- Dom manipulation class
- Dom manipulation attribute

p1Button.setAttribute('disabled', '');
p1Button.removeAttribute('disabled');

setAttribute		
element.setAttribute(attributeName, attributeValue);

removeAttribute
element.removeAttribute(attributeName);

// Hapus properti CSS
element.style.removeProperty("namaPropertiCSS"); // Ganti "namaPropertiCSS" dengan nama properti yang ingin Anda hapus

--- Pseudo Class ---
:hover: Pseudo-class :hover digunakan untuk menentukan tampilan elemen saat kursor mouse berada di atasnya. Ini sering digunakan untuk menambahkan efek visual seperti perubahan warna atau animasi saat pengguna mengarahkan kursor mouse ke elemen.

:active: Pseudo-class :active digunakan untuk menentukan tampilan elemen saat elemen tersebut sedang aktif, yaitu ketika elemen tersebut sedang dalam proses klik oleh pengguna. Pseudo class ini sering digunakan untuk memberikan umpan balik visual kepada pengguna saat mereka menekan tombol atau mengeklik elemen.


Beberapa contoh pseudo-class yang umum digunakan meliputi:

:hover: Digunakan untuk menentukan tampilan elemen saat kursor mouse berada di atasnya.
:active: Digunakan untuk menentukan tampilan elemen saat elemen tersebut sedang aktif, misalnya, ketika pengguna sedang menekan tombol mouse pada elemen.
:focus: Digunakan untuk menentukan tampilan elemen saat elemen tersebut sedang dalam fokus, misalnya, ketika elemen tersebut dipilih oleh pengguna menggunakan keyboard atau mouse.
:first-child, :last-child: Digunakan untuk menargetkan elemen pertama atau terakhir dari suatu elemen induk.
:nth-child(): Digunakan untuk menargetkan elemen yang menjadi anak ke-n dari elemen induk, berdasarkan pola yang ditentukan.
:not(): Digunakan untuk menargetkan elemen yang tidak memenuhi selektor tertentu.
:checked: Digunakan untuk menargetkan elemen yang memiliki properti "checked", seperti checkbox atau radio button.


Tambahkan fitur:
jika winPoint sama dengan 0 background-colornya menjadi btn-primary enabled tidak bisa dihover tapi jika winPointnya sudah lebih besar dari 0 maka background-colornya transparan dan bisa di hover.

// Menonaktifkan efek hover saat tombol dinonaktifkan
document.getElementById("myButton").addEventListener("mouseenter", function() {
    if (this.disabled) {
        this.style.backgroundColor = ""; // Hapus warna latar belakang saat dihover
    }
});

document.getElementById("myButton").addEventListener("mouseleave", function() {
    if (this.disabled) {
        this.style.backgroundColor = ""; // Hapus warna latar belakang saat meninggalkan hover
    }
});

// Contoh menonaktifkan tombol
document.getElementById("myButton").disabled = true;
