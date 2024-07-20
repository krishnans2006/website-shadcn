<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
  import * as Sheet from "$lib/components/ui/sheet";

	import { ArrowDownToLine, MoveLeft, MoveRight } from 'lucide-svelte';
	import SideProject from '../../components/SideProject.svelte';
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
				<div class="pt-3 flex flex-col gap-2 md:flex-row flex-wrap">
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
	<SideProject project={{ title: "Lead Sysadmin", description: "TJ Computer Systems Lab" }}>
		<svelte:fragment slot="small">
			<p>Managed a team of 5 students to maintain and improve the lab's infrastructure.</p>
		</svelte:fragment>
		<svelte:fragment slot="large">
			<div class="flex flex-col md:flex-row gap-4">
				<div class="animate-fade-up delay-1000 md:basis-1/2">
					<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
						<Card.Header class="flex flex-row">
							<img src="$lib/images/projects/turnin.png" alt="Turn-In Logo"
									 class="object-fill size-12 rounded-xl mr-3" />
							<div class="w-4/5">
								<Card.Title>Developed Turn-In</Card.Title>
								<Card.Description>A fast and secure code autograder</Card.Description>
							</div>
						</Card.Header>
						<Card.Content>
							<p>
								Turn-In is a fast and secure code autograder for TJ's computer science classes.
								Previously, teachers had to manually run and grade student code, which was both
								time-consuming and unsafe (the easiest form of remote code execution!).
							</p>
							<br />
							<p>
								Turn-In solves this problem by using teacher-provided grader scripts to
								automatically grade student code, providing students with instant feedback for
								improvement while letting teachers focus on teaching.
							</p>
							<br />
							<p>
								Currently, Turn-In is used by every CS class at TJ (classes like APCS, AI, and ML),
								with over <strong>200,000 graded student submissions</strong> in just the 2023-2024
								school year.
							</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="animate-fade-up delay-1000 md:basis-1/2">
					<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
						<Card.Header class="flex flex-row">
							<img src="$lib/images/badges/ceph.png" alt="Ceph Logo"
									 class="object-fill size-12 rounded-xl mr-3" />
							<div class="w-4/5">
								<Card.Title>Configured Ceph</Card.Title>
								<Card.Description>A high-availability, triple-replicated storage cluster</Card.Description>
							</div>
						</Card.Header>
						<Card.Content>
							<p>
								As a vital part of the TJ community, the TJ Computer Systems Lab (TJ CSL) needs to
								store a lot of data reliably and efficiently. For example, we store PII (personal
								identifiable information) for students (who are minors), <strong>legal records like
								attendance reports and student grades</strong> (see Turn-In), and much more. This
								requires a secure and reliable storage solution.
							</p>
							<br />
							<p>
								Over the span of a couple years, I configured Ceph, an industry-standard
								distributed storage system that fit the lab's needs perfectly. Our Ceph cluster is
								currently spread out across 5 hosts (three physical servers and two VMs), giving us
								a reliable, triple-replicated storage solution. Data is now protected from power
								outages, hardware failures, and even server or server rack failures.
							</p>
							<br />
							<p>
								<strong>Ceph now handles over 55 TB of data</strong>, ranging from VM disks to
								S3-compatible logs to an entire network filesystem. Besides powering crucial
								TJ CSL applications, Ceph's filesystem is used by hundreds of students and
								teachers to conduct research, build large ML models, and even work on personal
								projects using the lab's resources.
							</p>
						</Card.Content>
					</Card.Root>
				</div>
			</div>
		</svelte:fragment>
	</SideProject>
</div>
