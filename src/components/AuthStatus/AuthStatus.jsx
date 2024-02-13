import { Button } from '../Button/Button'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

export function AuthStatus() {
	const navigate = useNavigate()
	const auth = useAuth()

	const handleSignout = () => {
		auth.signout(() => {
			navigate('/')
		})
	}

	if (auth.user === null) {
		return (
			<div style={{ display: 'flex' }}>
				<div
					style={{
						display: 'flex',
						margin: 'auto',
						color: 'red',
						fontSize: '1.25rem',
						fontWeight: 'bold',
					}}
				>
					Вы не авторизованы!
				</div>
				<Button onClick={() => navigate('/login')}>Авторизоваться</Button>
			</div>
		)
	}

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ margin: 'auto', fontSize: '1.25rem' }}>
				Добро пожаловать <span style={{ fontWeight: 'bold' }}>{auth.user}</span>{' '}
			</div>
			<Button onClick={handleSignout}>Выйти</Button>
		</div>
	)
}
