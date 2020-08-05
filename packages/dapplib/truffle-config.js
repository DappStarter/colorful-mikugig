require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remember pudding hidden private surge soon'; 
let testAccounts = [
"0x7f72431f21b90e8b11292f58a23daa09c8a145eacb41d7c23f132c7ca2e1fc40",
"0x595d2325f3b44fe6f1c78001d05b8d471e3c489ed18da99e0bd91935275e6f69",
"0x3fba0d225b7dde974c84d4c67e0f11c54849d92f40874c7e4d122a7ea55483b7",
"0x1cc65a26bbcdfd5876a35341f7878a57c4165006c290d600ccf0f953bef54855",
"0x6b635e0146fc309586645587677cadf6be3a2c6683fa1124472d4c436d6ea389",
"0xc11e7a6dd92da906340a1c7d75ad24d69b6a367bb612044bb424586aadc27061",
"0x476a40d42b0c50545f33462f7d93769e9b02a3fb6ee5fe161f6138a13fb6c99f",
"0x81b147249ea6241f25633d237b77e6a7d3a4a2df5e811701f813fdba53c44f19",
"0xc68fd755174814ea03f609656a22f27a9324df2de58c7f5c525dd40a05b64702",
"0x60f4596da1028d80327bccf02724e5881202fab26bc55edf7eaa0e7772c8ea81"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
