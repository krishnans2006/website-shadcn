import { projects } from '../../data/hackathons.json'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		projects: projects,
	}
}
