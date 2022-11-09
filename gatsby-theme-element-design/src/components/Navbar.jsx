import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "gatsby-theme-bayer-auth"

export default function Navbar() {
	const { isAuthenticated, user } = useAuth0()
	return (
		<div
			style={{
				width: "100%",
				textAlign: "right",
				fontFamily: "-apple-system, Roboto, sans-serif, serif",
				padding: "1em",
			}}
		>
			{" "}
			{isAuthenticated ? (
				<p style={{ display: "inline" }}>{`Hi ${user.name}`}</p>
			) : (
				<p style={{ display: "inline" }}>Login to see your info</p>
			)}
			<LoginButton
				style={{ display: "inline-block", marginLeft: "10px" }}
			/>
		</div>
	)
}
