<script>
	import { Button } from '$lib/components/ui/button';

	import LargeProject from '../project-layouts/LargeProject.svelte';

	import Django from '../language-badges/Django.svelte';
	import HTMLCSSJS from '../language-badges/HTMLCSSJS.svelte';
	import SQLite from '../language-badges/SQLite.svelte';

	import imageLight from '$lib/images/projects/hacktj_light.png';
	import imageDark from '$lib/images/projects/hacktj_dark.png';
	import { Github } from 'lucide-svelte';
</script>

<LargeProject>
	<svelte:fragment slot="image">
		<img src={imageLight}
				 alt="HackTJ Logo"
				 class="object-fill size-full rounded-3xl block dark:hidden" />
		<img src={imageDark}
				 alt="HackTJ Logo"
				 class="object-fill size-full rounded-3xl hidden dark:block" />
	</svelte:fragment>
	<svelte:fragment slot="text">
		<h1 class="text-5xl font-bold">HackTJ Portal</h1>
		<h3 class="text-2xl">A Privacy-Focused, FERPA-Compliant Hackathon Submission and
			Judging Platform</h3>
		<br />
		<p>
			Previously, HackTJ, an annual student-run high school hackathon, used Devpost to
			manage its project submission and judging needs. However, just mere months before
			our scheduled event, our school district (Fairfax County Public Schools) banned the
			use of Devpost due to privacy concerns. This left the HackTJ team scrambling to
			find a replacement platform that was both privacy-focused and FERPA-compliant.
		</p>
		<br />
		<p>
			To help solve this problem, I spent the next few months developing and deploying
			the HackTJ Portal, a custom submission and judging platform that met all of our
			needs. It passed FCPS's security scans and privacy reviews with flying colors, and
			gave us the secure district-approved hackathon platform we needed.
		</p>
		<br />
		<HTMLCSSJS />
		<Django />
		<SQLite />
	</svelte:fragment>
	<svelte:fragment slot="links">
		<Button variant="link" size="icon" href="https://github.com/HackTJ/portal"
						target="_blank"
						rel="noopener noreferrer">
			<Github class="size-9 ml-2" />
		</Button>
	</svelte:fragment>
</LargeProject>
