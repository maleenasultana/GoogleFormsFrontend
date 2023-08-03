import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserForms, createFormUserResponse } from "../../apiCall";

const CARD_CONST = {
  SHORT_ANSWER: {
    placeholder: "Short Answer text",
  },
  PARAGRAPH: {
    placeholder: "Long Answer text",
  },
  MULTIPLE_CHOICE: {
    placeholder: "Option",
  },
  CHECK_BOXES: {
    placeholder: "Option",
  },
  DROPDOWN: {
    placeholder: "Option",
  },
};

export const ViewForm = (props) => {
  const [cards, setCard] = useState([
    {
      id: 0,
      type: "SHORT_ANSWER",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "",
      required: false,
    },
  ]);

  const [heading, setHeading] = useState({
    type: "HEADING",
    question: "",
    option: "",
  });

  const { formId, action } = useParams();

  useEffect(() => {
    getForm();
    // eslint-disable-next-line 
  }, [formId]);

  const getForm = async () => {
    const form = await getUserForms(formId);
    if (form) {
      setCard(form.data[0].formData);
      setHeading(form.data[0].heading);
    }
  };

  const handleOptionChange = (id, no, e, type) => {
    const newCards = [...cards];
    const updatedCard = newCards.map((item, index) => {
      if (id === item.id) {
        item.option = item.option.map((elem) => {
          if (elem.no === no) {
            if (type === "TEXT"){
              elem.value = e.target.value;
            }
            else {
              item.value = e.target.checked ? no : '';
            }
            
          }
          return elem;
        });
      }
      return item;
    });
    // console.log(updatedCard)
    setCard(updatedCard);
  };

  const handleFormSubmit = async () => {
    const res = await createFormUserResponse({
      formData: cards,
      formId: formId,
    });
    if (res) {
      console.log(res);
    }
  };

  return (
    <>
      <div>
        <div className="container" style={{ height: "30px", padding: "10px" }}>
          <div className="row">
            <div className="col-1">
              <img
                className="gmail-logo-header"
                src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
                srcSet="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x "
                alt=""
                aria-hidden="true"
                style={{
                  width: "50px",
                  height: "40px",
                  marginLeft: "50px",
                  float: "left",
                }}
              />
            </div>
            <div className="col" style={{ marginTop: "10px" }}>
              {heading.question ? heading.question : ""}
            </div>
            <div className="col"></div>
            <div className="col">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                type="button"
                className="btn me-md-2"
                style={{
                  backgroundColor: "#673ab7",
                  color: "#ffffff",
                  float: "right",
                }}
                onClick={handleFormSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px" }}></div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-6">
              <div
                className="card text-center"
              ></div>
              {cards.map((card) => (
                <div className="card text-center">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Question"
                            aria-label="Question"
                            aria-describedby="basic-addon1"
                            style={{
                              paddingTop: "0.7rem",
                              paddingBottom: "0.7rem",
                            }}
                            disabled
                            value={
                              card.required
                                ? card.question + " *"
                                : card.question
                            }
                            onChange={(e) =>
                              setCard({ ...card, question: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    {card.type === "SHORT_ANSWER" ||
                    card.type === "PARAGRAPH" ? (
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder={CARD_CONST[card.type].placeholder}
                          value={card.option[0].value}
                          required={card.required}
                          onChange={(e) => handleOptionChange(card.id, 1, e, "TEXT")}
                        />
                      </div>
                    ) : (
                      <>
                        {card.option.map((item) => (
                          <div className="input-group mb-3 form-check row">
                            <div className="col-1">
                              <input
                                type={
                                  card.type === "CHECK_BOXES"
                                    ? "checkbox"
                                    : card.type === "MULTIPLE_CHOICE"
                                    ? "radio"
                                    : "text"
                                }
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value={card.type === "DROPDOWN" ? item.no : ""}
                                checked={item.no === card.value}
                                onChange={(e) =>
                                  handleOptionChange(card.id, item.no, e, '')
                                }
                                readOnly
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  marginTop: "10px",
                                }}
                              />
                            </div>
                            <div className="col-10">
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder={
                                  CARD_CONST[card.type].placeholder +
                                  " " +
                                  item.no
                                }
                                value={item.value}
                                disabled
                              />
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <div className="card-footer text-muted">
                    <div className="row">
                      <div className="col-8"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col">
              <div class="container">
                <div class="row row-cols">
                  <div
                    class="col"
                    style={{ cursor: "pointer" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Form Completed
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <div class="alert alert-success" role="alert">
                    Thanks for completing the form
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};