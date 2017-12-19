module.exports = {
    getExtension: function (country) { //I like this, but no need for that. endpoints don't change
        var extension = '';
        switch (country) {
            case 'US':
                extension = 'com';
                break;
            case 'UK':
                extension = 'co.uk';
                break;
            default:
                extension = 'com';
                break;
        }

        return extension;
    },
    //https://developer.ebay.com/devzone/merchandising/docs/concepts/siteidtoglobalid.html
    getSiteId: function (country) {
        var siteId = '';
        switch (country) {
            case 'US':
                siteId = 'EBAY-US';
                break;
            case 'UK':
                siteId = 'EBAY-GB';
                break;
            case 'IN'://INDIA
                siteId = 'EBAY-IN';
                break;
            case 'CAN': //CANADA - ENGLISH
                siteId = 'EBAY-ENCA';
                break;
            case 'AU': //Australia
                siteId = 'EBAY-AU';
                break;
            default:
                siteId = 'EBAY-US';
                break;
        }

        return siteId;
    },
    //https://developer.ebay.com/devzone/merchandising/docs/concepts/siteidtoglobalid.html
    getSiteCode: function (country) {
        var siteCode = '';
        switch (country) {
            case 'US':
                siteCode = '0';
                break;
            case 'UK':
                siteCode = '3';
                break;
            case 'IN'://INDIA
                siteCode = '203';
                break;
            case 'CAN': //CANADA - ENGLISH
                siteCode = '2';
                break;
            case 'AU': //Australia
                siteCode = '15';
                break;
            default:
                siteCode = '0';
                break;
        }

        return siteCode;
    }
};