module.exports.debug = function (value) {
  console.log("------------------  handlebars debug  --------------------");
  console.log("this", this);
  if(!!value) {
    console.log("value", value);
  }
  console.log("------------------ /handlebars debug  --------------------");
  return;
};

module.exports.for = function(to, block) {
    var accum = '';
    for(var i = 1; i < to + 1; i += 1)
        accum += block.fn(i);
    return accum;
};