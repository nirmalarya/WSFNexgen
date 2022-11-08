/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin");

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    domain: Joi.string()
      .required()
      .description(`Auth0 domain found in your application settings.`),
    clientId: Joi.string()
      .required()
      .description(`Auth0 Client ID found in your application settings.`),
    callback: Joi.string()
      .required()
      .description(
        `Callback URL, must match an option in Allowed Callback URLs field in application settings.`
      ),
  });
};
