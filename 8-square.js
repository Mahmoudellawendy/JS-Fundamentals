const size = parseInt(process.argv[2]);
if (isNaN(size)) {
    console.log(`Missing size`);
} else if (size > 0) {
    const row = `x`.repeat(size);
    for (let i = 0; i < size; i++) {
        console.log(row);
    }
}