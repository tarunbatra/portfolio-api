/**
 * @file Service to respond to the client
 */

module.exports = {


  /**
   * Initialize data property of request object
   * Assigns the params to a .params object.
   * the params will be taken from .query if get
   * and .body if post
   */
  init: (req, res, next) => {
    req.data = {};
    req.obj = {};
    switch (req.method) {
      case 'POST': req.obj = req.body; break;
      case 'GET': req.obj = req.query; break;
      default :
    }
    next();
  },

  /**
   * Replies client with whatever is there in
   * data property of request object
   */
  reply: (req, res, next) => {
    // If request has not been handled,
    // keep it unhandled
    if (!req.route || !req.route.stack) {
      return next();
    }
    if (!res.headersSent) {
      res.send({ success: true, data: req.data });
    }
  }
};
