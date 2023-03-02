// if this is getting hydrated from an endpoint, this would need to be a async component:
// export default async function Project() {...}

interface ProjectProps {
  params: {
    id: string;
  };
}

export default function Project({ params: { id } }: ProjectProps) {
  return <p>This is a project {id}</p>;
}
