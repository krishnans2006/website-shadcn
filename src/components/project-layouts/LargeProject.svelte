<script>
	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root class="p-3 relative">
	<Card.Content class="flex flex-col md:flex-row gap-4 items-center p-1 md:p-6">
		<div class="md:w-1/3">
			<slot name="image"></slot>
		</div>
		<div class="md:w-2/3">
			<slot name="text"></slot>
		</div>
	</Card.Content>
	<div class="absolute right-10 bottom-7">
		<slot name="links"></slot>
	</div>
</Card.Root>
