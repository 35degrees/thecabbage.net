import './index.css'
import { useState } from 'react'
import Item from './Item'

export default function App() {
	const [landing, setLanding] = useState(true)
	const [menu, setMenu] = useState(true)
	const [penis, setPenis] = useState(false)
	const [groceryPage, setGroceryPage] = useState(false)

	function handleLanding() {
		setPenis(false)
		setLanding(true)
		setMenu(true)
		setGroceryPage(false)
		console.log('mayde it')
	}

	function handlePasswordAuth() {
		setLanding(false)
		setMenu(false)
		setPenis(true)
		setGroceryPage(false)
		console.log('clicky')
	}
	function handlePasswordReset() {
		setPenis(false)
		setLanding(true)
		setMenu(true)
		setGroceryPage(false)
		console.log('clickical')
	}
	function handleGroceryReset() {
		setPenis(false)
		setLanding(true)
		setMenu(true)
		setGroceryPage(false)
		console.log('clickical')
	}
	function handleGroceryAuth() {
		setLanding(false)
		setMenu(false)
		setPenis(false)
		setGroceryPage(true)
		console.log('moive page clicked')
	}

	return (
		<div>
			<Menu
				menu={menu}
				penis={penis}
				onPasswordAuth={handlePasswordAuth}
				onGroceryAuth={handleGroceryAuth}
			/>
			<Landing landing={landing} onSetLanding={handleLanding} />
			{penis && (
				<PasswordAuthenticator
					penis={penis}
					onPasswordAuth={handlePasswordAuth}
					onPasswordReset={handlePasswordReset}
				/>
			)}
			{groceryPage && (
				<GroceryPage
					groceryPage={groceryPage}
					onGroceryReset={handleGroceryReset}
					onGroceryAuth={handleGroceryAuth}
				/>
			)}
		</div>
	)
}

function Landing({ landing, onSetLanding }) {
	return (
		landing && (
			<>
				<div className="primary">
					<h1 className="font-face-ha-main">Studio Cabbage</h1>
					<h2 className="primary-sub">Data Visualization</h2>
					<h2 className="primary-sub-2">Studio</h2>
				</div>
			</>
		)
	)
}

function Menu({ menu, onPasswordAuth, onGroceryAuth, onPasswordReset }) {
	return (
		menu && (
			<div className="react-menu hidden">
				<p className="react-header">React Projects:</p>
				<p className="react-item" onClick={onPasswordAuth}>
					Password Authenticator
				</p>
				<p className="react-item" onClick={onGroceryAuth}>
					My Grocery List
				</p>
			</div>
		)
	)
}

