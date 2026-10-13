export default function cekStatusClass(kelas) {
    let status = '';
    if (kelas === '10A') {
        status = 'Kelas 10A adalah kelas RPL';
    } else if (kelas === 'B') {
        status = 'Kelas 10B adalah kelas BD';
    } else {
        status = 'Kelas tidak ditemukan';
    }
    return console.log(status);
}

export function helloWorld() {
    console.log('Hello, World!');
}