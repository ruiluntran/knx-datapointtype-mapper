'use strict';

module.exports = {
  knxDatapointTypeMapper: (dataPoint) => {

    const partial = dataPoint.split('-');

    if (partial.length === 2) {
      partial[2] = 1;
    }

    return 'DPT' + partial[1] + '.' + ('000' + partial[2]).substr(-3);
  }
}
