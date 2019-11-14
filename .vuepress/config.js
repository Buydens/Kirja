module.exports = {
	base: '/Kirja/',
	title: 'Kirja',
	description: 'Static website built with VuePress and deployed on Github Pages',
    dest: './docs',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Tools', link: 'https://tools.conversal.be/' }
        ]
      }
};