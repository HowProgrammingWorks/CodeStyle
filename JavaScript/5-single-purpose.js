'use strict';

// Functions should do one thing; separate parse and format

const reportBad = (raw) => {
  const n = Number(String(raw).trim());
  if (!Number.isFinite(n)) return 'invalid';
  return `value=${n.toFixed(2)}`;
};

const parseNumber = (raw) => {
  const n = Number(String(raw).trim());
  return Number.isFinite(n) ? n : null;
};

const formatValue = (n) => `value=${n.toFixed(2)}`;

const report = (raw) => {
  const n = parseNumber(raw);
  return n == null ? 'invalid' : formatValue(n);
};

// Usage

console.log(reportBad(' 12.5 '), report(' 12.5 '));
console.log(reportBad('x'), report('x'));
