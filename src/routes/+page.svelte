<script lang="ts">
	import {
		Github,
		Linkedin,
		Mail,
		Phone,
		MapPin,
		KeyRound,
		ChevronDown,
		ArrowDownToLine
	} from 'lucide-svelte';

	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import Autoplay from 'embla-carousel-autoplay';
	import AutoScroll from 'embla-carousel-auto-scroll';

	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	import TurnIn from '../components/projects/TurnIn.svelte';
	import GroundStation from '../components/projects/GroundStation.svelte';
	import Portal from '../components/projects/Portal.svelte';
	import HackathonProject from '../components/project-layouts/HackathonProject.svelte';

	import type { PageData } from './$types';
	import type { Project as ProjectType } from '../data/projects';

	export let data: PageData;

	let projects: ProjectType[] = data.projects;

	// Project Carousel
	let projectCarouselAPI: CarouselAPI;
	let projectCarouselCount: number;
	let projectCarouselCurrent: number;
	let projectCarouselAutoplay = Autoplay({ delay: 10_000 });

	$: if (projectCarouselAPI) {
		projectCarouselCount = projectCarouselAPI.scrollSnapList().length;

		// Random start
		let randomIndex = Math.floor(Math.random() * projectCarouselCount);
		while (projectCarouselAPI.selectedScrollSnap() !== randomIndex) {
			projectCarouselAPI.scrollNext();
		}

		// Set current slide after random start
		projectCarouselCurrent = projectCarouselAPI.selectedScrollSnap();

		// Update current slide
		projectCarouselAPI.on('select', () => {
			projectCarouselCurrent = projectCarouselAPI.selectedScrollSnap();
		});
	}

	// Hackathon Carousel
	let hackathonCarouselAPI: CarouselAPI;
	let hackathonCarouselCount: number;
	let hackathonCarouselAutoscroll = AutoScroll({
		speed: 1,
		startDelay: 2000,
		stopOnInteraction: false
	});

	$: if (hackathonCarouselAPI) {
		hackathonCarouselCount = hackathonCarouselAPI.scrollSnapList().length;

		// Random start
		let randomIndex = Math.floor(Math.random() * hackathonCarouselCount);
		while (hackathonCarouselAPI.selectedScrollSnap() !== randomIndex) {
			hackathonCarouselAPI.scrollNext();
		}
	}
</script>

<svelte:head>
	<title>Krishnan Shankar</title>
</svelte:head>

<div class="flex flex-col xl:min-h-dvh grow flex-none items-center">
	<div
		class="flex gap-10 xl:gap-12 mt-6 md:mt-12 lg:mt-24 flex-col items-center xl:flex-row xl:flex-auto">
		<div class="flex-none basis-1/3 flex justify-center mb-8 xl:mb-0">
			<Avatar.Root class="size-72 md:size-96">
				<Avatar.Image
					src="./picture.png"
					alt="@krishnans2006" />
				<Avatar.Fallback>KS</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="flex-auto flex flex-col basis-2/3 justify-center gap-3 tracking-wide">
			<h1 class="text-4xl font-bold">Hey, I'm Krishnan 🌊</h1>
			<h3 class="text-lg mb-3">I'm a rising freshman at the University of Illinois,
				Urbana-Champaign.</h3>

			<p class="text-md">
				Skills:
			</p>
			<ul class="list-disc ml-6 leading-loose mb-1">
				<li>
					Full-Stack Web Development
					<ul class="list-disc ml-6">
						<li>HTML/CSS/JavaScript, React, <strong>Svelte</strong> + SvelteKit</li>
						<li><strong>Flask</strong>, <strong>Django</strong>, FastAPI, SocketIO</li>
						<li>MySQL, PostgreSQL, SQLite, Firestore, MongoDB</li>
					</ul>
				</li>
				<li>
					Fluent In: <strong>Python</strong>, JavaScript, Java
				</li>
				<li>
					Development Tools: <strong>Git</strong>, GitHub, <strong>Linux</strong>, Raspberry Pi,
					Jetbrains IDEs, VSCode
				</li>
				<li>
					Cloud Services: Amazon (AWS), Google (GCP), Oracle (OCI), Heroku
				</li>
			</ul>

			<div class="flex gap-2 items-center flex-col md:flex-row">
				<Button
					href="https://raw.githubusercontent.com/krishnans2006/resume/main/Krishnan_Shankar_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="w-32"
				>
					Resume
					<ArrowDownToLine class="ml-2 size-4" />
				</Button>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} class="w-36" variant="secondary">Get In Touch
							<ChevronDown class="ml-2 size-4" />
						</Button>
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
						<DropdownMenu.Item href="https://github.com/krishnans2006.gpg"
															 class="cursor-pointer" target="_blank" rel="noopener noreferrer">
							<KeyRound class="mr-2 size-4" />
							<span class="font-mono">A30C 1843 F470 4843</span>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
				<div class="ml-2">
					<Button variant="link" size="icon" href="https://github.com/krishnans2006"
									target="_blank"
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

	<a class="hidden xl:flex flex-col justify-end grow mt-12 mb-24" href="#projects"
		 on:click={() => { projectCarouselAPI.scrollNext(); projectCarouselAutoplay.reset(); }}>
		<span class="text-center">SEE MORE</span>
		<ChevronDown class="size-8 mx-auto" />
	</a>
	<div class="block xl:hidden mt-12"></div>
