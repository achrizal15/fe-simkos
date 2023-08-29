const path = require('path');

module.exports = {
    // experimental: {
    //     serverActions: true,
    // },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        formats: ['image/webp', 'image/avif'],
        domains: ['127.0.0.1','localhost'],
    },
};
