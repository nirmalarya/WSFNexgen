/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Bayer WSF Nextgen`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		"gatsby-theme-element-design",
		{
			resolve: "gatsby-theme-bayer-auth",
			options: {
				domain: process.env.GATSBY_AUTH0_DOMAIN,
				clientId: process.env.GATSBY_AUTH0_CLIENTID,
				callback: process.env.AUTH0_CALLBACK,
			},
		},
		// { resolve: "gatsby-source-drupal", options: {} },
	],
}

export default config