</div>

<div id="projects" class="scroll-mt-36 flex flex-col items-center">
	<h1 class="text-4xl mb-6">Here are some of my projects:</h1>
	<Carousel.Root class="w-11/12 max-h-dvh" bind:api={projectCarouselAPI} opts="{{ loop: true }}"
								 plugins="{[projectCarouselAutoplay]}">
		<Carousel.Content>
			<Carousel.Item class="max-h-dvh">
				<TurnIn />
			</Carousel.Item>
			<Carousel.Item class="max-h-dvh">
				<GroundStation />
			</Carousel.Item>
			<Carousel.Item class="max-h-dvh">
				<Portal />
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous class="hidden lg:flex" />
		<Carousel.Next class="hidden lg:flex" />
	</Carousel.Root>
	<div class="flex flex-row gap-2">
		{#each { length: projectCarouselCount } as _, i}
			{#if i === projectCarouselCurrent}
				<Button size="icon" class="mt-4 rounded-full size-3"
								on:click={() => { projectCarouselAutoplay.stop(); projectCarouselAPI.scrollTo(i); }}></Button>
			{:else}
				<Button size="icon" variant="secondary" class="mt-4 rounded-full size-3"
								on:click={() => { projectCarouselAutoplay.stop(); projectCarouselAPI.scrollTo(i); }}></Button>
			{/if}
		{/each}
	</div>
</div>

<div id="hackathon-projects" class="scroll-mt-20 flex flex-col items-center mt-36 md:mt-20">
	<h1 class="text-4xl mb-6">And some hackathon projects:</h1>
	<Carousel.Root class="w-11/12 max-h-dvh" bind:api={hackathonCarouselAPI} opts="{{ loop: true }}"
								 plugins="{[hackathonCarouselAutoscroll]}">
		<Carousel.Content>
			{#each projects as project}
				<Carousel.Item class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-4 max-h-dvh">
					<HackathonProject {project} fixedHeight={true} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous class="hidden lg:flex" />
		<Carousel.Next class="hidden lg:flex" />
	</Carousel.Root>
</div>

<!--
<div id="specialties" class="scroll-mt-20 flex flex-col items-center mt-24 md:mt-14">
	<h1 class="text-4xl mb-6">I work with:</h1>
	<div class="flex flex-row gap-3 mb-0.5 w-11/12 min-h-96">
		<Tabs.Root class="basis-1/2">
			<div class="flex flex-row gap-3 mb-0.5">
				<div class="basis-full text-center text-muted-foreground flex flex-row gap-3 items-end">
					<div class="flex-grow h-1/2 border-t border-muted-foreground"></div>
					<p class="flex-shrink">LANGUAGES</p>
					<div class="flex-grow h-1/2 border-t border-muted-foreground"></div>
				</div>
			</div>
			<Tabs.List class="grid basis-1/2 grid-cols-5">
				<Tabs.Trigger value="python">Python</Tabs.Trigger>
				<Tabs.Trigger value="htmlcssjs">HTML/CSS/JS</Tabs.Trigger>
				<Tabs.Trigger value="rust">Rust</Tabs.Trigger>
				<Tabs.Trigger value="bash">Bash</Tabs.Trigger>
				<Tabs.Trigger value="java">Java</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="python">
				<Card.Root>
					<Card.Header>
						<Card.Title>Python</Card.Title>
						<Card.Description>
							I've worked with Python since 7th grade, building everything from web apps to
							games to neural networks.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2 flex flex-col lg:flex-row">
						<GitHubBadge title="PacMan" description="in pygame" url="https://github.com/krishnans2006/PacMan" class="lg:basis-1/2" />
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="htmlcssjs">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="rust">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="bash">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="java">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
		<Tabs.Root class="basis-1/2">
			<div class="flex flex-row gap-3 mb-0.5">
				<div class="basis-full text-center text-muted-foreground flex flex-row gap-3 items-end">
					<div class="flex-grow h-1/2 border-t border-muted-foreground"></div>
					<p class="flex-shrink">FRAMEWORKS</p>
					<div class="flex-grow h-1/2 border-t border-muted-foreground"></div>
				</div>
			</div>
			<Tabs.List class="grid basis-1/2 grid-cols-5">
				<Tabs.Trigger value="django">Django</Tabs.Trigger>
				<Tabs.Trigger value="flask">Flask</Tabs.Trigger>
				<Tabs.Trigger value="svelte">Svelte</Tabs.Trigger>
				<Tabs.Trigger value="pycord">Pycord</Tabs.Trigger>
				<Tabs.Trigger value="pygame">Pygame</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="django">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="flask">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="svelte">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="pycord">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="pygame">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-2">
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
-->
