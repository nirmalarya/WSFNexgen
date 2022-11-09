import React from "react"
import "./styles/theme.css"
import "./styles/reset.css"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
	return <Layout>{element}</Layout>
}
