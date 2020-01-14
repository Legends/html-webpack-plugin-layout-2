// Template Layout Wrapper
// Read more how this works here: https://webpack.js.org/guides/dependency-management/

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


