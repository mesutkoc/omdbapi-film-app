import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContent } from '../../Redux/filmSlice';
import { getRating } from "../../helper";
import _ from 'lodash';
import './filmDetail.scss';

function FilmDetail() {
  const dispatch = useDispatch()
  const { i: imdbId } = useParams();
  const data = useSelector((state) => state?.films?.film);

  useEffect(() => {
    dispatch(getContent(imdbId))
  }, [imdbId]);


  return (
    <div className="detailPageRoot">
      {data?.Poster && < div className="detailImage"><img className="image" src={data?.Poster} alt="moviePoster"></img></div>}
      <div className="movieDetailInfo">
        <div>
          <table>
            <tbody>
              {_.times(Object.keys(data).length, (i) => (
                <tr key={i}>
                  <th>{Object.keys(data)[i]}</th>
                  <td>{typeof Object.values(data)[i] === 'string' ? Object.values(data)[i] : getRating(Object.values(data)[i])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div >
  );
}

export default FilmDetail;
