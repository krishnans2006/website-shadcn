<script>
	import { Button } from '$lib/components/ui/button';

	import LargeProject from '../project-layouts/LargeProject.svelte';

	import Django from '../language-badges/Django.svelte';
	import PostgreSQL from '../language-badges/PostgreSQL.svelte';
	import HTMLCSSJS from '../language-badges/HTMLCSSJS.svelte';

	import image from '$lib/images/projects/turnin.png';
	import { Github } from 'lucide-svelte';
</script>

<LargeProject>
	<svelte:fragment slot="image">
		<img src={image} alt="Tin Logo" class="object-fill size-full rounded-3xl" />
	</svelte:fragment>
	<svelte:fragment slot="text">
		<h1 class="text-5xl font-bold">
			Turn-In
			<Button variant="link" size="icon" href="https://github.com/tjcsl/tin"
							target="_blank"
							rel="noopener noreferrer">
				<Github class="size-9 ml-2" />
			</Button>
		</h1>
		<h3 class="text-2xl">TJHSST's Code Autograder</h3>
		<br />
		<p>
			Previously, teachers in TJHSST CS classes had to test student code manually. For
			example, they would collect student code through an LMS, run the code on their
			computer, and then analyze the results. They would repeat this process per student,
			per period, per assignment. As you can imagine, this is both time-consuming and
			risky from a security standpoint (what if a student submits malicious code?).
		</p>
		<br />
		<p>
			Turn-In solves this problem by enabling functionality for code autograders. All a
			teacher needs to do is write the grader script for an assignment, and students will
			be able to submit their code to Turn-In for grading. Turn-In will run the grader
			and give students instant feedback, allowing students to learn from their mistakes
			while saving teachers time and effort.
		</p>
		<br />
		<HTMLCSSJS />
		<Django />
		<PostgreSQL />
	</svelte:fragment>
</LargeProject>
