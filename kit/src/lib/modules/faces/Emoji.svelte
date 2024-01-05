<button
	class="transition-[opacity,transform] hover:opacity-100 hover:scale-125"
	class:opacity-50={$emoji && $emoji !== e}
	on:click={onclick}
>
	{e}
</button>

<script lang="ts">
	import { emoji } from './store'

	const { emoji: e } = $$props as {
		emoji: string
	}

	function onclick() {
		if ($emoji === e) {
			$emoji = undefined
		} else {
			$emoji = e
		}
	}
</script>
