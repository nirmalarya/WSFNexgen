import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

function LoginButton({ style }) {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
	return isAuthenticated ? (
		<button
			onClick={() => {
				logout({ returnTo: window.location.origin })
			}}
			style={style}
		>
			Log out
		</button>
	) : (
		<button onClick={loginWithRedirect} style={style}>
			Log in
		</button>
	)
}

export default LoginButton
