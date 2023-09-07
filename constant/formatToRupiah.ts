const formatToRupiah=(number: number): string =>{
    // Menggunakan metode toLocaleString dengan opsi 'id-ID' untuk memformat ke Rupiah
    return parseInt(number.toString()).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}
export default formatToRupiah