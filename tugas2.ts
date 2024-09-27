//Deskripsi Tugas 2 (Cont’d)

let nama: string = "Arion";
let umur: number = 30;
let statusbertarung: boolean = true;

console.log('Nama : ' + nama);
console.log('Umur : ' + umur);
console.log('Status Pahlawan Siap Bertarung : ' + statusbertarung);

console.log('');

//Deskripsi Tugas 2 (Cont’d)

let emas: number =  5000;
let makanan: number = 120;
let prajurit: number = 200;

console.log('Jumlah Emas : ' + emas);
console.log('Jumlah Makanan : ' + makanan);
console.log('Jumlah Prajurit : ' + prajurit);

console.log('');

//Deskripsi Tugas 2 (Cont’d)

function tambahemas(emas2 : number): number {
    emas += emas2;
    return emas;
} 
tambahemas(1500);
console.log('Jumlah Emas : ' + emas);


let pengalamanbertarung: number = 75;
console.log('Pengalaman Bertarung : ' + pengalamanbertarung);

console.log('');

//Deskripsi Tugas 2 (Cont’d)

let kesehatan : number = 100;
console.log('Kesehatan : ' + kesehatan);
function kurangikesehatan(jumlahprajurit: number, jumlahkesehatan: number): void {
    kesehatan = jumlahkesehatan - 5;
    if (kesehatan <= 0){
        console.log('prajurit tidak dapat bertarung karena kesehatan :' + kesehatan);
    }  
    else {
        console.log('prajurit dapat bertarung karena kesehatan :' + kesehatan);
    }
}
kurangikesehatan(prajurit, kesehatan);

console.log('');

//Deskripsi Tugas 2 (Cont’d)

function rangkuman(): void {
    console.log('rangkuman');
    console.log('Nama : ' + nama);
    console.log('Jumlah Emas : ' + emas + 'Keping');
    console.log('Pengalaman Bertarung : ' + pengalamanbertarung + 'Xp');
}
rangkuman();

