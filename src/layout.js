// Template Layout Wrapper
// Read more how this works here: https://webpack.js.org/guides/dependency-management/
 
// Make sure to set the modules option to false if you are using Babel preset env plugin. By default, Babel rewrites modules to use CommonJS, which won’t tree-shake.  
// modules:false is default when using babel-loader
module.exports = templateData => {
  return (
    require("./templates/layout.ejs")(
      {
        ...templateData,
        header: require("./templates/header.ejs")(templateData),
        breadcrumb: require("./templates/breadcrumb.ejs")(templateData),
        body: require("./pages/" + templateData.htmlWebpackPlugin.options.page + ".ejs")(templateData),
        footer: require("./templates/footer.ejs")(templateData),
      })
  );
};


