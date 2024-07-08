<script>
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';

	import Django from '../badges/Django.svelte';
	import PostgreSQL from '../badges/PostgreSQL.svelte';
	import HTMLCSSJS from '../badges/HTMLCSSJS.svelte';
</script>

<Carousel.Item>
	<Card.Root class="p-3">
		<Card.Content class="flex flex-row gap-4 items-center p-6">
			<div class="w-1/3">
				<img src="https://tin.tjhsst.edu/static/favicon/android-chrome-maskable-512x512.png"
						 alt="Tin Logo" class="object-fill size-full rounded-3xl" />
			</div>
			<div class="w-2/3">
				<h1 class="text-5xl font-bold">Turn-In</h1>
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
			</div>
		</Card.Content>
	</Card.Root>
</Carousel.Item>
