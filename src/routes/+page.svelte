<script lang="ts">
	import { Github, Linkedin, Mail, Phone, MapPin, Users } from 'lucide-svelte';

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
		<div class="flex gap-2 items-center">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} class="w-28">Projects</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-44">
					<DropdownMenu.Item href="/hackathons" class="cursor-pointer">
						<Users class="mr-2 size-4" />
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
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} class="w-32" variant="secondary">Get In Touch</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item href="mailto:krishnans2006@gmail.com" class="cursor-pointer"
														 target="_blank" rel="noopener noreferrer">
						<Mail class="mr-2 size-4" />
						<span>krishnans2006@gmail.com</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item href="tel:7035590131" class="cursor-pointer" target="_blank"
														 rel="noopener noreferrer">
						<Phone class="mr-2 size-4" />
						<span>(703) 559-0131</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item href="https://maps.app.goo.gl/M7TDG89Puvh2tL8i8"
														 class="cursor-pointer" target="_blank" rel="noopener noreferrer">
						<MapPin class="mr-2 size-4" />
						<span>Falls Church, Virginia</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<div class="ml-2">
				<Button variant="link" size="icon" href="https://github.com/krishnans2006" target="_blank"
								rel="noopener noreferrer">
					<Github class="size-7" />
				</Button>
				<Button variant="link" size="icon" href="https://linkedin.com/in/krishnan-shankar"
								target="_blank" rel="noopener noreferrer">
					<Linkedin class="size-7" />
				</Button>
			</div>
		</div>
	</div>
</div>
