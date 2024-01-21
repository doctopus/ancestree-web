import React from "react";
import { useMatches } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {personAction} from "../app/actions/personAction";
import {getPerson} from "../app/selectors/person.selector";

const Person = () => {
  const matches = useMatches();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = matches[0].params.id;
    dispatch(personAction(id));
    }, []);
const person = useSelector(getPerson);
  return (
    <table>
      <tr>
        <td>{person?.firstName}</td>
        <td>{person?.lastName}</td>
        <td>{person?.dob}</td>
        <td>{person?.gender}</td>
      </tr>
    </table>
  );
};
export { Person };
