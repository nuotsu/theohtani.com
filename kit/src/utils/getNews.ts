const url = new URL('https://api-app.espn.com/allsports/apis/v1/now')
url.searchParams.set('contentcategories', '04a76996-4a5c-456d-8022-a9d45e3ff933')

const res = await fetch(url.toString())
const { feed } = await res.json()

export default feed.map(({ id, headline, links, source, images: [image], published }: any) => ({
	id,
	headline,
	url: links.web.href,
	source,
	image: {
		alt: image.alt,
		width: image.width,
		height: image.height,
		url: image.url,
	},
	published,
}))
