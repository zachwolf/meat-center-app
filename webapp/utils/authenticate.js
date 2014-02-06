function authenticate (req, res, next) {

  "use strict";

  console.log("------------------  authenticate  --------------------");
  // console.log('req', req);
  // console.log("-------------------------------------------------");
  // console.log('res', res);
  console.log("------------------ /authenticate  --------------------");

  // if (req.session && req.session.loggedIn !== true) {
  //   req.flash('referralURL', req.url);
  //   return res.redirect('/login');
  // } else {
  //   // expose info to templates
  //   res.locals(req.session.user);
  //   res.locals({"loggedIn": true});
  next();
  // }
}

module.exports = authenticate;