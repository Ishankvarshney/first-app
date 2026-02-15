// import Link from "next/link";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <h1>Blog Page</h1>
//       <p>This is the blog page of the Next.js application.</p>
//       <p>
//         <Link href="/blog/post-1">Post-1</Link>
//       </p>
//       <p>
//         <Link href="/blog/post-2">Post-2</Link>
//       </p>
//     </div>
//   );
// };

// export default page;

import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>This is the blog page of the Next.js application.</p>
      <p>
        <Link href="/blog/post-1">Post-1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post-2</Link>
      </p>
    </div>
  );
}
