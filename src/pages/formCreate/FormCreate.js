import React, { useEffect, useState } from "react";
import {
  CONTACT_INFORMATION,
  Event_Registration,
  PARTY_INVITE,
  RSVP,
  T_SHIRT_SIGN_UP,
} from "../../constant";
import { QuestionCard } from "../../component/questionCard/QuestionCard";
import { useParams } from "react-router-dom";
import { createFormUser, getUserForms, updateUserForm } from "../../apiCall";
import { Response } from "../../component/response/Response";
// import { Button} from '@chakra-ui/react'

const TEMPLATE = {
  "contact-information": CONTACT_INFORMATION,
  "event-registration": Event_Registration,
  "party-invite": PARTY_INVITE,
  rsvp: RSVP,
  "t-shirt-sign-up": T_SHIRT_SIGN_UP,
};

export const FormCreate = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
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

  const [selectedTab, setTab] = useState(1);
  const [banner, setBanner] = useState({
    question: "",
  });
  const [selectedCard, setSelectedCard] = useState();
  const [formid, setFormId] = useState("");
  const [heading, setHeading] = useState({
    type: "HEADING",
    question: "",
    option: "",
  });
  const { templateName, formId } = useParams();

  useEffect(() => {
    if (templateName) {
      const tempCard = TEMPLATE[templateName].filter(
        (item) => item.type !== "BANNER" && item.type !== "HEADING"
      );
      const cardBanner = TEMPLATE[templateName].filter(
        (item) => item.type === "BANNER"
      );
      const headings = TEMPLATE[templateName].filter(
        (item) => item.type === "HEADING"
      );
      setBanner(...cardBanner);
      setCards(tempCard);
      setHeading(...headings);
    } else if (formId) {
      getFormById();
    }
  }, []);

  const getFormById = async () => {
    const forms = await getUserForms(formId);
    if (forms) {
      setCards(forms.data[0].formData);
      setHeading(forms.data[0].heading);
    }
  };

  const handleAddCard = () => {
    const newCards = [
      ...cards,
      {
        id: cards.length + 1,
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
    ];
    setCards(newCards);
  };

  const setChanges = (card) => {
    const newCards = cards?.map((item) => {
      if (card.id === item.id) {
        item = card;
      }
      return item;
    });
    setCards(newCards);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter((item) => item.id !== id);
    setCards(newCards);
  };

  const handleFormSubmit = async () => {
    if (formId) {
      const updated = await updateUserForm({
        formId: formId,
        formData: cards,
        heading: heading,
      });
      if (updated) {
        setFormId(formId);
        getFormById();
      }
      return;
    }
    const create = await createFormUser({ formData: cards, heading: heading });
    if (create) {
      setFormId(create.data._id);
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
              {banner.question ? banner.question : ""}
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
        <ul className="nav justify-content-center">
          <li
            className={selectedTab === 1 ? "nav-item selected-tab" : "nav-item"}
            onClick={() => setTab(1)}
          >
            <a
              className="nav-link active"
              aria-current="page"
              style={{ color: "#3C4043", cursor: "pointer" }}
            >
              Questions
            </a>
          </li>
          <li
            className={selectedTab === 2 ? "nav-item selected-tab" : "nav-item"}
            onClick={() => setTab(2)}
          >
            <a
              className="nav-link"
              style={{ color: "#3C4043", cursor: "pointer" }}
            >
              Responses
            </a>
          </li>
        </ul>
        <div></div>
        <hr />
        {selectedTab === 1 ? 
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-6">
              {banner ? <img src={banner.image} alt="" width={640} /> : null}
              <div
                className="card text-center"
                style={
                  heading.id === selectedCard
                    ? { borderLeft: "5px solid #4285f4" }
                    : {}
                }
                onClick={() => setSelectedCard(heading.id)}
              >
                <div className="card-header"></div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="input-group mb-3"></div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Heading"
                        aria-label="Question"
                        aria-describedby="basic-addon1"
                        style={{
                          paddingTop: "0.7rem",
                          paddingBottom: "0.7rem",
                        }}
                        value={heading.question}
                        onChange={(e) =>
                          setHeading({ ...heading, question: e.target.value })
                        }
                      />
                      <div style={{ padding: "10px" }}></div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        aria-label="Question"
                        aria-describedby="basic-addon1"
                        style={{
                          paddingTop: "0.7rem",
                          paddingBottom: "0.7rem",
                        }}
                        value={heading.option}
                        onChange={(e) =>
                          setHeading({ ...heading, option: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              {cards?.map((item) => (
                <QuestionCard
                key={item.id}
                  formCard={item}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  setChanges={setChanges}
                  deleteCard={deleteCard}
                />
              ))}
            </div>
            <div className="col">
              <div class="container">
                <div class="row row-cols">
                  <div
                    class="col"
                    style={{ cursor: "pointer" }}
                    onClick={handleAddCard}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={"20"}
                      viewBox="0 0 512 512"
                    >
                      <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>: <Response />}

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Send Form
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder="formLink"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    disabled
                    value={`http://localhost:3000/forms/fill/${formid}/save`}
                  />
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
                {/* <button type="button" class="btn btn-primary"></button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};