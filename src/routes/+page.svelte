<script lang="ts">
	import {
		Github,
		Linkedin,
		Mail,
		Phone,
		MapPin,
		KeyRound,
		Users,
		School,
		Server,
		Code,
		Plane,
		BriefcaseBusiness,
		ChevronDown,
		ArrowDownToLine
	} from 'lucide-svelte';

	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import Autoplay from 'embla-carousel-autoplay';

	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	import TurnIn from '../components/projects/TurnIn.svelte';
	import GroundStation from '../components/projects/GroundStation.svelte';
	import Portal from '../components/projects/Portal.svelte';

	let carouselAPI: CarouselAPI;
	let count: number;
	let currentSlide: number;

	let autoplay = Autoplay({ delay: 10_000 });

	$: if (carouselAPI) {
		count = carouselAPI.scrollSnapList().length;
		currentSlide = carouselAPI.selectedScrollSnap();

		// Random start
		let randomIndex = Math.floor(Math.random() * count);
		carouselAPI.scrollTo(randomIndex);

		// Update current slide
		carouselAPI.on('select', () => {
			currentSlide = carouselAPI.selectedScrollSnap();
		});
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
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} class="w-36">Experience
							<ChevronDown class="ml-2 size-4" />
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-48">
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>
								<School class="mr-2 size-4" />
								<span>High School</span>
							</DropdownMenu.SubTrigger>
							<DropdownMenu.SubContent class="w-60">
								<DropdownMenu.Item>
									<School class="mr-2 size-4" />
									<span>Student @ TJHSST</span>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Server class="mr-2 size-4" />
									<span>Lead Sysadmin @ TJ CSL</span>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Plane class="mr-2 size-4" />
									<span>President @ TJ UAV</span>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<Code class="mr-2 size-4" />
									<span>Technical Lead @ HackTJ</span>
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Sub>
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>
								<BriefcaseBusiness class="mr-2 size-4" />
								<span>Work Experience</span>
							</DropdownMenu.SubTrigger>
							<DropdownMenu.SubContent class="w-60">
								<DropdownMenu.Item>
									<BriefcaseBusiness class="mr-2 size-4" />
									<span>Student Researcher @ MITRE</span>
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Sub>
						<DropdownMenu.Item href="/hackathons" class="cursor-pointer">
							<Users class="mr-2 size-4" />
							<span>Hackathons</span>
						</DropdownMenu.Item>
						<DropdownMenu.Label class="font-light italic">
							<span>More coming soon...</span>
						</DropdownMenu.Label>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
				<Button
					variant="secondary"
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

	<a class="hidden xl:flex flex-col justify-end grow mt-12 mb-24" href="#more">
		<span class="text-center">SEE MORE</span>
		<ChevronDown class="size-8 mx-auto" />
	</a>
</div>

<div id="more" class="h-[2500px] scroll-mt-20 flex flex-col items-center">
	<h1 class="text-4xl mb-6">Here are some of my projects:</h1>
	<Carousel.Root class="w-11/12 max-h-dvh" bind:api={carouselAPI} opts="{{ loop: true }}"
								 plugins="{[autoplay]}">
		<Carousel.Content>
			<Carousel.Item>
				<TurnIn />
			</Carousel.Item>
			<Carousel.Item>
				<GroundStation />
			</Carousel.Item>
			<Carousel.Item>
				<Portal />
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
	<div class="flex flex-row gap-2">
		{#each { length: count } as _, i}
			{#if i === currentSlide}
				<Button size="icon" class="mt-4 rounded-full size-3"
								on:click={() => { autoplay.stop(); carouselAPI.scrollTo(i); }}></Button>
			{:else}
				<Button size="icon" variant="secondary" class="mt-4 rounded-full size-3"
								on:click={() => { autoplay.stop(); carouselAPI.scrollTo(i); }}></Button>
			{/if}
		{/each}
	</div>
</div>
