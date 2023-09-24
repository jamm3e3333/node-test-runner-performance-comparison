import probe from '../probe';

exports.mochaGlobalSetup = async function () {
    console.log('running')
    probe();
  };