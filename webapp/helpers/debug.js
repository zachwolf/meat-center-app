exports.debug = function (value) {
  console.log("------------------  handlebars debug  --------------------");
  console.log("this", this);
  if(!!value) {
    console.log("value", value);
  }
  console.log("------------------ /handlebars debug  --------------------");
  return;
};