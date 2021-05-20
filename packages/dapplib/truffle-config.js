require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember smile hover close bottom tool'; 
let testAccounts = [
"0x9bb7e7da55e3e2b15e8a6f8fccd7d565ebfa95f9098f884d7ce246217bfb7c4c",
"0xf2cb8ed54445c95ef06d83856f3745956fdd8856ed298527842e3708fe66c7f0",
"0x5659ed47619dd6e39c97b0e07d2d34b744c59fabdedf2f81402b2ef9ad7089a5",
"0x7c3e5e7521b680a45376fbbbe38cde6af7ad0e946db9689743d64563b22d1bac",
"0x740c857f23251fa36a241616462b6a70f49f8589fb5a363fa3d4248b8a0af746",
"0xeff2721e69cbb40b264c6b5a6d071c6f13b8edef436a6e3348c97fe46cb8f807",
"0x06ce23234106f845d7d6c59073e704879e7cc2adccc103dc63cc0c999e832380",
"0x27df2b2ed99d9f2ee0b5f6c06581af0557851ee676257d590db9f22ea47ef24d",
"0x7a4c9a9be0ea575d8e49a17561495e1749b42c211e625685435652e65b875ad3",
"0x0c06b093a77190226ec930fc7037f2d74bcdaf79025fcfd6d6c29e196bd46a49"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
