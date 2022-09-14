<script>
    import { createEventDispatcher } from "svelte"
    export let id;
    export let name;
    export let profilePictureURL;
    export let designation;
    export let status;

    const dispatch = createEventDispatcher();
</script>

<style>
	.card-img-top {
		height: 300px;
		object-fit: cover;
	}
</style>

<div class="col-md-4">
    <div class="card mt-4">
        <img 
            class="card-img-top" 
            src={profilePictureURL} 
            alt={name}>
        <div class="card-body">
            <h5 class="card-title">
                {name}
            </h5>
            <p class="card-text">
                <b>Designation: </b>{designation}
            </p>
            <p class="card-text">
                <b>Status: </b>
                <span class={`badge ${status === "Active" ? "badge-primary" : "badge-warning"}`}>
                    {status}
                </span>
            </p>
        </div>
        <div class="card-footer">
            <button 
                type="button" 
                class="btn btn-secondary"
                on:click={() => dispatch("delete-user", id)}>
                Delete User
            </button>
        </div>
    </div> 
</div>