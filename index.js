const fs = require('fs');
const moment = require('moment');
const product = require('./product.js');
const productImage = require('./productImage.js');

const DATA_LENGTH = 1000;

function sampleDataToCsv(data, times) {
    const schema = data.columnSchema;
    const rows = Array(times).fill(0)
                    .map((_, index) => {
                        const _data = data.generate(index);
                        return schema.map(key => _data[key]).join(',');
                    })
                    .join('\n');
    return [schema.join(','), rows].join('\n');
}

function sampleDataToSql(data, times) {
    const schema = data.columnSchema;
    return `INSERT INTO ${data.table} (${schema.join(',')})
            VALUES ${Array(times).fill(0)
                        .map((_, index) => {
                            const _data = data.generate(index + 1000);
                            if (Array.isArray(_data)) {
                                return _data.map(_item => `(${schema.map(key => isNaN(_item[key]) ? `'${_item[key]}'` : _item[key]).join(',')})`);
                            } else {
                                return `(${schema.map(key => isNaN(_data[key]) ? `'${_data[key]}'` : _data[key]).join(',')})`;
                            }
                        })
                        .join(',\n')}`;
}

fs.writeFile(`${moment().format('YYYYMMDD-hh:mm:ss')}-product-data.sql`, sampleDataToSql(product, DATA_LENGTH), 'utf-8', error => {
    if (error) {
        throw error;
    }
    console.log('Sample product data generated');
});

fs.writeFile(`${moment().format('YYYYMMDD-hh:mm:ss')}-product-image-data.sql`, sampleDataToSql(productImage, DATA_LENGTH), 'utf-8', error => {
    if (error) {
        throw error;
    }
    console.log('Sample product image data generated');
});