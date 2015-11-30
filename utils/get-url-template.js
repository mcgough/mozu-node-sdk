'use strict';
/**
 * Memoized function to turn URI Template text strings into Template objects.
 *
 * Assumes that unescaped URI Template variables are required,
 * since they're always base URLs in the current codegen.
 *
 * @param {String} templateText The URI template string.
 * @returns {Template} Object with a `render` method and a `keysUsed` object.
 */

const uritemplate = require('uritemplate');
let cache = {};
module.exports = function(templateText) {
  if (cache[templateText]) {
    return cache[templateText];
  }
  let tpt = uritemplate.parse(templateText);
  return cache[templateText] = {
    render: x => tpt.expand(x),
    keysUsed: tpt.expressions.reduce(
      (o, e) => {
        let varname = e.varspecs && e.varspecs[0] && e.varspecs[0].varname;
        if (varname && !e.varspecs[0].exploded) {
          o.all.push(varname);
          if (e.operator.symbol === '+') {
            o.required.push(varname);
          }
        }
        return o;
      },
      {
        all: [],
        required: []
      }
    )
  };
};