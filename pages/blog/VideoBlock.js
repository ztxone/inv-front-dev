import Video from "@/components/Projects/Video";
import { VideoPlayer } from "@/components/Projects/VideoPlayer";
import ReactMarkdown from "react-markdown";

export default function VideoBlock({ blog, video, poster }) {
  return (
    <div>
      <Video poster={poster} videofile={video} />
      <div className="container pt-3">
        <ReactMarkdown>{blog.attributes.Text3}</ReactMarkdown>
      </div>
    </div>
  );
}
