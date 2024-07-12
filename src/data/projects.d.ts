interface URL {
	name: string,
	url: string,
}

export interface Project {
	name: string,
	summary: string,
	description: string,
	image?: string,
	image_invert_dark?: boolean,
	code_url?: URL | null,
	submission_url?: URL | null,
	demo_url?: URL | null,
	invite_url?: URL | null,
	is_winner?: boolean,
}
