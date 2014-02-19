module.exports.debug = function (value) {
  console.log("------------------  handlebars debug  --------------------");
  console.log("this", this);
  if(!!value) {
    console.log("value", value);
  }
  console.log("------------------ /handlebars debug  --------------------");
  return;
};

module.exports.for = function(to, options) {
  var accum = '';
  for(var i = 1; i < to + 1; i += 1) {
    accum += options.fn(i);
  }
  return accum;
};

// logic
module.exports.does = function(thisVal, op, thatVal, options) {
  var results;
  switch(op) {
    case "equal":
      return (thisVal === thatVal) ? options.fn(this) : options.inverse(this);
  }
};
