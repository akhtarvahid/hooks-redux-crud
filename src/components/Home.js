import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import ListItem from "./ListItem";
import Header from "./Header";
import Create from "./Create";
import Container from "react-bootstrap/Container";
import Update from "./Update";
import Spinner from "../utils/loader/Spinner";
import { getItems, addItem, updateItem } from "../actions/crudActions";
import 'react-toastify/dist/ReactToastify.css';


function Home() {
  const [state, setState] = useState({
    title: "",
    description: "",
    loading: false
  });
  const [popupStatus, setPopupStatus] = useState(false);
  const dispatch = useDispatch();
  const { lists } = useSelector(state => state.lists);
  const list = useSelector(state => state);

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
      id: lists.length + 1,
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
            toast.success("Added successfully!", {
              position: toast.POSITION.TOP_RIGHT
            });
          }
        }, 1000);
      } else {
        toast.warn("Title & Description is Empty!", {
          position: toast.POSITION.TOP_RIGHT
        });
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
    setPopupStatus(false);
  };

  const editHandler = ({ title, description, id }) => {
    setState({
      ...state,
      id: id,
      title: title,
      description
    });
    setPopupStatus(true);
  };

  const handleClose = () => {
    setPopupStatus(false);
  };

  return (
    <div>
      <ToastContainer />
      {state.loading && <Spinner />}
      <Container>
        {!popupStatus && (
          <div>
            <h3>Add Book</h3>
            <Create
              handleChange={handleChange}
              submitForm={submitForm}
              state={state}
            />
          </div>
        )}
        <div>
          {lists?.length > 0 && <ListItem lists={lists} editHandler={editHandler} loading={true} />}
        </div>
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
