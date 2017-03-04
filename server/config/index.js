const config = {
	database: {
		db: 'mag',
		host: 'localhost',
		port: 2999
	},
	session: {
		secret: '2793cefd210312935774ce1a9e2fd175',
		key: 'sid',
		name: 'sessionId',
		domain: 'localhost',
		cookie: {
			path: '/',
			maxAge: 24 * 60 * 60 * 1000,
			httpOnly: true
		},
		resave: false,
		saveUninitialized: true
	},
	allowDomain: {
		siteUrl: 'http://localhost:3000',
		methods: 'GET, PUT, POST, DELETE',
		headers: 'Content-Type',
	}
}

export default config
