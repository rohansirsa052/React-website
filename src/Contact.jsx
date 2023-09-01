import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .map{
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
   
    .container {
      // background-image: url("https://wallpapercave.com/dwp2x/wp4863905.jpg");
      // background-repeat: no-repeat;
      // background-position: center center;
      // background-size: cover;
      // margin-top: 6rem;
      // text-align: center;
      // opacity: 0.8;
      

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          background-color: "#7882b5";

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
     
    }

  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <div className="container">
        <div className="grid grid-two-column">
          {/* First Column - Contact Form */}
          <div>
            <div className="contact-form">
              <form action="" method="POST" className="contact-inputs">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  required
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />

                <textarea
                  name="message"
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  required
                ></textarea>

                <input type="submit" value="send" />
              </form>
            </div>
          </div>

          {/* Second Column - Map */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115293.14143902087!2d78.479885081431!3d25.44124988844894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481ca!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1693250416921!5m2!1sen!2sin"
              width="100%"
              height="80%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


export default Contact;
