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
			HackTJ is the east coast's largest high school hackathon, with over 400 participants building
			fully-functional websites and apps in just 24 hours. Besides managing HackTJ's website
			(written in Svelte), my main project as the Technical Lead is singlehandedly building the
			HackTJ Portal, from scratch (see below).
		</p>
		<div class="flex flex-col lg:flex-row gap-4 mt-4">
			<div class="animate-fade-up delay-1000 w-full">
				<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
					<Card.Header class="flex flex-row">
						<img src="$lib/images/projects/hacktj_light.png" alt="Turn-In Logo"
								 class="object-fill size-12 rounded-xl mr-3 block dark:hidden" />
						<img src="$lib/images/projects/hacktj_dark.png" alt="Turn-In Logo"
								 class="object-fill size-12 rounded-xl mr-3 hidden dark:block" />
						<div class="w-4/5">
							<Card.Title>Built the HackTJ Portal</Card.Title>
							<Card.Description>A privacy-focused, FERPA-compliant hackathon solution</Card.Description>
						</div>
					</Card.Header>
					<Card.Content>
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
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</svelte:fragment>
</SidePopup>
