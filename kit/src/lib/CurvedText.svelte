<svg class={className} viewBox="0 0 {width} {height}">
	<path
		fill="transparent"
		{id}
		d="M 0 {height} Q {width / 2} {height * curvature} {width} {height}"
	/>
	<text>
		<textPath href="#{id}" text-anchor="middle" startOffset="50%">
			{text}
		</textPath>
	</text>
</svg>

<script lang="ts">
	const {
		id,
		text,
		width = 100,
		height = 100,
		curvature = 0.5,
		class: className = '',
	} = $$props as {
		text: string
		width: number
		height: number
		curvature: number
		class: string
	}
</script>
