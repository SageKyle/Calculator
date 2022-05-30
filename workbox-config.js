module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,png,ico,webmanifest,html,json,md,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};