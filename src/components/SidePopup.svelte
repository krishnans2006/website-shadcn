<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
  import * as Sheet from "$lib/components/ui/sheet";

	import { MoveLeft, MoveRight } from 'lucide-svelte';

	interface Project {
		title: string;
		description: string;
	}

	export let project: Project;
</script>

<div class="animate-fade-up delay-1000 md:basis-1/3">
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
		<Card.Header>
			<Card.Title class="text-center text-2xl">{project.title}</Card.Title>
			<Card.Description class="text-center text-md">{project.description}</Card.Description>
		</Card.Header>
		<Card.Content>
			<slot name="small"></slot>
		</Card.Content>
		<Card.Footer class="flex-auto flex-wrap gap-2 justify-center">
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]}>
						See more
						<MoveRight class="size-4 ml-2" />
					</Button>
				</Sheet.Trigger>
				<Sheet.Content class="max-w-full w-full md:max-w-xl lg:max-w-4xl">
					<Sheet.Header>
						<Sheet.Title>{project.title}</Sheet.Title>
						<Sheet.Description>{project.description}</Sheet.Description>
					</Sheet.Header>
					<Separator orientation="horizontal" class="mt-4 mb-4" />
					<div class="overflow-y-auto">
						<slot name="large"></slot>
					</div>
					<Separator orientation="horizontal" class="mt-4 mb-4" />
				</Sheet.Content>
			</Sheet.Root>
		</Card.Footer>
	</Card.Root>
</div>
