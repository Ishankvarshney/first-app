// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <h1>Single Blog Page</h1>
//     </div>
//   )
// }

// export default page

export default async function SingleBlogPage({ params }) {
    const { slug } = await params;

  return (
    <div>
      <h1>Single Blog Page</h1>
      <p>{slug}</p>
    </div>
  );
}
