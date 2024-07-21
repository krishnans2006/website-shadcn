<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	import SidePopup from '../SidePopup.svelte';
</script>

<SidePopup project={{ title: "President", description: "TJ Unmanned Aerial Vehicle" }}>
	<svelte:fragment slot="small">
		<p>Led a team building a fixed-wing plane for an international college competition.</p>
	</svelte:fragment>
	<svelte:fragment slot="large">
		<p>
			As the President of TJ Unmanned Aerial Vehicle (TJ UAV), I led a team to design, build, and
			fly a 10ft-wingspan, 50lb fixed-wing plane for the SUAS Competition, an international college
			competition held in Maryland. Some of the competition requirements include:
		</p>
		<ul class="list-disc ml-6 leading-loose mt-2">
			<li>Fully autonomous flight</li>
			<li>Real-time image capture and transmission</li>
			<li>Object detection, localization, and classification</li>
			<li>Up to 5 precise payload drops</li>
		</ul>
		<p>
			Our team placed <strong>2nd in the world</strong> in the 2023 mission demonstration, beating
			colleges like UMich, UC Berkeley, Purdue, and IIT Bombay. Besides leading the team, I spent
			most of my time working on programming and communications systems (see below).
		</p>
		<div class="flex flex-col lg:flex-row gap-4 mt-4">
			<div class="animate-fade-up delay-1000 lg:basis-1/2">
				<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
					<Card.Header class="flex flex-row">
						<img src="$lib/images/projects/tjuav.jpeg" alt="TJ UAV Logo"
								 class="object-fill size-12 rounded-xl mr-3" />
						<div class="w-4/5">
							<Card.Title>Built the TJ UAV GroundStation</Card.Title>
							<Card.Description>A fast and reliable ArduPilot GCS</Card.Description>
						</div>
					</Card.Header>
					<Card.Content>
						<p>
							Although the ArduPilot-built Mission Planner GCS is powerful, it was quite limiting
							for our needs. Performance issues resulted in frame rates as low as 0.2 FPS, and
							getting it to run on our preferred operating system (Linux) left us with nothing but
							a buggy mess.
						</p>
						<br />
						<p>
							So, I built the TJ UAV GroundStation, a lightweight, fast, and cross-platform
							implementation of a GCS. It interfaces directly with MAVLink messages from telemetry
							radios, providing almost all of Mission Planner's features. Additionally, I was able
							to integrate camera and drop payload controls directly into the GroundStation, making
							it a lot simpler on flight day.
						</p>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="animate-fade-up delay-1000 lg:basis-1/2">
				<Card.Root class="transition-transform delay-75 duration-300 ease-in-out">
					<Card.Header class="flex flex-row">
						<img src="$lib/images/projects/tjuav.jpeg" alt="Ceph Logo"
								 class="object-fill size-12 rounded-xl mr-3" />
						<div class="w-4/5">
							<Card.Title>Designed a Communications System</Card.Title>
							<Card.Description>Using 3 different frequencies for the best results</Card.Description>
						</div>
					</Card.Header>
					<Card.Content>
						<p>
							To meet the competition requirements, the plane needed 3 different channels of
							reliable communication. First, telemetry data needed to be streamed to our custom
							GroundStation in real-time. Second, manual control inputs needed to be sent to the
							plane for takeoffs, landings, and emergencies. Finally, image data needed to be sent
							through a high bandwidth link for object detection and localization.
						</p>
						<br />
						<p>
							To solve this problem, I designed a clever communications system using 900MHz,
							2.4GHz, and 5GHz radios. I set up an RFD900x radio for telemetry, a 2.4GHz
							transmitter and double-receiver for manual control, and a 5GHz WiFi link for image
							transfer, optimizing each link for its specific use case.
						</p>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</svelte:fragment>
</SidePopup>
