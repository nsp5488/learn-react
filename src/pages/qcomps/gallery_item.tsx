import { GalleryProps } from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";

function ListItem({ label, content }: ListItemProps) {
  return (
    <li>
      <b>{label}</b>
      {content}
    </li>
  );
}

export default function GalleryItem(props: GalleryProps) {
  const { scientist, size = 100 } = props;
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={scientist.imageId}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <ListItem label={"Profession: "} content={scientist.profession} />
        <ListItem
          label={"Awards: "}
          content={scientist.awards.split(",").length}
        />
        <ListItem label={"Discovered: "} content={scientist.discovery} />
      </ul>
    </section>
  );
}
