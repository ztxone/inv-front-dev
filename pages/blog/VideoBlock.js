import Video from "@/components/Projects/Video";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function VideoBlock({ blog, video, poster }) {
  return (
    <div className="pt-[52px]">
      <Video poster={poster} videofile={video} />
      <div className="container py-13">
        <ReactMarkdown className="markDown">
          {blog.attributes.Text3}
        </ReactMarkdown>
        <div className="pt-12">
          <Link className="text-blue underline" href="#">
            Ссылка на источник{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
