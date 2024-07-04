<script lang="ts">
	import { Users } from 'lucide-svelte';

	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<div class="flex gap-8 md:gap-12 mt-24 flex-col items-center md:flex-row">
	<Avatar.Root class="flex-none size-72 md:size-96">
		<Avatar.Image
			src="https://media.licdn.com/dms/image/D4D03AQHGfYRRgHKjhA/profile-displayphoto-shrink_800_800/0/1631249189059?e=1725494400&v=beta&t=t1JMEEth8crgr993ylQA-j7mAEMHBdPrTfWqTa5loM4"
			alt="@krishnans2006" />
		<Avatar.Fallback>KS</Avatar.Fallback>
	</Avatar.Root>
	<div class="flex-auto flex flex-col justify-center gap-4">
		<h1 class="text-4xl font-bold">Hey, I'm Krishnan 🌊</h1>
		<h3 class="text-lg">I'm a rising freshman at the University of Illinois, Urbana-Champaign.</h3>
		<div class="flex gap-2">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} class="w-28">Projects</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-44">
					<DropdownMenu.Item href="/hackathons" class="cursor-pointer">
						<Users class="mr-2 size-4"/>
						<span>Hackathons</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<Button
				variant="secondary"
				href="https://raw.githubusercontent.com/krishnans2006/resume/main/Krishnan_Shankar_Resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="w-28"
			>
				Resume
			</Button>
		</div>
	</div>
</div>
