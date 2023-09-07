const createAlias = (name: string): string => {
    const words = name.split(' '); // Memisahkan nama menjadi kata-kata
    let alias = '';

    // Mengambil huruf pertama dari setiap kata dan menggabungkannya menjadi alias
    for (const word of words) {
        if (word.length > 0) {
            alias += word[0].toUpperCase();
            if (alias.length >= 2) {
                break; // Memastikan alias tidak lebih dari 2 huruf
            }
        }
    }

    return alias;
}

export default createAlias
