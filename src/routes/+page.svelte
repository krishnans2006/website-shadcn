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

	import * as Avatar from '$lib/components/ui/avatar';
  import { Badge } from "$lib/components/ui/badge";
	import { Button } from '$lib/components/ui/button/index.js';
  import * as Card from "$lib/components/ui/card";
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<svelte:head>
	<title>Krishnan Shankar</title>
</svelte:head>

<div class="flex flex-col xl:min-h-dvh grow flex-none items-center">
	<div class="flex gap-10 xl:gap-12 mt-6 md:mt-12 lg:mt-24 flex-col items-center xl:flex-row xl:flex-auto">
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
	<Carousel.Root class="w-11/12 max-h-dvh">
		<Carousel.Content>
			<!-- Item 1 -->
			<Carousel.Item>
				<Card.Root class="p-3">
					<Card.Content class="flex flex-row gap-4 items-center p-6">
						<div class="w-1/3">
							<img src="https://tin.tjhsst.edu/static/favicon/android-chrome-maskable-512x512.png" alt="Tin Logo" class="object-fill size-full rounded-3xl" />
						</div>
						<div class="w-2/3">
							<h1 class="text-5xl font-bold">Turn-In</h1>
							<h3 class="text-2xl">TJHSST's Code Autograder</h3>
							<br />
							<p>
								Previously, teachers in TJHSST CS classes had to test student code manually. For
								example, they would collect student code through an LMS, run the code on their
								computer, and then analyze the results. They would repeat this process per student,
								per period, per assignment. As you can imagine, this is both time-consuming and
								risky from a security standpoint (what if a student submits malicious code?).
							</p>
							<br />
							<p>
								Turn-In solves this problem by enabling functionality for code autograders. All a
								teacher needs to do is write the grader script for an assignment, and students will
								be able to submit their code to Turn-In for grading. Turn-In will run the grader
								and give students instant feedback, allowing students to learn from their mistakes
								while saving teachers time and effort.
							</p>
							<br />
							<Badge class="bg-[#EF662A] hover:bg-[#E34E26] text-white">HTML/CSS/JS</Badge>
							<Badge class="bg-[#0C4C32] hover:bg-[#103E2E] text-white">Django</Badge>
							<Badge class="bg-[#326690] hover:bg-[#2c5b81] text-white">PostgreSQL</Badge>
						</div>
					</Card.Content>
				</Card.Root>
			</Carousel.Item>

			<!-- Item 2 -->
			<Carousel.Item>
				<Card.Root class="p-3">
					<Card.Content class="flex flex-row gap-4 items-center p-6">
						<div class="w-1/3">
							<img src="https://avatars.githubusercontent.com/u/47068591?s=1200" alt="TJUAV Logo" class="object-fill size-full rounded-3xl" />
						</div>
						<div class="w-2/3">
							<h1 class="text-5xl font-bold">TJUAV GroundStation</h1>
							<h3 class="text-2xl">An Open-Source, Performance-Driven Implementation of Ardupilot</h3>
							<br />
							<p>
								The go-to Ardupilot Ground Control Station (GCS) is Mission Planner, an application
								that supports a variety of features including configuration, mission planning, and
								live telemetry. However, it's a Windows-only application, and all attempts to run
								it on Linux have resulted in a buggy mess. Additionally, performance issues result
								in frame rates as low as 0.2 FPS, which is unacceptable for something as crucial as
								a GCS.
							</p>
							<br />
							<p>
								TJUAV GroundStation solves this problem by interfacing directly with MAVLink
								messages from telemetry radios, providing a lightweight, fast, and cross-platform
								implementation of a GCS. It supports almost all of Mission Planner's features, and
								arguably implements them better.
							</p>
							<br />
							<Badge class="bg-[#61DBFB] hover:bg-[#3fd3fa] text-black">React</Badge>
							<Badge class="bg-[#3BABC3] hover:bg-[#3599af]">Flask</Badge>
						</div>
					</Card.Content>
				</Card.Root>
			</Carousel.Item>

			<!-- Item 3 -->
			<Carousel.Item>
				<Card.Root class="p-3">
					<Card.Content class="flex flex-row gap-4 items-center p-6">
						<div class="w-1/3">
							<img src="https://avatars.githubusercontent.com/u/12674382?s=1200" alt="HackTJ Logo" class="object-fill size-full rounded-3xl" />
						</div>
						<div class="w-2/3">
							<h1 class="text-5xl font-bold">HackTJ Portal</h1>
							<h3 class="text-2xl">A Privacy-Focused, FERPA-Compliant Hackathon Submission and Judging Platform</h3>
							<br />
							<p>
								Previously, HackTJ, an annual student-run high school hackathon, used Devpost to
								manage its project submission and judging needs. However, just mere months before
								our scheduled event, our school district (Fairfax County Public Schools) banned the
								use of Devpost due to privacy concerns. This left the HackTJ team scrambling to
								find a replacement platform that was both privacy-focused and FERPA-compliant.
							</p>
							<br />
							<p>
								To help solve this problem, I spent the next few months developing and deploying
								the HackTJ Portal, a custom submission and judging platform that met all of our
								needs. It passed FCPS's security scans and privacy reviews with flying colors, and
								gave us the secure district-approved hackathon platform we needed.
							</p>
							<br />
							<Badge class="bg-[#EF662A] hover:bg-[#E34E26] text-white">HTML/CSS/JS</Badge>
							<Badge class="bg-[#0C4C32] hover:bg-[#103E2E] text-white">Django</Badge>
							<Badge class="bg-[#3E9FDC] hover:bg-[#107FCE] text-white">SQLite</Badge>
						</div>
					</Card.Content>
				</Card.Root>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
