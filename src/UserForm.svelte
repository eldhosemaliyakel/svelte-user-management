<script>
    import { createEventDispatcher } from "svelte"
    
    let name = "";
	let designation = "";
	let status = "Active";
	let profilePictureURL = "";

    const dispatch = createEventDispatcher();
</script>

<form class="mt-4 col-md-6 offset-md-3" on:submit|preventDefault={() => dispatch("user-added", {name, designation, status, profilePictureURL})}>
    <div class="form-group">
        <label for="user-name-input-id">User Name</label>
        <input type="text" class="form-control" id="user-name-input-id" placeholder="Full name" bind:value={name}>
    </div>
    <div class="form-group">
        <label for="profile-picture-input-id">Profile Picture</label>
        <input type="text" class="form-control" id="profile-picture-input-id" placeholder="Profile Picture URL" bind:value={profilePictureURL}>
    </div>
    <div class="form-group">
        <label for="designation-input-id">Designation</label>
        <input type="text" class="form-control" id="designation-input-id" placeholder="Designation" bind:value={designation}>
    </div>
    <div class="form-group">
        <label for="status-select-id">Employment Status</label>
        <select class="form-control" id="status-select-id"  bind:value={status}>
        <option>Active</option>
        <option>Resigned</option>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>