function PasswordAuthenticator({ onPasswordAuth, landing, onPasswordReset }) {
	const [description, setDescription] = useState('')
	const [password, setPassword] = useState('')
	let upperCase = new RegExp('(?=.*[A-Z])')
	let lowerCase = new RegExp('^(?=.*[a-z])')
	let numBer = new RegExp('(?=.*\\d)')
	let symBol = new RegExp('(?=.*[-+_!@#$%^&*.,?]).+$')

	// function handleAuthClose(e) {}

	return (
		<div className="auth-box">
			{description.length >= 6 &&
				description.length <= 10 &&
				password.length >= 8 &&
				upperCase.test(password) &&
				lowerCase.test(password) &&
				numBer.test(password) &&
				symBol.test(password) && (
					<span className="auth-x" onClick={onPasswordReset}>
						X
					</span>
				)}

			<h2 className="sign-up-header">Sign Up</h2>
			<div className="user-name">
				<h3>Enter User Name: </h3>
				<input type="text" onChange={(e) => setDescription(e.target.value)} />
				<ul>
					<li>
						<p className={description ? 'ok' : ''}>
							<span>{description ? '✅' : '❌'} </span>Name Available
						</p>
					</li>
					<li>
						<p className={description.length >= 6 ? 'ok' : ''}>
							<span>{description.length >= 6 ? '✅' : '❌'} </span>Min 6
							characters
						</p>
					</li>
					<li>
						<p
							className={
								description.length >= 6 && description.length <= 10 ? 'ok' : ''
							}
						>
							<span>
								{description.length >= 6 && description.length <= 10
									? '✅'
									: '❌'}{' '}
							</span>
							Max 10 characters
						</p>
					</li>
				</ul>
			</div>
			<div className="password-header">
				<h3>Enter Password:</h3>
				<input type="password" onChange={(e) => setPassword(e.target.value)} />
				<ul>
					<li>
						<p className={password.length >= 8 ? 'ok' : ''}>
							<span>{password.length >= 8 ? '✅' : '❌'} </span>Min 8 characters
						</p>
					</li>
					<li>
						<p className={upperCase.test(password) ? 'ok' : ''}>
							<span>{upperCase.test(password) ? '✅' : '❌'} </span>Contains one
							upper case letter
						</p>
					</li>
					<li>
						<p className={lowerCase.test(password) ? 'ok' : ''}>
							<span>{lowerCase.test(password) ? '✅' : '❌'} </span>Contains one
							lower case letter
						</p>
					</li>
					<li>
						<p className={numBer.test(password) ? 'ok' : ''}>
							<span>{numBer.test(password) ? '✅' : '❌'} </span>
							Contains one number
						</p>
					</li>
					<li>
						<p className={symBol.test(password) ? 'ok' : ''}>
							<span>{symBol.test(password) ? '✅' : '❌'} </span>Contains one
							symbol
						</p>
					</li>
				</ul>
				{description.length >= 6 &&
					description.length <= 10 &&
					password.length >= 8 &&
					upperCase.test(password) &&
					lowerCase.test(password) &&
					numBer.test(password) &&
					symBol.test(password) && (
						<h2 className="sign-up-footer">🙂 Good to go!</h2>
					)}
			</div>
		</div>
	)
}

function GroceryPage({ onGroceryAuth, onSetLanding, onGroceryReset }) {
	const [itemList, setItemList] = useState([])
	const [item, setItem] = useState('')
	// const date = new Date()
	// const id = date.getMilliseconds()
	// console.log(id)

	function handleGroceryInput(e) {
		e.preventDefault()
		if (!item) return
		const newItem = { item, bought: false, id: Date.now() }
		setItemList((itemList) => [...itemList, newItem])
		console.log(itemList)
		setItem('')
	}
	function groceryClear() {
		const confirmed = window.confirm('Are you sure?')
		if (confirmed) setItemList([])
	}

	return (
		<>
			<span className="grocery-x" onClick={onGroceryReset}>
				X
			</span>
			<div>
				<h2 className="grocery-banner">My Grocery List</h2>
			</div>
			<form className="grocery-input" type="text" onSubmit={handleGroceryInput}>
				<h3 className="grocery-header">Enter a grocery item:</h3>
				{/* <select>
					<option value="0">Grocery</option>
					<option value="1">TV Show</option>
				</select> */}
				<input
					type="text"
					value={item}
					onChange={(e) => setItem(e.target.value)}
				></input>
				<button>Submit</button>
			</form>
			{/* <output className="grocery-tv-grid">
					<div className="grocery-box"></div>
					<div className="tv-box"></div>
				</output> */}

			{itemList.length > 0 && (
				<div className="grocery-output">
					<h3>Groceries</h3>
					<p>Check to complete</p>
					<ul>
						{itemList.map((item) => (
							<Item item={item} key={item.id} />
						))}
					</ul>
					{/* <ul className="grocery-list"> */}
					{/* {itemList.map((item) => (
						// <li type="checkbox">{item}</li>

						<li>{item}</li>
					))} */}
					{/* </ul> */}

					<button className="grocery-clear" onClick={groceryClear}>
						Clear
					</button>
				</div>
			)}
		</>
	)
}
