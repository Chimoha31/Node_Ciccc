const express = require("express");
const PORT = 5000;
const app = express();

app.use(express.json());

let posts = [
  {
    id: Math.random(),
    title: "Latest Technologies",
    author: "Prabh",
    timeRequired: "2 minutes",
    description: "This is a cool post about technologies",
  },
  {
    id: Math.random(),
    title: "Life is tough in Vancouver",
    author: "Prabh",
    timeRequired: "4 minutes",
    description: "You have to hustle to survive here!",
  },
];

app.get("/", (request, response) => {
  response.send("Hellooooo!");
});

// GET API
app.get("/api/v1/posts", (request, response) => {
  // 200 --> Succesfull response
  return response.status(200).json({
    message: "Succesfully fetched the data",
    data: posts,
  });
});

// GET API BY ID
app.get("/api/v1/posts/:id", (request, response) => {
  const id = request.params.id;

  const foundItem = posts.find((item) => {
    if (item.id == id) {
      return true;
    }
  });

  if (!foundItem) {
    // 404 --> Resource Not Found
    return response.status(404).json({
      message: "Post not found!",
      data: {},
    });
  }

  return response.status(200).json({
    message: "Post succesfully found!",
    data: foundItem,
  });
});

// POST API
app.post("/api/v1/posts", (request, response) => {
  const incomingData = request.body;

  if (
    !incomingData.title ||
    !incomingData.author ||
    !incomingData.timeRequired ||
    !incomingData.description
  ) {
    return response.status(500).json({
      message: "One of the information is missing!",
    });
  }
  posts.push({ ...incomingData, id: Math.random() });

  return response.status(201).json({
    message: "Succesfully created a post!",
    data: incomingData,
  });
});

// PUT API
app.put("/api/v1/posts/:id", (req, res) => {
  const incomingData = req.body;
  const id = req.params.id;

  let updatedPosts = posts.map((post) => {
    if(post.id == id) {
      post = incomingData
    }
    return post
  })
  return res.status(200).json({
    message: "Successfully updated a post!!",
    data: updatedPosts,
  })
})

// Delete API
app.delete("/api/v1/posts/:id", (req, res) => {
  const id = req.params.id;
  posts.map((post) => {
    if(post.id == id) {
      
    }
  })
})




app.listen(PORT, () => {
  console.log("Teddy is running 🐶")
})