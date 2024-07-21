<script>
	import LargeProject from '../project-layouts/LargeProject.svelte';

	import Flask from '../language-badges/Flask.svelte';
	import React from '../language-badges/React.svelte';

	import image from '$lib/images/projects/tjuav.jpeg';
</script>

<LargeProject>
	<svelte:fragment slot="image">
		<img src={image} alt="TJUAV Logo" class="object-fill size-full rounded-3xl" />
	</svelte:fragment>
	<svelte:fragment slot="text">
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
	</svelte:fragment>
</LargeProject>
