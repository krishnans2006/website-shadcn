interface URL {
	name: string,
	url: string,
}

export interface Project {
	name: string,
	summary: string,
	description: string,
	image: string,
	image_invert_dark?: boolean,
	code_url: URL | null,
	demo_url: URL | null,
}
