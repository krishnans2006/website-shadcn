import routeMap from '../data/routes.json'
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {
		routes: routeMap.routes,
	}
}
