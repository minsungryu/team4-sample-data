const fs = require('fs');
const moment = require('moment');
const data = require('./data.js');

function sampleDataToCsvString(times) {
    const schema = data.columnSchema;
    const rows = Array(times).fill(0)
                    .map(() => {
                        const _data = data.generate();
                        return schema.map(key => _data[key]).join(',');
                    })
                    .join('\n');
    return [schema.join(','), rows].join('\n');
}

fs.writeFile(`${moment().format('YYYYMMDD-hh:mm:ss')}-sample-data.csv`, sampleDataToCsvString(10), 'utf-8', error => {
    if (error) {
        throw error;
    }
    console.log('Sample data generated');
});