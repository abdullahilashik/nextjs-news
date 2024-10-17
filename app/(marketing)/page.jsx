import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <h1>Next.js Routing & Page Rendering</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        impedit labore at ipsum quae culpa cum vitae maxime nisi, veniam id
        perspiciatis commodi sunt natus modi facilis eaque voluptate quasi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa
        nostrum maiores, perferendis fugiat ex dolore excepturi enim error? Fuga
        consequatur quasi eos voluptas, doloribus non! Eius dolore enim
        molestiae.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quasi.
        Incidunt rem in soluta. Dolorum nostrum quasi asperiores veniam quae ex
        deleniti neque, incidunt fuga similique assumenda aperiam. Ducimus,
        ullam.
      </p>
      <Link href={'/news'}>Go to News</Link>
    </div>
  );
}
