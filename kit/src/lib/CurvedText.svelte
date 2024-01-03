<svg class={className} viewBox="0 0 {width} {height}">
	<path
		fill="transparent"
		id="curve"
		d="M 0 {height} Q {width / 2} {height * 0.5} {width} {height}"
	/>
	<text>
		<textPath href="#curve" text-anchor="middle" startOffset="50%">
			{text}
		</textPath>
	</text>
</svg>

<script lang="ts">
	const {
		text,
		width = 100,
		height = 100,
		class: className = '',
	} = $$props as {
		text: string
		width: number
		height: number
		class: string
	}
</script>
