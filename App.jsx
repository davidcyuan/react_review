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
