<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
  import * as Sheet from "$lib/components/ui/sheet";

	import { ArrowDownToLine, MoveLeft, MoveRight } from 'lucide-svelte';
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
		<Card.Content class="flex flex-col md:flex-row gap-4 items-start xl:items-center p-6">
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
								2x <strong>Gold President's Volunteer Service Award</strong> (100+ hours of
								volunteering in a year)
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
				<div class="pt-3 flex flex-col gap-2 md:flex-row">
					<Button href="$lib/files/High_School_Transcript.pdf" target="_blank"
									rel="noopener noreferrer">
						<ArrowDownToLine class="size-4 mr-2" />
						Transcript
					</Button>
					<Button variant="secondary" href="$lib/files/AP_Score_Report.pdf" target="_blank"
									rel="noopener noreferrer">
						<ArrowDownToLine class="size-4 mr-2" />
						AP Score Report
					</Button>
					<Button variant="secondary" href="$lib/files/PSAT_NMSQT_Score_Report.pdf" target="_blank"
									rel="noopener noreferrer">
						<ArrowDownToLine class="size-4 mr-2" />
						PSAT/NMSQT Score Report
					</Button>
					<Button variant="secondary" href="$lib/files/SAT_Score_Report.pdf" target="_blank"
									rel="noopener noreferrer">
						<ArrowDownToLine class="size-4 mr-2" />
						SAT Score Report
					</Button>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>

<div class="flex flex-col md:flex-row">
	<div class="animate-fade-up delay-1000 basis-1/3">
		<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
			<Card.Header>
				<Card.Title class="text-center text-2xl">Lead Student Sysadmin</Card.Title>
				<Card.Description class="text-center text-md">TJ Computer Systems Lab</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Info</p>
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
</div>
