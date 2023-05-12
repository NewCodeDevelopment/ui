import dynamic from "next/dynamic";
import { Heading, Section, ToolCard } from "..";

export function ToolGrid() {
  return (
    <Section bg="dark" align="center">
      <div className="flex w-full flex-col gap-6 self-center lg:max-w-xl lg:gap-10 2xl:max-w-4xl">
        <Heading type="h3" color="red">
          Tools_
        </Heading>

        <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4">
          {[
            {
              icon: dynamic(() => import("@/icons/tools/NestIcon").then((mod) => mod.NestIcon)),
              title: "Nest.js",
            },
            {
              icon: dynamic(() => import("@/icons/tools/DockerIcon").then((mod) => mod.DockerIcon)),
              title: "Docker",
            },
            {
              icon: dynamic(() =>
                import("@/icons/tools/GraphQLIcon").then((mod) => mod.GraphQLIcon),
              ),
              title: "GraphQL",
            },
            {
              icon: dynamic(() => import("@/icons/tools/NodeIcon").then((mod) => mod.NodeIcon)),
              title: "Node.js",
            },
            {
              icon: dynamic(() =>
                import("@/icons/tools/PostgresIcon").then((mod) => mod.PostgresIcon),
              ),
              title: "PostgreSQL",
            },
            {
              icon: dynamic(() => import("@/icons/tools/ReactIcon").then((mod) => mod.ReactIcon)),
              title: "React",
            },
            {
              icon: dynamic(() => import("@/icons/tools/NextIcon").then((mod) => mod.NextIcon)),
              title: "Next.js",
            },
            {
              icon: dynamic(() =>
                import("@/icons/tools/TailwindLogo").then((mod) => mod.TailwindLogo),
              ),
              title: "TailwindCSS",
            },
          ].map((icon, index) => (
            <ToolCard key={index} index={index} {...icon} />
          ))}
        </div>
      </div>
    </Section>
  );
}
