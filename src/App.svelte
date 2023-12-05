<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList  />

	<p>Built with Svelte in 2023 ⭐</p>
</main>

<style>
	p {
		text-align: center;
		margin-top: 100px;
	}
</style>