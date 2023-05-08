import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>welcome to my website</h1>
      <ul>
        <li><Link href='/'>home</Link></li>
        <li><Link href='/about'>about</Link></li>
        <li><Link href='/about/team'>my team</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
