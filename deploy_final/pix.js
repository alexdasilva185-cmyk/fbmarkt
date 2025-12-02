class Pix {
    constructor(key, name, city, transactionId, message) {
        this.key = key;
        this.name = this.normalize(name).substring(0, 25);
        this.city = this.normalize(city).substring(0, 15);
        this.transactionId = this.normalize(transactionId || '***').substring(0, 25);
        this.message = this.normalize(message || '').substring(0, 50);
    }

    normalize(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    formatString(id, value) {
        const size = value.length.toString().padStart(2, '0');
        return `${id}${size}${value}`;
    }

    getPayload(amount) {
        const amt = amount.toFixed(2);

        const payload = [
            this.formatString('00', '01'), // Payload Format Indicator
            this.formatString('26', [
                this.formatString('00', 'BR.GOV.BCB.PIX'),
                this.formatString('01', this.key),
                this.message ? this.formatString('02', this.message) : ''
            ].join('')),
            this.formatString('52', '0000'), // Merchant Category Code
            this.formatString('53', '986'), // Transaction Currency
            this.formatString('54', amt), // Transaction Amount
            this.formatString('58', 'BR'), // Country Code
            this.formatString('59', this.name), // Merchant Name
            this.formatString('60', this.city), // Merchant City
            this.formatString('62', [
                this.formatString('05', this.transactionId)
            ].join(''))
        ].join('');

        return `${payload}6304${this.crc16(payload + '6304')}`;
    }

    crc16(payload) {
        let crc = 0xFFFF;
        for (let i = 0; i < payload.length; i++) {
            crc ^= payload.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) {
                if ((crc & 0x8000) !== 0) {
                    crc = (crc << 1) ^ 0x1021;
                } else {
                    crc = crc << 1;
                }
            }
        }
        return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    }
}
