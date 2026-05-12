import { useState, useEffect } from 'react';

// ============================================================
// CONCEPT 1: Components ✓
// CONCEPT 2: Props ✓
// ============================================================

// CHALLENGE 1 + 2 SOLUTION:
function UserCard({ name, title }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

// App for challenge 1 + 2:
export default function App() {
  return (
    <>
      <UserCard name="Apple" title="Bee" />
      <UserCard name="Carol" title="Dog" />
    </>
  );
}

// ============================================================
// CONCEPT 3: State (useState) ✓
// ============================================================

// CHALLENGE 3 SOLUTION:
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Plus One</button>
    </>
  );
}

// ============================================================
// CONCEPT 4: Fetching Data (useEffect + fetch) ✓
// ============================================================

// CHALLENGE 4 SOLUTION:
export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// ============================================================
// CONCEPT 5: Event Handling
// onChange fires every time an input changes.
// e is the event object, e.target.value is the current input value.
// onClick fires when a button is clicked.
// ============================================================

// CHALLENGE 5 SOLUTION:
export default function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

// ============================================================
// MINI PROJECT: Post Browser
// Fetch posts from JSONPlaceholder and display them.
// Requirements:
//   1. Fetch 5 posts on load and display each as a PostCard component
//   2. PostCard shows the post title and body
//   3. A "Load More" button that fetches 5 more posts each time
//   4. A search input that filters displayed posts by title in real time
// ============================================================

// MINI PROJECT SOLUTION:

function PostCard({ title, body }){
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default function App() {
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(5);
  const [query, setQuery] = useState('');

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_start=' + (postCount - 5))
      .then(res => res.json())
      .then(data => setPosts([...posts, ...data]))
  }, [postCount])

  return (
    <div>
      <button onClick={ () => { setPostCount(postCount + 5); } }>Load More</button>
      <input onChange={ (e) => setQuery(e.target.value) } placeholder="Search by title" />
      {posts.filter(post => post.title.includes(query))
        .map(post => (
        <PostCard key = {post.id} title = {post.title} body = {post.body} />
      ))}
    </div>
  )
}
