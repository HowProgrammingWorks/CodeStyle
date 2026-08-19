'use strict';

// Nested conditions vs early return

const accessLabelNested = (user) => {
  if (user) {
    if (user.active) {
      if (user.role === 'emperor') return 'full';
      return 'limited';
    }
    return 'inactive';
  }
  return 'guest';
};

const accessLabel = (user) => {
  if (!user) return 'guest';
  if (!user.active) return 'inactive';
  if (user.role === 'emperor') return 'full';
  return 'limited';
};

// Usage

const marcus = { active: true, role: 'emperor' };
console.log(accessLabelNested(marcus), accessLabel(marcus));
console.log(accessLabelNested(null), accessLabel(null));
