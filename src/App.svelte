<script>
	import Sidebar from './components/sidebar/sidebarComponent.svelte';
	import {Button, Col, Container, Modal, Row} from 'sveltestrap';
	export let name;
	let count = 0;
	let openPass = false;
	function handleClick(){
		count += 1;
	}
</script>

<Container fluid class="p-0 m-0">
	<Row class="p-0 m-0">
		<Col sm={12} class="p-0 m-0">
			<img src="./images/sgheader.svg" alt="Logo">
		</Col>
	</Row>
</Container>

<main>
	<Button on:click={handleClick}>Hola {count}</Button>
	<h1>Hola {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<Modal isOpen={openPass}>

</Modal>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>