<script>
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';

	import Django from '../badges/Django.svelte';
	import HTMLCSSJS from '../badges/HTMLCSSJS.svelte';
	import SQLite from '../badges/SQLite.svelte';
</script>

<Card.Root class="p-3">
	<Card.Content class="flex flex-col md:flex-row gap-4 items-center p-1 md:p-6">
		<div class="md:w-1/3">
			<img src="https://avatars.githubusercontent.com/u/12674382?s=1200" alt="HackTJ Logo"
					 class="object-fill size-full rounded-3xl" />
		</div>
		<div class="md:w-2/3">
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
		</div>
	</Card.Content>
</Card.Root>