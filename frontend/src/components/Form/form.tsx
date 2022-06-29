import axios, { AxiosRequestConfig } from "axios";
import React from "react";
import { BASE_URL } from "../../data/requests";
import Stars from "../StarsRow/stars";

function Form({ title, id }: { title: string, id: number}) {
  

  function handleSubmit(event:React.FormEvent<HTMLFormElement> | any) {
    event.preventDefault();

    const emailValue : string = event.target.inputEmail.value;
    const scoreValue: number = event.target.rating.value;

    
    if (!validateEmail(emailValue)) {
      alert("Invalid email");
      return;
    }


    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: {
        email: emailValue,
        movieId: id,
        score: scoreValue,
      },
    };

    axios(config).then(response => console.log(response));
  }
  
  function validateEmail(email: any) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">{title}</h2>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
        />
        {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        <Stars />

        <div className="d-flex justify-content-center align-items-center mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;