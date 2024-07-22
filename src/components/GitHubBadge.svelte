<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	export let title: string = '';
	export let description: string = '';
	export let url: string = '';

	let className: string = '';
	export { className as class };
</script>

<a href={url} class={className}>
	<Card.Root>
		<Card.Header>
			<Card.Title>{title}</Card.Title>
			<Card.Description>{description}</Card.Description>
		</Card.Header>
	</Card.Root>
</a>
