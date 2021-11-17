import React from "react";
import ElizabethIrelandsmall from "../../images/ElizabethIrelandsmall.jpg"

export default function About() {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-2">
          <h2>About Me:</h2>
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <table>
              <tr>
                <td>
                  {" "}
                  <img
                    src={ElizabethIrelandsmall}
                    alt="Elizabeth Ireland, marketing maven."
                  />
                </td>

                <td>
                  <p>
                    Hello, and thank you for taking the time to visit my first
                    portfolio page. My name is Elizabeth and I have a background
                    in marketing and SEO optimization. My bachelor’s degree is
                    in Journalism, and I have been in marketing for 10+ years.
                    Over the course of working for different companies, I
                    started coding and fell in love with it. Thank you for
                    visiting and helping my career transition.
                  </p>{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
