import { useHistory, useLocation, useParams } from 'react-router-dom';

export const HomeUseHistory = () => {
  const { slug, id } = useParams();
  const location = useLocation;
  const history = useHistory();

  return (
    <div>
      <h1>
        OI {slug} {id}
      </h1>
    </div>
  );
};
