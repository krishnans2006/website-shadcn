<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Krishnan Shankar - High School</title>
</svelte:head>

<div class="my-6">
	<h1 class="text-4xl font-bold text-center">My High School Experience</h1>
	<h4 class="text-lg text-center">I attended Thomas Jefferson High School for Science and
		Technology.</h4>
</div>

<div class="animate-fade-up delay-1000">
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
		<Card.Content class="flex flex-col md:flex-row gap-4 items-center p-1 md:p-6">
			<div class="md:w-1/4">
				<img src="$lib/images/high-school/tjhsst.png" alt="TJHSST Logo" class="object-fill size-full rounded-3xl" />
			</div>
			<div class="md:w-3/4">
				<h1 class="text-5xl font-bold">Academics</h1>
				<h3 class="text-2xl">As a student @ TJHSST</h3>
				<br />
				<ul class="list-disc ml-6 leading-loose mb-1">
					<li>
						Final GPA (weighted): <Badge>4.484</Badge>
					</li>
					<li>
						Test Scores: <Badge>PSAT 1500</Badge> <Badge>SAT 1530</Badge> <Badge>ACT 36</Badge>
					</li>
				</ul>
			</div>
		</Card.Content>
	</Card.Root>
</div>

<div class="animate-fade-up delay-1000 w-1/3">
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out hover:scale-105">
		<Card.Header>
			<Card.Title class="text-center">Lead Student Sysadmin</Card.Title>
			<Card.Description class="text-center">TJ Computer Systems Lab</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Hi</p>
		</Card.Content>
		<Card.Footer class="flex-auto flex-wrap gap-2 justify-center">

		</Card.Footer>
	</Card.Root>
</div>
