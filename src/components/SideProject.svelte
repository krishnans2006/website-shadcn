<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
  import * as Sheet from "$lib/components/ui/sheet";

	import { MoveLeft, MoveRight } from 'lucide-svelte';
</script>

<div class="animate-fade-up delay-1000 basis-1/3">
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
		<Card.Header>
			<Card.Title class="text-center text-2xl">Lead Student Sysadmin</Card.Title>
			<Card.Description class="text-center text-md">TJ Computer Systems Lab</Card.Description>
		</Card.Header>
		<Card.Content>
			<slot name="text"></slot>
		</Card.Content>
		<Card.Footer class="flex-auto flex-wrap gap-2 justify-center">
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]}>
						See more
						<MoveRight class="size-4 ml-2" />
					</Button>
				</Sheet.Trigger>
				<Sheet.Content>
					<Sheet.Header>
						<Sheet.Title>Lead Student Sysadmin</Sheet.Title>
						<Sheet.Description>TJ Computer Systems Lab (TJ CSL)</Sheet.Description>
					</Sheet.Header>
					<Sheet.Footer>
						<Sheet.Close asChild let:builder>
							<Button builders={[builder]} variant="secondary" class="mt-2 mr-auto">
								<MoveLeft class="size-4 mr-2" />
								Back
							</Button>
						</Sheet.Close>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</Card.Footer>
	</Card.Root>
</div>
