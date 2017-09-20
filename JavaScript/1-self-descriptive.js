'use strict';

const SIZE_UNITS = ['', ' Kb', ' Mb', ' Gb', ' Tb', ' Pb', ' Eb', ' Zb', ' Yb'];

const bytesToSize1 = (bytes) => {
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)), 10);
  return Math.round(bytes / Math.pow(1000, i), 2) + SIZE_UNITS[i];
};

const bytesToSize2 = (bytes) => {
  if (bytes === 0) return '0';
  const exp = Math.floor(Math.log(bytes) / Math.log(1000));
  const size = bytes / Math.pow(1000, exp);
  const short = Math.round(size, 2);
  const unit = SIZE_UNITS[exp];
  return short + unit;
};

const value = 723874520;
console.log(value);
console.log(bytesToSize1(value));
console.log(bytesToSize2(value));
