function knxDatapointTypeMapper(dataPoint) {
  const partial = dataPoint.split('-');
  return 'DPT' + partial[1] + '.' + ('000' + partial[2]).substr(-3);
}

export {
  knxDatapointTypeMapper
}
