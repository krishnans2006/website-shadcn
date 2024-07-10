import { projects } from '../../data/hobby.json'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
	return {
		projects: projects,
	}
}
