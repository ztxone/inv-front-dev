import { useRouter } from "next/router";

export default function Tag({ variant = "white", text, href = "" }) {
  const router = useRouter();
  const cancelPropagation = (e) => {
    e.preventDefault();
    router.push(`/portfolio/${href}`);
  };
  return (
    <div onClick={cancelPropagation}>
      {text && (
        <span
          className={`bg-${variant}  w-fit rounded-full px-1.5 py-[7px] inline-flex items-center relative z-3 uppercase`}
        >
          <span
            className={`text-l bold pr-1 text-${
              variant === "white" ? "blue" : "white"
            }`}
          >
            {"# "}
          </span>
          <p
            className={`text-xxs tag-text text-${
              variant === "white" ? "black" : "white"
            }`}
          >
            {" "}
            {text}
          </p>
        </span>
      )}
    </div>
  );
}
