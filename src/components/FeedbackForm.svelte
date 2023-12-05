<script>
  import {v4 as uuidv4} from 'uuid';
  import Card from "./Card.svelte";
  import {createEventDispatcher} from 'svelte';
  import Button from "./Button.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  const dispatch = createEventDispatcher();

  let btnDisabled = false;
  let text = "";
  let min = 10;
  let message = "";
  let rating = 10;

  const handleSelect = e => rating = e.detail;

  const handleInput = () => {
    if(text.trim().length <= min){
      message = `Text must be atleast ${min} characters`
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  }

  const handleSubmit = () => {
    if(text.trim().length > min){
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating
      }

      dispatch('add-feedback', newFeedback);
      text = '';
    }
  }

</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  
  <RatingSelect on:rating-select={handleSelect} />
  <form on:submit|preventDefault={handleSubmit} >
    <!-- Rating Select -->
    
    <div class="input-group">
      <input on:input={handleInput} type="text" bind:value={text} placeholder="Tell us something that keeps you coming back.."> 
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>

    {#if message}
    <div class="message">
      {message}
    </div>
    {/if}
  </form>
</Card> 

<style>


  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    padding: 8px 10px; 
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    padding: 10px 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  input:focus {
    outline: none;
  }

  .message{
    text-align: center;
    font-size: 12px;
    color: red;
  }
</style>