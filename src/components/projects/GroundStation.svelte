<script>
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';

	import Flask from '../badges/Flask.svelte';
	import React from '../badges/React.svelte';
</script>

<Card.Root class="p-3">
	<Card.Content class="flex flex-row gap-4 items-center p-6">
		<div class="w-1/3">
			<img src="https://avatars.githubusercontent.com/u/47068591?s=1200" alt="TJUAV Logo"
					 class="object-fill size-full rounded-3xl" />
		</div>
		<div class="w-2/3">
			<h1 class="text-5xl font-bold">TJUAV GroundStation</h1>
			<h3 class="text-2xl">An Open-Source, Performance-Driven Implementation of
				Ardupilot</h3>
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
			<React />
			<Flask />
		</div>
	</Card.Content>
</Card.Root>
