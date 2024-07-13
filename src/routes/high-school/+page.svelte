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
		<Card.Header>
			<Card.Title class="text-center">Academics</Card.Title>
			<Card.Description class="text-center">My academics</Card.Description>
		</Card.Header>
		<Card.Content>
			<img src="https://hi.com" alt="TJHSST" class="w-full" />
		</Card.Content>
		<Card.Footer class="flex-auto flex-wrap gap-2 justify-center">
			<Button variant="secondary" href="/" target="_blank"
							rel="noopener noreferrer">Thing
			</Button>
		</Card.Footer>
	</Card.Root>
</div>
