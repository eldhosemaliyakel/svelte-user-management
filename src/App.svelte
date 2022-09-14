<script>
	import { onDestroy } from "svelte";
	import usersStore from "./userStore";
	import UserCard from "./UserCard.svelte";
	import UserForm from "./UserForm.svelte";
	
	let users = [];

	const unsubscribeUsersStore = usersStore.subscribe(usersFromStore => {
		users = usersFromStore
	});

	onDestroy(() => {
		if(unsubscribeUsersStore) unsubscribeUsersStore();
	})

	const deleteUser = userId => users = users.filter(user => user.id !== userId);
	
	const addUser = user => {
		usersStore.update(curentUsers => {
			return [
				...curentUsers,
				{
					...user,
					id: users[users.length - 1] + 1
				}
			]
		});
		// users = [
		// 	...users, 
		// 	{
		// 		...user,
		// 		id: users[users.length - 1] + 1
		// 	}
		// ];
	}
</script>

<div class="container">
	<div class="row">
		<UserForm
			on:user-added={(event) => addUser(event.detail)}/>
	</div>
	<div class="row">
		{#each users as user (user.id)}
			<UserCard 
				id={user.id}
				name={user.name}
				designation={user.designation}
				profilePictureURL={user.profilePictureURL}
				status={user.status}
				on:delete-user={(event) => deleteUser(event.detail)}/>
		{/each}
	</div>
</div>