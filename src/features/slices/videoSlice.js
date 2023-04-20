import { createSlice } from "@reduxjs/toolkit";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    duration: "00:32",
    likes: 14,
    hashTagName: "travel",
    hashTagSecondName: "explore",
    description: "Exploring the beautiful city of New Zealand!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: true,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    song: "mast mast yaa hoo mast",
    comments: [],
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1555074237-615ee24de7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    duration: "01:00",
    likes: 50,
    hashTagName: "food",
    hashTagSecondName: "cooking",
    description: "Cooking up a storm in the kitchen!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: true,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [],
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1604200657090-ae45994b2451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcmtldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    duration: "00:45",
    likes: 100,
    hashTagName: "travel",
    hashTagSecondName: "explore",
    description: "Exploring the beautiful landscapes of New Zealand!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: false,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [],
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcmtldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    duration: "03:44",
    likes: 50,
    hashTagName: "food",
    hashTagSecondName: "cooking",
    description: "Cooking up a storm in the kitchen!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: true,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [
      {
        photoUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Tom Smith",
        date: "2022-05-03",
        time: "1:30 PM",
        comment: "Looks fine",
      },
      {
        photoUrl:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Alice Jones",
        date: "2022-05-04",
        time: "2:00 PM",
        comment: "I love your  videos!",
      },
    ],
  },
  {
    id: 5,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1674823158933-cd0b48eadf19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    duration: "01:56",
    likes: 50,
    hashTagName: "food",
    hashTagSecondName: "cooking",
    description: "Cooking up a storm in the kitchen!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: true,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [
      {
        photoUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Tom Smith",
        date: "2022-05-03",
        time: "1:30 PM",
        comment: "Looks delicious! ",
      },
      {
        photoUrl:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Alice Jones",
        date: "2022-05-04",
        time: "2:00 PM",
        comment: "I love your videos! ",
      },
    ],
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    duration: "02:00",
    likes: 50,
    hashTagName: "food",
    hashTagSecondName: "cooking",
    description: "Cooking up a storm in the kitchen!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: true,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [],
  },
  {
    id: 7,
    thumbnail:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    duration: "04:05",
    likes: 50,
    hashTagName: "food",
    hashTagSecondName: "cooking",
    description: "Cooking up a storm in the kitchen!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: false,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [
      {
        photoUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Tom Smith",
        date: "2022-05-03",
        time: "1:30 PM",
        comment: "Looks delicious! Can you share the recipe?",
      },
      {
        photoUrl:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Alice Jones",
        date: "2022-05-04",
        time: "2:00 PM",
        comment: "I love your cooking videos! Keep them coming!",
      },
    ],
  },
  {
    id: 8,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    duration: "00:34",
    likes: 50,
    hashTagName: "food",
    hashTagSecondName: "cooking",
    description: "Cooking up a storm in the kitchen!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: true,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [],
  },
  {
    id: 9,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1676637656210-390da73f4951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    duration: "01:00",
    likes: 50,
    hashTagName: "food",
    hashTagSecondName: "cooking",
    description: "Cooking up a storm in the kitchen!",
    userName: "John Belmond",
    userPhoto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    views: "1.2k",
    following: false,
    musicHeader: "#Navio-navi",
    musicNickName: "#pichpek",
    musicDescription:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    song: "mast mast yaa hoo mast",
    comments: [
      {
        photoUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Tom Smith",
        date: "2022-05-03",
        time: "1:30 PM",
        comment: "fantastic..",
      },
      {
        photoUrl:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Alice Jones",
        date: "2022-05-04",
        time: "2:00 PM",
        comment: "Keep them coming!",
      },
    ],
  },
  // Add more videos here...
];

export const videoSlice = createSlice({
  name: "videos",
  initialState: {
    data: [...videosData],
    currentReel: null,
  },
  reducers: {
    updateCurrentReel(state, action) {
      state.currentReel = action.payload;
    },
  },
});

export const { updateCurrentReel } = videoSlice.actions;
export default videoSlice.reducer;
