import { writable } from "svelte/store";

const usersStore = writable([
    {
        id: 1,
        name: "Caroline Christine",
        profilePictureURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D0",
        designation: "Business Analyst",
        status: "Active"
    },
    {
        id: 2,
        name: "John Doe",
        profilePictureURL: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        designation: "Project Manager",
        status: "Active"
    },
    {
        id: 3,
        name: "Philip James",
        profilePictureURL: "https://media.istockphoto.com/photos/portrait-of-asian-chinese-businessman-picture-id614315942?b=1&k=20&m=614315942&s=170667a&w=0&h=_uuXJ1RP183w5h6Rqqs1EEph04uMnVsZyLscyRVT4fc=",
        designation: "Full Stack Developer",
        status: "Resigned"
    }
]);

export default usersStore;