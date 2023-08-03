export const CONTACT_INFORMATION = [
    {
      type: "BANNER",
      image:
        "https://lh5.googleusercontent.com/cySRHRvWUKT2HzjkJTCMr3EgXYypkdAgOVYbZHd9Wwuc2mj5ApBq-c8tuL7VCYKrh4LkXgH3pWCSCKAZ2_C7ztmk2EF69aO6WX-yMP8xAvWvFpxXz9c5iJC-4iOQ4ZyxKg=w1200",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "Contact Information",
      required: true,
    },
    {
        id: 0,
        type: "HEADING",
        question: '',
        option: ''
    },
    {
      id: 1,
      type: "SHORT_ANSWER",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "Name",
      required: true,
    },
    {
      id: 2,
      type: "SHORT_ANSWER",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "Email",
      required: true,
    },
    {
      id: 3,
      type: "PARAGRAPH",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "Address",
      required: true,
    },
    {
      id: 4,
      type: "SHORT_ANSWER",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "Phone Number",
      required: true,
    },
    {
      id: 5,
      type: "PARAGRAPH",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "Comments",
      required: true,
    },
  ];
  
  export const RSVP = [
    {
      type: "BANNER",
      image:
        "https://lh4.googleusercontent.com/tiHHC8iUYBO9dqlHnvBf7QWlX1wlCsv_FF95e_nRRz_rkgFzgIqBM_WmV3GClm97lvyuF8SUl1TKlcyfDBCFuNBKg5kd5VNSLrYLjbcf9cxKmhvs06UGTlqcaj7qj5iB0A=w1200",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "RSVP",
      required: true,
    },
    {
      id: 0,
      type: "HEADING",
      question: '',
      option: ''
  },
    {
      id: 1,
      type: "MULTIPLE_CHOICE",
      option: [
        {
          no: 1,
          value: "Yes,  I'll be there",
        },
        {
          no: 2,
          value: "Sorry, can't make it",
        },
      ],
      question: "Can you attend?",
      required: true,
    },
    {
      id: 2,
      type: "SHORT_ANSWER",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "What are the names of people attending?",
      required: true,
    },
    {
      id: 3,
      type: "PARAGRAPH",
      option: [
        {
          no: 1,
          value: "Website",
        },
        {
          no: 2,
          value: "Newsletter",
        },
        {
          no: 3,
          value: "Advertisement",
        },
      ],
      question: "How did you hear about this event?",
      required: true,
    },
    {
      id: 4,
      type: "PARAGRAPH",
      option: [
        {
          no: 1,
          value: "",
        },
      ],
      question: "Comments and/or questions",
      required: true,
    },
  ];
    
    export const PARTY_INVITE = [
      {
        type: "BANNER",
        image:
          "https://lh6.googleusercontent.com/brwnRW6d_oSQHZBvWZzpHl3hb-CexSrlkipqiXcGLjH6zsW7XeNVtrsweqNjaMtfRDjBF7YmkBI34dvwqHAz5ek7Q28cNt87iS7ZjbXU5XzS8gpGgjl18olJrB-M7buKxg=w1200",
        option: [
          {
            no: 1,
            value: "",
          },
        ],
        question: "Party Invite",
        required: true,
      },
      {
          id: 0,
          type: "HEADING",
          question: 'Party Invite',
          option: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sem odio. Sed commodo vestibulum leo, sit amet tempus odio consectetur in. '
      },
      {
        id: 1,
        type: "SHORT_ANSWER",
        option: [
          {
            no: 1,
            value: "",
          },
        ],
        question: "What is your name?",
        required: false,
      },
      {
          id: 2,
          type: "MULTIPLE_CHOICE",
          option: [
            {
              no: 1,
              value: "Yes,  I'll be there",
            },
            {
              no: 2,
              value: "Sorry, can't make it",
            },
          ],
          question: "Can you attend?",
          required: true,
        },
        {
          id: 3,
          type: "SHORT_ANSWER",
          option: [
            {
              no: 1,
              value: "",
            },
          ],
          question: "How many of you are attending?",
          required: false,
        },
      {
        id: 4,
        type: "CHECK_BOXES",
        option: [
          {
            no: 1,
            value: "Mains",
          },
          {
            no: 2,
            value: "Salad",
          },
          {
            no: 3,
            value: "Dessert",
          },
          {
              no: 4,
              value: "Drinks",
          },
          {
              no: 5,
              value: "Sides/Appetizers",
          },
        ],
        question: "What will you be bringing?",
        required: true,
      },
      {
        id: 4,
        type: "SHORT_ANSWER",
        option: [
          {
            no: 1,
            value: "",
          },
        ],
        question: "Do you have any allergies or dietary restrictions?",
        required: true,
      },
      {
          id: 5,
          type: "SHORT_ANSWER",
          option: [
            {
              no: 1,
              value: "",
            },
          ],
          question: "What is your email address?",
          required: true,
        },
    ];
  
    export const T_SHIRT_SIGN_UP = [
      {
        type: "BANNER",
        image:
          "",
        option: [
          {
            no: 1,
            value: "",
          },
        ],
        question: "T-Shirt Sign Up",
        required: true,
      },
      {
          id: 0,
          type: "HEADING",
          question: 'T-Shirt Sign Up',
          option: 'Enter your name and size to sign up for a T-Shirt.'
      },
      {
        id: 1,
        type: "SHORT_ANSWER",
        option: [
          {
            no: 1,
            value: "",
          },
        ],
        question: "Name",
        required: false,
      },
      {
          id: 2,
          type: "MULTIPLE_CHOICE",
          option: [
            {
              no: 1,
              value: "XS",
            },
            {
              no: 2,
              value: "S",
            },
            {
              no: 3,
              value: "M",
            },
            {
              no: 4,
              value: "L",
            },
            {
              no: 4,
              value: "XL",
            },
          ],
          question: "Shirt size",
          required: true,
        },
        {
          id: 3,
          type: "SHORT_ANSWER",
          option: [
            {
              no: 1,
              value: "",
            },
          ],
          question: "Other thoughts or comments",
          required: false,
        },
    ];
  
    export const Event_Registration = [
      {
        type: "BANNER",
        image:
          "https://lh4.googleusercontent.com/Er4J086YYziu2U2NEemaWlIZxmAmGhpHsS8xMuw0kQl4Js6p6qYnxva6LfuMQGxM50dmhqI1XjwVKGuTGfx1A_T0dfschq1joaJFZk8tPANxEWmKCVdJX5PBd8WKkbHLMg=w1200",
        option: [
          {
            no: 1,
            value: "",
          },
        ],
        question: "Event Registration",
        required: true,
      },
      {
          id: 0,
          type: "HEADING",
          question: 'Event Registration',
          option: ''
      },
      {
        id: 1,
        type: "SHORT_ANSWER",
        option: [
          {
            no: 1,
            value: "",
          },
        ],
        question: "Name",
        required: false,
      },
      {
          id: 2,
          type: "SHORT_ANSWER",
          option: [
            {
              no: 1,
              value: "",
            },
          ],
          question: "Email",
          required: false,
        },
        {
          id: 3,
          type: "SHORT_ANSWER",
          option: [
            {
              no: 1,
              value: "",
            },
          ],
          question: "Organization",
          required: false,
        },
      {
          id: 4,
          type: "MULTIPLE_CHOICE",
          option: [
            {
              no: 1,
              value: "Day 1",
            },
            {
              no: 2,
              value: "Day 2",
            },
            {
              no: 3,
              value: "Day 3",
            },
          ],
          question: "What days will you attend?",
          required: true,
        },
        {
          id: 5,
          type: "MULTIPLE_CHOICE",
          option: [
            {
              no: 1,
              value: "None",
            },
            {
              no: 2,
              value: "Vegetarian",
            },
            {
              no: 3,
              value: "Vegan",
            },
            {
              no: 4,
              value: "Kosher",
            },
            {
              no: 4,
              value: "Gluten-free",
            },
          ],
          question: "Dietary restrictions",
          required: true,
        },
        {
          id: 3,
          type: "CHECK_BOXES",
          option: [
            {
              no: 1,
              value: "Yes",
            },
          ],
          question: "I understand that I will have to pay $$ upon arrival",
          required: false,
        },
    ];