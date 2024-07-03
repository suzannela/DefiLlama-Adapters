const { aaveExports } = require('../helper/aave');

module.exports = {
    bouncebit: aaveExports("bouncebit", "0xe8c8819ebCe891Da7Db33a48A2cDca3d72203447", id => id, ['0xE668bBD37997ABfC6B67D11cf2D6091E646C82f7'], {
        abis: {
            getAllATokens: 'function getAllATokens() view returns (tuple(string symbol, address tokenAddress)[])',
        }
    })
};

delete module.exports.bouncebit.borrowed