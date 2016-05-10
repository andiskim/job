FlowRouter.route('/', {
    action: function(params,queryParams) {
      BlazeLayout.render('ApplicationLayout', { nav: "navbar", main: "home", footer: "footer" });
    },
    name: "home"
});

FlowRouter.route('/user/:_id', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('UserLayout', { nav: "navbar", main: "user", footer: "footer" });
    },

    name: "user" // optional
});

FlowRouter.route('/resume', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('UserLayout', { nav: "navbar", main: "resume", footer: "footer" });
    },

    name: "resume" // optional
});

FlowRouter.route('/video', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('UserLayout', { nav: "navbar", main: "video", footer: "footer" });
    },

    name: "video" // optional
});

FlowRouter.route('/messages', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('UserLayout', { nav: "navbar", main: "messages", footer: "footer" });
    },

    name: "messages" // optional
});

FlowRouter.route('/favorites', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('UserLayout', { nav: "navbar", main: "favorites", footer: "footer" });
    },

    name: "favorites" // optional
});
