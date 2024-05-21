import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const { id } = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {id} {qs.get("page")}
      </h1>
      <Outlet />
    </div>
  );
}