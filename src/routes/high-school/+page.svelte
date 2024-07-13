<script lang="ts">
	import * as Card from '$lib/components/ui/card';
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
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out hover:scale-105">
		<Card.Content class="flex flex-col md:flex-row gap-4 items-center p-1 md:p-6">
			<div class="md:w-1/3">
				<img src="$lib/images/high-school/tjhsst.jpeg" alt="TJHSST Logo" class="object-fill size-full rounded-3xl" />
			</div>
			<div class="md:w-2/3">
				<h1 class="text-5xl font-bold">Academics</h1>
				<h3 class="text-2xl">As a student @ TJHSST</h3>
				<br />
				<p>
					Test
				</p>
			</div>
		</Card.Content>
	</Card.Root>
</div>
