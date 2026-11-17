import { useEffect, useState } from "react";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export default function APIGETExample() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const response = await fetch(POSTS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Unable to load posts.");
          console.error("Error fetching posts:", fetchError);
        }
      }
    }

    fetchPosts();

    return () => controller.abort();
  }, []);

  if (error) {
    return <p role="alert">Unable to load posts: {error}</p>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
