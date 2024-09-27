// Text (string)
let namadepan: string = "Muhammad";
let namabelakang: string = "Hadi";
let namalengkap: string = namadepan + " " + namabelakang;
let alamat: string = `Jalan Muhajirin`;
let rambut: string = `hitam`;
let kota: string = "Pekanbaru";
let hobi: string = "bermain bola";
let makananFavorit: string = "nasi goreng";
let email: string = "hadiparker12@gmail.com";  

console.log('nama depan = ' + namadepan);
console.log('nama belakang = ' + namabelakang);
console.log('nama lengkap = ' + namalengkap);
console.log('alamat = ' + alamat);
console.log('rambut = ' + rambut);
console.log('kota = ' + kota);
console.log('hobi = ' + hobi);
console.log('makanan favorit = ' + makananFavorit);
console.log('email = ' + email);  

// Number
let usia: number = 20;
let tinggi: number = 165;
let ukuransepatu: number = 42;
let beratbadan: number = 70;
let tahunLahir: number = 2004;
let jumlahSaudara: number = 2;
let saldoTabungan: number = 1500000;  
let jumlahPelajaran: number = 8;       

console.log('umur = ' + usia);
console.log('tinggi = ' + tinggi);
console.log('ukuran sepatu = ' + ukuransepatu);
console.log('berat badan = ' + beratbadan);
console.log('tahun lahir = ' + tahunLahir);
console.log('jumlah saudara = ' + jumlahSaudara);
console.log('saldo tabungan = ' + saldoTabungan);  
console.log('jumlah pelajaran = ' + jumlahPelajaran); 

// Boolean
const laki: boolean = true;
const perempuan: boolean = false;
const menikah: boolean = false;
const punyaKendaraan: boolean = true;
const aktifDiOrganisasi: boolean = true;  
const sukaOlahraga: boolean = false;       

console.log('laki = ' + laki);
console.log('perempuan = ' + perempuan);
console.log('menikah = ' + menikah);
console.log('punya kendaraan = ' + punyaKendaraan);
console.log('aktif di organisasi = ' + aktifDiOrganisasi);  
console.log('suka olahraga = ' + sukaOlahraga);            

// null
let angka: null = null;

console.log('angka = ' + angka);

// undefined
let pekerjaan: undefined = undefined;

console.log('pekerjaan = ' + pekerjaan);

// symbol
const uniqueSymbolPassword: symbol = Symbol("myUniqueSymbolPassword");

// BigInt
const nim: bigint = 220402164n;

console.log('NIM = ' + nim);

console.log("FUNCTION OPERASI MATEMATIKA : ");

//method Penjumlahan
function penjumlahan(a: number, b: number): number {
    return a + b;
}
console.log('penjumlahan = ' + penjumlahan(10, 5));

//method Pengurangan
function pengurangan(a: number, b: number): number {
    return a - b;
}
console.log('pengurangan = ' + pengurangan(10, 5));

//method Perkalian  
function perkalian(a: number, b: number): number {
    return a * b;
}
console.log('perkalian = ' + perkalian(10, 5));

//method pembagian
function pembagian(a: number, b: number): number {
    return a / b;
}
console.log('pembagian = ' + pembagian(10, 5));
