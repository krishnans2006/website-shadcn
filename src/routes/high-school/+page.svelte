<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
</script>

<svelte:head>
	<title>Krishnan Shankar - High School</title>
</svelte:head>

<div class="my-6">
	<h1 class="text-4xl font-bold text-center">My High School Experience</h1>
	<h4 class="text-lg text-center">I attended Thomas Jefferson High School for Science and
		Technology.</h4>
</div>

<div class="animate-fade-up delay-1000 mb-5">
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
		<Card.Content class="flex flex-col md:flex-row gap-4 items-center p-6">
			<div class="md:w-1/3 lg:w-1/4 xl:w-1/5">
				<img src="$lib/images/high-school/tjhsst.png" alt="TJHSST Logo"
						 class="object-fill size-full rounded-3xl" />
			</div>
			<div class="md:w-2/3 lg:w-3/4 xl:w-4/5">
				<h1 class="text-5xl font-bold">Academics</h1>
				<h3 class="text-2xl">As a student @ TJHSST</h3>
				<br />
				<div class="flex flex-col xl:flex-row">
					<div class="basis-1/2 flex-auto">
						<p>Relevant Classes:</p>
						<ul class="list-disc ml-6 leading-loose mb-1">
							<li>AP Computer Science A+ (Data Structures)</li>
							<li>Artificial Intelligence</li>
							<li>Machine Learning</li>
							<li>Robotics Systems and Microsystems</li>
							<li>Digital and Analog Electronics</li>
						</ul>
					</div>
					<div class="flex">
						<Separator orientation="vertical" class="ml-9 hidden xl:block" />
						<Separator orientation="horizontal" class="mt-4 block xl:hidden" />
					</div>
					<div class="mt-4 xl:mt-0 xl:ml-9 basis-1/2 flex-auto">
						Honors:
						<ul class="list-disc ml-6 leading-loose mb-1">
							<li>
								2x <strong>Gold President's Volunteer Service Award</strong> (100+ hours of volunteering in a year)
							</li>
							<li>
								Member of the National Honor Society
							</li>
							<li>
								National Merit Scholarship Finalist
							</li>
							<li>
								AP Scholar with Distinction
							</li>
						</ul>
					</div>
					<div class="flex">
						<Separator orientation="vertical" class="ml-9 hidden xl:block" />
						<Separator orientation="horizontal" class="mt-4 block xl:hidden" />
					</div>
					<div class="mt-4 xl:mt-0 xl:ml-9 basis-1/4 flex-none">
						Numbers:
						<ul class="list-disc ml-6 leading-loose mb-1">
							<li>
								Final GPA (weighted): <strong>4.484</strong>
							</li>
							<li>
								Test Scores:
								<ul class="list-disc ml-6 leading-loose">
									<li>
										PSAT: <strong>1500</strong>/1520
									</li>
									<li>
										SAT: <strong>1560</strong>/1600
									</li>
									<li>
										ACT: <strong>36</strong>/36
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>

<div class="animate-fade-up delay-1000 w-1/3">
	<Card.Root class="transition-transform delay-75 duration-300 ease-in-out hover:scale-105">
		<Card.Header>
			<Card.Title class="text-center">Lead Student Sysadmin</Card.Title>
			<Card.Description class="text-center">TJ Computer Systems Lab</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Hi</p>
		</Card.Content>
		<Card.Footer class="flex-auto flex-wrap gap-2 justify-center">

		</Card.Footer>
	</Card.Root>
</div>
