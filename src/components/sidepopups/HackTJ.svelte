<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	import SidePopup from '../SidePopup.svelte';
</script>

<SidePopup project={{ title: "Technical Lead", description: "HackTJ" }}>
	<svelte:fragment slot="small">
		<p>
			Managed technical operations for the largest high school hackathon on the east coast. Built
			a custom FERPA-compliant project submission and judging platform.
		</p>
	</svelte:fragment>
	<svelte:fragment slot="large">
		<p>
			As a Lead Sysadmin, I managed apps and services used by almost every student and teacher in
			the school. This includes a school-wide intranet, a code autograder for CS classes,
			self-hosted	mailservers for the @tjhsst.edu domain, free static and dynamic website hosting,
			10 signage TVs around the school, over 60 desktop workstations, a 50-node compute/GPU
			cluster, and much more.	Some of my largest projects as a sysadmin are below.
		</p>
		<div class="flex flex-col lg:flex-row gap-4 mt-4">
			<div class="animate-fade-up delay-1000 lg:basis-1/2">
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
							Currently, Turn-In is used by every CS class at TJ, with over <strong>200,000 graded
							student submissions</strong> in just the 2023-2024 school year. Some notable classes
							at TJ that rely heavily on Turn-In include AP Computer Science A+ (APCS), Artificial
							Intelligence (AI), and Computer Vision (CV).
						</p>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="animate-fade-up delay-1000 lg:basis-1/2">
				<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
					<Card.Header class="flex flex-row">
						<img src="$lib/images/badges/ceph.png" alt="Ceph Logo"
								 class="object-fill size-12 rounded-xl mr-3" />
						<div class="w-4/5">
							<Card.Title>Configured Ceph</Card.Title>
							<Card.Description>A high-availability, triple-replicated storage cluster
							</Card.Description>
						</div>
					</Card.Header>
					<Card.Content>
						<p>
							As a vital part of the TJ community, the TJ Computer Systems Lab (TJ CSL) needs to
							store a lot of data reliably. For example, we store PII (personal identifiable
							information) for students, <strong>legal records like attendance reports and
							student grades</strong> (see Turn-In), and much more. This requires a secure and
							reliable storage solution like Ceph, the industry standard.
						</p>
						<br />
						<p>
							After carefully configuring and migrating data to Ceph, it now <strong>stores over 55
							TB of data</strong> ranging from VM disks to S3-compatible logs to a network
							filesystem. Along with powering crucial TJ CSL applications, Ceph's filesystem is
							used by hundreds of students and teachers to conduct research, build large ML models,
							and even work on personal projects using the lab's compute/GPU resources.
						</p>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</svelte:fragment>
</SidePopup>
