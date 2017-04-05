var chai = require('chai'),
        expect = chai.expect,
    chaiAsPromised = require('chai-as-promised'),
    dirtyChai = require('dirty-chai')
;
chai.use(chaiAsPromised)
chai.use(dirtyChai)

global.expect = expect
