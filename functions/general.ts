function currencyFormat(value: number) {
    const formatted = value.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' });
    return formatted.replace('IDR', 'Rp');
}

export { currencyFormat }
