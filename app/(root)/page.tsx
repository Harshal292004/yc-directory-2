import SearchForm from "@/components/SearchForm";
import StartDownCard from "@/components/StartDownCard";
import StartDownCardType from "@/types/StartDownCardType";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const posts: StartDownCardType[] = [
    {
      _createdAt: new Date(),
      views: 55,
      _id: 1,
      author: { 
        _id:1,
        image:"https://imgs.search.brave.com/2eEPgsibQk9SYDJ2dhV1Sg4flscz1O_7vSeDDrBvcm8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1qdXN0LW1hZGUt/dGhpcy1jaGFyYWN0/ZXItaGlzLXdob2xl/LWlkZWEtaXMtdGhh/dC1oZXMtYS12MC1x/bGEzeWR0NzI5b2Qx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9ODk2NjExZmYy/ZDI4ZTkxOTk0NzU2/NzA1NjBkNzU0YTdi/MzFlNDM1OA",
        name:"Harshal",
        userName:"Harshal292004"
      },
      description: "This is a desc",
      image:"https://imgs.search.brave.com/XAOhcg01oI5z3i4jFbURn-coLKYuMzxKa6S61bkMVPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaWdp/dGFsYXNzZXRzLnRl/c2xhLmNvbS90ZXNs/YS1jb250ZW50cy9p/bWFnZS91cGxvYWQv/Zl9hdXRvLHFfYXV0/by9XZS1Sb2JvdC1D/YXJvdXNlbC1TbGlk/ZS0xLVJvYm90YXhp/LURlc2t0b3AucG5n",
      category: "Robots",
      title: "We robots"
    }
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your StartDown,<br /> Connect with losers like you</h1>
        <p className="sub-heading max-w-3xl">
          Submit Garbage, Shout on Pitches, and Get Ignored in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartDownCardType, index: number) => (
              <StartDownCard key={index} post={post} /> // Pass the entire post object here
            ))
          ) : (
            <p className="no-results">No start downs found</p>
          )}
        </ul>
      </section>
    </>
  );
}
