import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { uuid } from "uuidv4";
import ListItem from "./ListItem";
import { getItems, addItem, updateItem } from "../actions/crudActions";
import Header from "./Header";
import Create from "./Create";
import { Jumbotron, Container } from "react-bootstrap";
import Update from "./Update";
import Spinner from "../utils/loader/Spinner";
toast.configure({
  autoClose: 8000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT
});
function Home() {
  const [state, setState] = useState({
    title: "",
    description: "",
    loading: false
  });
  const [popupStatus, setpopupStatus] = useState(false);
  const dispatch = useDispatch();
  const { lists } = useSelector(state => state.lists);
  const list = useSelector(state => state);

  console.log(lists, list);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const submitForm = e => {
    e.preventDefault();
    const { title, description } = state;
    let obj = {
      id: uuid(),
      title,
      description
    };
    let status = lists.find(list => list.id === state.id);
    if (!status) {
      if (state.title !== "") {
        setState({ ...state, loading: true });
        dispatch(addItem(obj));
        setTimeout(() => {
          if (!list.loading) {
            setState({ ...state, title: "", description: "", loading: false });
            toast.success("Added Successfully");
          }
        }, 1000);
      } else {
        toast.warning("Title & Description is Empty");
      }
    } else {
      setState({ ...state, loading: true });
      dispatch(updateItem(state));
      setTimeout(() => {
        if (!list.loading) {
          setState({ ...state, title: "", description: "", loading: false });
          toast.success("Successfully Updated");
        }
      }, 1000);
    }
    setpopupStatus(false);
  };
  const onEdit = ({ title, description, id }) => {
    setState({
      ...state,
      id: id,
      title: title,
      description: description
    });
    setpopupStatus(true);
  };
  const handleClose = () => {
    setpopupStatus(false);
  };
  //console.log(state);
  return (
    <div>
      <Header />
      {state.loading && <Spinner />}
      <Container>
        {!popupStatus && (
          <Jumbotron>
            <h3>Add Book</h3>
            <Create
              handleChange={handleChange}
              submitForm={submitForm}
              state={state}
            />
          </Jumbotron>
        )}
        <Jumbotron>
          <ListItem lists={lists} onEdit={onEdit} loading={true} />
        </Jumbotron>
      </Container>

      {popupStatus && (
        <Update
          status={popupStatus}
          handleClose={handleClose}
          handleChange={handleChange}
          submitForm={submitForm}
          state={state}
        />
      )}
    </div>
  );
}

export default Home;
